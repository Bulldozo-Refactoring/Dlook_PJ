package com.example.Project.Dlook.members.domain.dto;

import com.example.Project.Dlook.members.domain.Member;
import com.example.Project.Dlook.exception.Authority;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public class JoinRequestDto {

    private String memberName; // Nickname
    private String memberEmail;
    private String memberPw;

    public Member toMember(BCryptPasswordEncoder encoder) {
        return Member.builder()
                .memberName(memberName)
                .memberEmail(memberEmail)
                .memberPw(encoder.encode(memberPw))
                .authority(Authority.ROLE_USER)
                .build();
    }
}