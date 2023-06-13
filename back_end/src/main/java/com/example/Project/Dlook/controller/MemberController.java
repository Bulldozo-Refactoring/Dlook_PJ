package com.example.Project.Dlook.controller;

import com.example.Project.Dlook.domain.dto.JoinRequestDTO;
import com.example.Project.Dlook.domain.dto.LoginRequestDTO;
import com.example.Project.Dlook.domain.dto.TokenDto;
import com.example.Project.Dlook.domain.dto.TokenRequestDto;
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
        memberService.join(dto);
        return ResponseEntity.ok().body("join success");
    }

    @PostMapping("/login")
    public ResponseEntity<TokenDto> login(@RequestBody LoginRequestDTO dto) {
        return ResponseEntity.ok(memberService.login(dto));
    }

    @PostMapping("/reissue")
    public ResponseEntity<TokenDto> reissue(@RequestBody TokenRequestDto dto) {
        return ResponseEntity.ok(memberService.reissue(dto));
    }
}
