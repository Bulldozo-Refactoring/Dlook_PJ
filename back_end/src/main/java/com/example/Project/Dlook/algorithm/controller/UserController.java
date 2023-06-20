//package com.example.Project.Dlook.algorithm.controller;
//
//import com.example.Project.Dlook.algorithm.service.UserService;
//import lombok.RequiredArgsConstructor;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import java.io.IOException;
//
//@RestController
//@RequestMapping("/users")
//@RequiredArgsConstructor
//public class UserController {
//    private UserService userService;
//
//    @GetMapping("/test")
//    public void abc() throws IOException {
//        Long temp = userService.getTier("Gold");
//        System.out.println(temp);
//    }
//
//    @GetMapping("/test2")
//    public void abc1() throws IOException {
//        Long temp = userService.getSolvedCount();
//        System.out.println(temp);
//    }
//}
