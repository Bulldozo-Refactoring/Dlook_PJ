package com.example.Project.Dlook.service;

import com.example.Project.Dlook.domain.Member;
import com.example.Project.Dlook.exception.AppException;
import com.example.Project.Dlook.exception.ErrorCode;
import com.example.Project.Dlook.repository.MemberRepository;
import com.example.Project.Dlook.utils.JwtTokenUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;
    private final BCryptPasswordEncoder encoder;

    @Value("${jwt.secret}")
    private String key;
    private Long expireTimeMs = 1000 * 60 * 60l;

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

    public String login(String memberEmail, String memberPw) {
        // memberEmail 없음
        Member selectedMemberEmail = memberRepository.findByMemberEmail(memberEmail)
                .orElseThrow(() -> new AppException(ErrorCode.MEMBEREMAIL_NOT_FOUND, memberEmail + " doesn't exist"));

        // memberPw 틀림
        // log.info("selectedPw:{} pw:{}", selectedMemberEmail.getMemberPw(), memberPw);
        if (!encoder.matches(memberPw, selectedMemberEmail.getMemberPw())) {
            throw new AppException(ErrorCode.INVALID_PASSWORD, " wrong password");
        }

        String token = JwtTokenUtil.createToken(selectedMemberEmail.getMemberEmail(), key, expireTimeMs);

        return token;
    }
}
