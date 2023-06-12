package com.example.Project.Dlook.controller;

import com.example.Project.Dlook.service.TokenService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class TokenController {
    private final TokenService tokenService;

    @PostMapping("/refresh")
    public ResponseEntity<String> reissueAccessToken(@RequestParam("memberEmail") String memberEmail) {
        String accessToken = tokenService.reissueAccessToken(memberEmail);
        return ResponseEntity.ok().body(accessToken);
    }
}

