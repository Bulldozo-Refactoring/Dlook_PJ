package com.example.Project.Dlook.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class TokenDto {
    private String grantType;
    private Long accessTokenExpiresIn;
    private String memberName;
    private String accessToken;
    private String refreshToken;
}
