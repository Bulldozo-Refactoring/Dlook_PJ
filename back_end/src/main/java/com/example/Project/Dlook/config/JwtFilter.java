package com.example.Project.Dlook.config;

import com.example.Project.Dlook.service.MemberService;
import com.example.Project.Dlook.utils.JwtProvider;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@RequiredArgsConstructor
@Slf4j
public class JwtFilter extends OncePerRequestFilter {
    private final MemberService memberService;
    private final String secretKey;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

        final String authorization = request.getHeader(HttpHeaders.AUTHORIZATION);
        log.info("authorization : {}", authorization);

        // token안보내면 Block
        if (authorization == null || !authorization.startsWith("Bearer ")) {
            log.error("Authorization을 잘못 보냈습니다.");
            response.setStatus(HttpServletResponse.SC_FORBIDDEN);
            filterChain.doFilter(request, response);
            return;
        }

        // Token 꺼내기
        String accessToken = authorization.split(" ")[1]; // Bearer ~~~token 인 경우 Bearer뒤의 " "을 기준으로 뒤쪽이 token

        log.error("Token expire");
        // Token Expired되었는지 여부
        if (JwtProvider.isExpired(accessToken, secretKey)) {
            log.error("Token expire exite");
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED); // 401에러
            filterChain.doFilter(request, response);
            return;
        }

        // MemberEmail Token에서 꺼내기
        String memberEmail = JwtProvider.getMemberEmail(accessToken, secretKey);
        log.info("memberEmail : {}", memberEmail);

        // 권한 부여
        UsernamePasswordAuthenticationToken authenticationToken =
                new UsernamePasswordAuthenticationToken(memberEmail, null, List.of(new SimpleGrantedAuthority("MEMBER")));
        // Detail을 넣어줍니다.
        authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
        SecurityContextHolder.getContext().setAuthentication(authenticationToken); // 사용자 인증, 작업 실행 가능
        filterChain.doFilter(request, response);
    }
}
