package com.example.Project.Dlook.controller;

import com.example.Project.Dlook.domain.dto.MemberJoinDTO;
import com.example.Project.Dlook.domain.dto.MemberLoginDTO;
import com.example.Project.Dlook.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/members")
@RequiredArgsConstructor
public class MemberController {
    private final MemberService memberService;

    @PostMapping("/join")
    public ResponseEntity<String> join(@RequestBody MemberJoinDTO dto) {
        memberService.join(dto.getMemberName(), dto.getMemberEmail(), dto.getMemberPw());
        return ResponseEntity.ok().body("join success");
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody MemberLoginDTO dto) {
        String token = memberService.login(dto.getMemberEmail(), dto.getMemberPw());
        return ResponseEntity.ok().body(token);
    }
}
