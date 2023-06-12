package com.example.Project.Dlook.utils;

import com.example.Project.Dlook.domain.RefreshToken;
import com.example.Project.Dlook.service.MemberService;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;

import java.util.Date;

@RequiredArgsConstructor
public class JwtProvider {
    private final MemberService memberService;

    @Value("${jwt.secret}") // application.yml 파일에 있는 secret 값이 들어간다.
    private String secretKey;
    private Long accessTokenExpireTimeMs = 1000 * 60l; // 1시간 (실험 위해서 1분)
    private Long refreshTokenExpireTimeMs = 1000 * 10 * 60l; // 일주일 (실험 위해서 10분)

    public static String getMemberEmail(String token, String secretKey) {
        return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token)
                .getBody().get("memberEmail", String.class);
    }
    public static boolean isExpired(String token, String secretKey) {
        return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token)
                .getBody().getExpiration().before(new Date());
        // token이 만료된 것이 지금보다 전이면 token이 만료된 것이다.
    }

    public static String createAccessToken(String memberEmail, String key, Long accessTokenExpireTimeMs) {
        Claims claims = Jwts.claims();
        claims.put("memberEmail", memberEmail);

        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + accessTokenExpireTimeMs))
                .signWith(SignatureAlgorithm.HS256, key)
                .compact();
    }

    public static String createRefreshToken(String memberEmail, String secretKey, Long refreshTokenExpireTimeMs) {
        Claims claims = Jwts.claims();
        claims.put("memberEmail", memberEmail);

        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + refreshTokenExpireTimeMs))
                .signWith(SignatureAlgorithm.HS256, secretKey)
                .compact();
    }

    public static String validationRefreshToken(RefreshToken refreshTokenObj, String memberEmail, String secretKey, Long accessTokenExpireTimeMs){
        // refresh 객체에서 refreshToken 추출
        String refreshToken = refreshTokenObj.getRefreshToken();

        try {
            // 검증
            Jws<Claims> claims = Jwts.parser().setSigningKey(secretKey).parseClaimsJws(refreshToken);
            //refresh 토큰의 만료시간이 지나지 않았을 경우, 새로운 access 토큰을 생성합니다.
            if (!claims.getBody().getExpiration().before(new Date())) {
                return recreationAccessToken(memberEmail, secretKey, accessTokenExpireTimeMs);
            }
        } catch (Exception e) {
            //refresh 토큰이 만료되었을 경우, 로그인이 필요합니다.
            return null;
        }
        return null;
    }

    public static String recreationAccessToken(String memberEmail, String secretKey, Long accessTokenExpireTimeMs){
        Claims claims = Jwts.claims();
        claims.put("memberEmail", memberEmail); // 정보는 key / value 쌍으로 저장된다.

        //Access Token
        String accessToken = Jwts.builder()
                .setClaims(claims) // 정보 저장
                .setIssuedAt(new Date(System.currentTimeMillis())) // 토큰 발행 시간 정보
                .setExpiration(new Date(System.currentTimeMillis() + accessTokenExpireTimeMs)) // set Expire Time
                .signWith(SignatureAlgorithm.HS256, secretKey)  // 사용할 암호화 알고리즘과
                // signature 에 들어갈 secret값 세팅
                .compact();

        return accessToken;
    }
}
