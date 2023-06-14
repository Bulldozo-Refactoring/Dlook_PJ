package com.example.Project.Dlook.controller;

import com.example.Project.Dlook.domain.dto.UserJoinRequest.UserJoinRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/member")
public class UserController {

    @PostMapping("/join")
    public ResponseEntity<String> join(@RequestBody UserJoinRequest dto) {
        return ResponseEntity.ok().body("회원가입이 성공했습니다.");
    }
}
