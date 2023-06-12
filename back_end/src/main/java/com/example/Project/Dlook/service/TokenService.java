package com.example.Project.Dlook.service;

import com.example.Project.Dlook.domain.RefreshToken;
import com.example.Project.Dlook.exception.AppException;
import com.example.Project.Dlook.exception.ErrorCode;
import com.example.Project.Dlook.repository.RefreshTokenRepository;
import com.example.Project.Dlook.utils.JwtProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TokenService {
    private final RefreshTokenRepository refreshTokenRepository;

    @Value("${jwt.secret}") // application.yml 파일에 있는 secret 값이 들어간다.
    private String secretKey;
    private Long accessTokenExpireTimeMs = 1000 * 60l; // 1시간 (실험 위해서 1분)
    private Long refreshTokenExpireTimeMs = 1000 * 10 * 60l; // 일주일 (실험 위해서 10분)

    public String reissueAccessToken(String memberEmail) {
        RefreshToken refreshTokenObj = refreshTokenRepository.findByMemberEmail(memberEmail)
                .orElseThrow(() -> new AppException(ErrorCode.TOKEN_NOT_FOUND, " Token doesn't exist"));

        String accessToken = JwtProvider.validationRefreshToken(refreshTokenObj, memberEmail, secretKey, accessTokenExpireTimeMs);
        return accessToken;
    }
}
