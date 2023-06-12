//package com.example.Project.Dlook.controller;
//
//import com.example.Project.Dlook.domain.dto.ReplyDTO;
//import com.example.Project.Dlook.service.ReplyService;
//import lombok.RequiredArgsConstructor;
//import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.ModelAttribute;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.ResponseBody;
//
//@Controller
//@RequiredArgsConstructor
//@RequestMapping("/reply")
//public class ReplyController {
//
//    private final ReplyService replyService;
//
//    @PostMapping("/write")
//    public @ResponseBody String writeReply(@ModelAttribute ReplyDTO replyDTO) {
//        Long saveResult = replyService.write(replyDTO);
//        replyService.write(replyDTO);
//        return "요청성공";
//    }
//}
