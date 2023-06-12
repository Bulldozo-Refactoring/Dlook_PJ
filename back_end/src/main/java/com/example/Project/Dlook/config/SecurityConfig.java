package com.example.Project.Dlook.config;

import com.example.Project.Dlook.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    private final MemberService memberService;
    @Value("${jwt.secret}")
    private String secretKey;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
        return httpSecurity
                .httpBasic().disable()// UI쪽으로 들어오는 것 disable
                .csrf().disable()// XSS 기능
                .cors().and()// XSS에서 도메인이 달라도 허용해준다.
                .authorizeRequests()
                .antMatchers("/members/join", "/members/login").permitAll()
                .antMatchers(HttpMethod.POST, "/**").authenticated()
                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS) // jwt 사용하는 경우 씀
                .and()
                .addFilterBefore(new JwtFilter(memberService, secretKey), UsernamePasswordAuthenticationFilter.class)
                // UsernamePasswordAuthenticationFilter에 의해 처리되기 전에 먼저 JwtFilter를 통과한다는 것을 의미
                .build();
    }
}
