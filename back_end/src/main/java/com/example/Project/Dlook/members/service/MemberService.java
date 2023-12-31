package com.example.Project.Dlook.members.service;

import com.example.Project.Dlook.exception.AppException;
import com.example.Project.Dlook.exception.ErrorCode;
import com.example.Project.Dlook.members.domain.BlackList;
import com.example.Project.Dlook.members.domain.Member;
import com.example.Project.Dlook.members.domain.RefreshToken;
import com.example.Project.Dlook.members.domain.dto.EmailRequestDto;
import com.example.Project.Dlook.members.domain.dto.JoinRequestDto;
import com.example.Project.Dlook.members.domain.dto.LoginRequestDto;
import com.example.Project.Dlook.members.domain.dto.TokenDto;
import com.example.Project.Dlook.members.repository.BlackListRepository;
import com.example.Project.Dlook.members.repository.MemberRepository;
import com.example.Project.Dlook.members.repository.RefreshTokenRepository;
import com.example.Project.Dlook.utils.JwtProvider;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Random;

/**
 * The type Member service.
 */
@Service
@Slf4j
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;
    private final RefreshTokenRepository refreshTokenRepository;
    private final BlackListRepository blackListRepository;

    private final AuthenticationManagerBuilder authenticationManagerBuilder;
    private final JwtProvider jwtProvider;
    private final BCryptPasswordEncoder encoder;

    private final JavaMailSender javaMailSender;

    /**
     * Join response entity.
     *
     * @param dto the dto
     * @return the response entity
     */
    @Transactional
    public ResponseEntity<String> join(JoinRequestDto dto) {

        // memberName 중복 체크
        memberRepository.findByMemberName(dto.getMemberName())
                .ifPresent(member -> {
                    throw new AppException(ErrorCode.MEMBERNAME_DUPLICATED);
                });

        // memberEmail 중복 체크
        memberRepository.findByMemberEmail(dto.getMemberEmail())
                .ifPresent(member -> {
                    throw new AppException(ErrorCode.MEMBEREMAIL_DUPLICATED);
                });

        Member member = dto.toMember(encoder);
        memberRepository.save(member);

        return ResponseEntity.ok().body("join success");
    }

    public ResponseEntity<String> sendMail(EmailRequestDto dto) {

        String authNum = createCode();
        log.info(authNum);
        MimeMessage mimeMessage = javaMailSender.createMimeMessage();

        try {
            MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, false, "UTF-8");
            mimeMessageHelper.setTo(dto.getMemberEmail()); // 메일 수신자
            mimeMessageHelper.setSubject("[Dlook] 이메일 인증을 위한 인증코드를 보내 드립니다."); // 메일 제목
            mimeMessageHelper.setText("<html><body><p>인증 코드: " + authNum + "</p></body></html>", true);
            javaMailSender.send(mimeMessage);

            return ResponseEntity.ok().body(authNum);
        } catch (MessagingException e) {

            throw new RuntimeException(e);
        }
    }

    public String createCode() {

        Random random = new Random();
        StringBuilder key = new StringBuilder();

        for (int i = 0; i < 8; i++) {
            int index = random.nextInt(4);

            switch (index) {
                case 0: key.append((char) ((int) random.nextInt(26) + 97)); break;
                case 1: key.append((char) ((int) random.nextInt(26) + 65)); break;
                default: key.append(random.nextInt(9));
            }
        }
        return key.toString();
    }

    /**
     * Login response entity.
     *
     * @param dto      the dto
     * @param response the response
     * @return the response entity
     */
    @Transactional
    public ResponseEntity<String> login(LoginRequestDto dto, HttpServletResponse response) {

        // memberEmail 없음
        Member selectedMemberEmail = memberRepository.findByMemberEmail(dto.getMemberEmail())
                .orElseThrow(() -> new AppException(ErrorCode.MEMBEREMAIL_NOT_FOUND));

        // memberPw 틀림 ( memberRepository에 있는 pw와 들어온 pw 비교)
        // log.info("selectedPw:{} pw:{}", selectedMemberEmail.getMemberPw(), memberPw);
        if (!encoder.matches(dto.getMemberPw(), selectedMemberEmail.getMemberPw())) {
            throw new AppException(ErrorCode.INVALID_PASSWORD);
        }

        UsernamePasswordAuthenticationToken authenticationToken = dto.toAuthentication();

        // 2. 실제로 검증 (사용자 비밀번호 체크) 이 이루어지는 부분
        // authenticate 메서드가 실행이 될 때 CustomUserDetailsService 에서 만들었던 loadUserByUsername 메서드가 실행됨
        Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);

        // 3. 인증 정보를 기반으로 JWT 토큰 생성
        TokenDto tokenDto = jwtProvider.generateTokenDto(authentication);
        response.addHeader("Authorization", "Bearer " + tokenDto.getAccessToken());
        response.addHeader("RefreshToken", tokenDto.getRefreshToken());

        RefreshToken refreshToken = RefreshToken.builder()
                .refreshKey(authentication.getName())
                .refreshValue(tokenDto.getRefreshToken())
                .build();
        refreshTokenRepository.save(refreshToken);

        return ResponseEntity.ok().body("login success");
    }

    /**
     * Reissue response entity.
     *
     * @param request  the request
     * @param response the response
     * @return the response entity
     */
    @Transactional
    public ResponseEntity<String> reissue(HttpServletRequest request, HttpServletResponse response) {

        String refreshToken = request.getHeader("RefreshToken");

        if (!jwtProvider.validateToken(refreshToken)) {
            throw new AppException(ErrorCode.INVALID_TOKEN);
        }

        // 1. Access Token 에서 Member ID 가져오기
        Authentication authentication = jwtProvider.getAuthentication(refreshToken);

        RefreshToken newRefreshToken = refreshTokenRepository.findByRefreshKey(authentication.getName())
                .orElseThrow(() -> new AppException(ErrorCode.MEMBER_LOGOUT));

        // 2. 새로운 토큰 생성
        TokenDto tokenDto = jwtProvider.generateTokenDto(authentication);
        response.addHeader("Authorization", "Bearer " + tokenDto.getAccessToken());
        response.addHeader("RefreshToken", tokenDto.getRefreshToken());


        // 3. 저장소 정보 업데이트
        newRefreshToken.updateValue(tokenDto.getRefreshToken());
        refreshTokenRepository.save(newRefreshToken);

        // 토큰 발급
        return ResponseEntity.ok().body("Token reissue");
    }

    /**
     * Logout response entity.
     *
     * @param request the request
     * @return the response entity
     */
    public ResponseEntity<String> logout(HttpServletRequest request) {

        String accessToken = request.getHeader("Authorization").substring(7);

        // 1. Access Token 에서 Member ID 가져오기
        Authentication authentication = jwtProvider.getAuthentication(accessToken);

        // 2. 저장소에서 Member ID 를 기반으로 Refresh Token 값 가져옴
        RefreshToken refreshTokenValue = refreshTokenRepository.findByRefreshKey(authentication.getName())
                .orElseThrow(() -> new AppException(ErrorCode.MEMBER_LOGOUT));

        if (refreshTokenValue != null) { refreshTokenRepository.delete(refreshTokenValue); }

        Long expiration = jwtProvider.getExpiration(accessToken);

        BlackList blackList = BlackList.builder()
                .accessToken(accessToken)
                .message("logout")
                .expiration(expiration)
                .build();
        blackListRepository.save(blackList);

        return ResponseEntity.ok().body("logout success");
    }
}
