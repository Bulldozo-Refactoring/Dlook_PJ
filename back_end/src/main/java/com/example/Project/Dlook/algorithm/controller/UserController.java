package com.example.Project.Dlook.algorithm.controller;

import com.example.Project.Dlook.algorithm.domain.dto.ProblemDto;
import com.example.Project.Dlook.algorithm.domain.dto.UserDto;
import com.example.Project.Dlook.algorithm.service.UserService;
import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.json.simple.parser.ParseException;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.reactive.function.client.WebClient;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpResponse;
import java.util.Collections;
import java.util.List;
import java.util.Set;

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
    public ResponseEntity<List<ProblemDto>> problem(@PathVariable int level) throws JsonProcessingException {
        return ResponseEntity.ok().body(userService.getProblemsByLevel(level));
    }


//    @GetMapping("/test")
//    public void abc() throws IOException, ParseException, UnsupportedEncodingException {
//        Long temp = userService.getTier("Gold");
//        System.out.println(temp);
//    }
//
//    @GetMapping("/test2")
//    public void abc1() throws IOException, ParseException, UnsupportedEncodingException {
//        log.info("wrqwgg");
//        Long temp = userService.getSolvedCount();
//        log.info("temp : {}", temp);
//        System.out.println(temp);
//    }

//    @GetMapping("/problem")
//    public ResponseEntity<?> problem() {
//        String url = "https://solved.ac/api/v3/user/show?handle=noxknow";
//        RestTemplate restTemplate = new RestTemplate();
//
//        HttpHeaders headers = new HttpHeaders();
//        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
//
//        RequestEntity<?> requestEntity = new RequestEntity<>(headers, HttpMethod.GET, URI.create(url));
//        ResponseEntity<String> response = restTemplate.exchange(requestEntity, String.class);
//
//        return ResponseEntity.ok().body(response.getBody());
//    }
}
