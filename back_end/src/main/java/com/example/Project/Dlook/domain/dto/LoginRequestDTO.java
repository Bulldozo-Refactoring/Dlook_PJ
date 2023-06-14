package com.example.Project.Dlook.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public class LoginRequestDTO {
    private String memberEmail;
    private String memberPw;

    public UsernamePasswordAuthenticationToken toAuthentication() {
        return new UsernamePasswordAuthenticationToken(memberEmail, memberPw);
    }
}
