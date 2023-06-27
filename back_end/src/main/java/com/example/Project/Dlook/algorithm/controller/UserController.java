package com.example.Project.Dlook.algorithm.controller;

import com.example.Project.Dlook.algorithm.domain.dto.ProblemDto;
import com.example.Project.Dlook.algorithm.domain.dto.UserDto;
import com.example.Project.Dlook.algorithm.service.UserService;
import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
@Slf4j
public class UserController {
    private final UserService userService;

    @GetMapping("/{memberName}")
    public ResponseEntity<UserDto> userInfo(@PathVariable String memberName) throws JsonProcessingException {
        return userService.getUser(memberName);
    }

    @GetMapping("/problem/{level}")
    public List<ProblemDto> ProblemsByLevel(@PathVariable int level) throws JsonProcessingException {
        return userService.getProblemsByLevel(level);
    }
}
