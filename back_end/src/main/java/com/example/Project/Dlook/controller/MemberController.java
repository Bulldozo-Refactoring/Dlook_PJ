package com.example.Project.Dlook.controller;

import com.example.Project.Dlook.domain.dto.JoinRequestDTO;
import com.example.Project.Dlook.domain.dto.LoginRequestDTO;
import com.example.Project.Dlook.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/members")
@RequiredArgsConstructor
public class MemberController {
    private final MemberService memberService;

    @PostMapping("/join")
    public ResponseEntity<String> join(@RequestBody JoinRequestDTO dto) {
        memberService.join(dto.getMemberName(), dto.getMemberEmail(), dto.getMemberPw());
        return ResponseEntity.ok().body("join success");
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> login(@RequestBody LoginRequestDTO dto) {
        Map<String, String> tokens = memberService.login(dto.getMemberEmail(), dto.getMemberPw());
        return ResponseEntity.ok().body(tokens);
    }

    @PostMapping("/review")
    public void review(@RequestBody LoginRequestDTO dto) {
    }
}
