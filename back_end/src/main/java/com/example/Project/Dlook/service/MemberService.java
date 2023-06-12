package com.example.Project.Dlook.service;

import com.example.Project.Dlook.domain.Member;
import com.example.Project.Dlook.domain.RefreshToken;
import com.example.Project.Dlook.exception.AppException;
import com.example.Project.Dlook.exception.ErrorCode;
import com.example.Project.Dlook.repository.MemberRepository;
import com.example.Project.Dlook.repository.RefreshTokenRepository;
import com.example.Project.Dlook.utils.JwtProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;
    private final RefreshTokenRepository refreshTokenRepository;
    private final BCryptPasswordEncoder encoder;

    @Value("${jwt.secret}") // application.yml 파일에 있는 secret 값이 들어간다.
    private String secretKey;
    private Long accessTokenExpireTimeMs = 1000 * 20l; // 1시간 (실험 위해서 1분)
    private Long refreshTokenExpireTimeMs = 1000 * 10 * 60l; // 일주일 (실험 위해서 10분)

    public String join(String memberName, String memberEmail, String memberPw) {
        // memberName 중복 체크
        memberRepository.findByMemberName(memberName)
                .ifPresent(member -> {
                    throw new AppException(ErrorCode.MEMBERNAME_DUPLICATED, memberName + " already Exist");
                });

        // memberEmail 중복 체크
        memberRepository.findByMemberEmail(memberEmail)
                .ifPresent(member -> {
                    throw new AppException(ErrorCode.MEMBEREMAIL_DUPLICATED, memberEmail + " already Exist");
                });

        Member member = Member.builder()
                .memberName(memberName)
                .memberEmail(memberEmail)
                .memberPw(encoder.encode(memberPw))
                .build();
        memberRepository.save(member);

        return "SUCCESS";
    }

    public Map<String, String> login(String memberEmail, String memberPw) {
        // memberEmail 없음
        Member selectedMemberEmail = memberRepository.findByMemberEmail(memberEmail)
                .orElseThrow(() -> new AppException(ErrorCode.MEMBEREMAIL_NOT_FOUND, memberEmail + " doesn't exist"));

        // memberPw 틀림 ( memberRepository에 있는 pw와 들어온 pw 비교)
        // log.info("selectedPw:{} pw:{}", selectedMemberEmail.getMemberPw(), memberPw);
        if (!encoder.matches(memberPw, selectedMemberEmail.getMemberPw())) {
            throw new AppException(ErrorCode.INVALID_PASSWORD, " wrong password");
        }

        // accessToken과 refreshToken 모두 동일한 비밀 키. 일관성이 보장, 토큰 유효성 검사 프로세스 간소화.
        String accessToken = JwtProvider.createAccessToken(selectedMemberEmail.getMemberEmail(), secretKey, accessTokenExpireTimeMs);
        String refreshToken = JwtProvider.createRefreshToken(selectedMemberEmail.getMemberEmail(), secretKey, refreshTokenExpireTimeMs);

        RefreshToken saveRefresh = RefreshToken.builder()
                .refreshToken(refreshToken)
                .memberEmail(memberEmail)
                .build();
        refreshTokenRepository.save(saveRefresh);

        Map<String, String> tokens = new HashMap<>();
        tokens.put("accessToken", accessToken);
        tokens.put("refreshToken", refreshToken);
        return tokens;
    }
}
