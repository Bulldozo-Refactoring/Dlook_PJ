package com.example.Project.Dlook.members.controller;

import com.example.Project.Dlook.members.domain.dto.JoinRequestDto;
import com.example.Project.Dlook.members.domain.dto.LoginRequestDto;
import com.example.Project.Dlook.members.service.MemberService;
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
    public ResponseEntity<String> join(@RequestBody JoinRequestDto dto) {
        return memberService.join(dto);
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequestDto dto, HttpServletResponse response) {
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
