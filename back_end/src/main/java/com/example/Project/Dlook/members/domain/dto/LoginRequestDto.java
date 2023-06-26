package com.example.Project.Dlook.members.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public class LoginRequestDto {
    private String memberEmail;
    private String memberPw;

    public UsernamePasswordAuthenticationToken toAuthentication() {
        return new UsernamePasswordAuthenticationToken(memberEmail, memberPw);
    }
}
