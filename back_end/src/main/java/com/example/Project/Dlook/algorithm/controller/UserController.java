package com.example.Project.Dlook.algorithm.controller;

import com.example.Project.Dlook.algorithm.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.json.simple.parser.ParseException;
import org.springframework.http.HttpRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpResponse;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
@Slf4j
public class UserController {
    private UserService userService;

    @GetMapping("/test")
    public void abc() throws IOException, ParseException, UnsupportedEncodingException {
        Long temp = userService.getTier("Gold");
        System.out.println(temp);
    }

    @GetMapping("/test2")
    public void abc1() throws IOException, ParseException, UnsupportedEncodingException {
        log.info("wrqwgg");
        Long temp = userService.getSolvedCount();
        log.info("temp : {}", temp);
        System.out.println(temp);
    }

//    @GetMapping("/problem")
//    public ResponseEntity<?> problem() throws IOException {
//        HttpClient client = HttpClient.newHttpClient();
//        client.newBuilder()
//                .uri(URI.create("https://solved.ac/api/v3/search/problem?query=1305&page=2&sort=level&direction=desc"))
//                .header("Accept", "application/json")
//                .method("GET", HttpRequest.BodyPublishers.noBody())
//                .build();
//        HttpResponse<String> response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());
//        return response.body();
//    }
}
