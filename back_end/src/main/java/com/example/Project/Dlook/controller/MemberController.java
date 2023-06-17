package com.example.Project.Dlook.controller;

import com.example.Project.Dlook.domain.RefreshToken;
import com.example.Project.Dlook.domain.dto.JoinRequestDTO;
import com.example.Project.Dlook.domain.dto.LoginRequestDTO;
import com.example.Project.Dlook.domain.dto.TokenDto;
import com.example.Project.Dlook.domain.dto.TokenRequestDto;
import com.example.Project.Dlook.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/members")
@RequiredArgsConstructor
@Slf4j
public class MemberController {
    private final MemberService memberService;

    @PostMapping("/join")
    public ResponseEntity<String> join(@RequestBody JoinRequestDTO dto) {
        return memberService.join(dto);
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequestDTO dto, HttpServletResponse response) {
        return memberService.login(dto, response);
    }

    @PostMapping("/reissue")
    public ResponseEntity<String> reissue(HttpServletRequest request, HttpServletResponse response) {
        return memberService.reissue(request, response);
    }

    @GetMapping("/logout") // 전달값 없기에 Get
    public ResponseEntity<String> logout(HttpServletRequest request) {
        return memberService.logout(request);
    }
}
