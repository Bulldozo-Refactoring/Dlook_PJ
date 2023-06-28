package com.example.Project.Dlook.boards.controller;


import com.example.Project.Dlook.boards.domain.dto.ReplyDTO;
import com.example.Project.Dlook.boards.service.ReplyService;
import lombok.AllArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/boards/{boardNo}/reply")
public class ReplyController {

    private final ReplyService replyService;

    @GetMapping
    public ResponseEntity<List<ReplyDTO>> replyList(@PathVariable("boardNo") Long boardNo) {
        return replyService.replyList(boardNo);
    }


    //댓글쓰기
    @PostMapping
    public ResponseEntity<String> replyWrite(@PathVariable("boardNo") Long boardNo, @RequestBody ReplyDTO replyDTO) {
        return replyService.save(boardNo, replyDTO);
    }

    //댓글삭제
    @DeleteMapping("/{replyNo}")
    public ResponseEntity<String> replyDelete(@PathVariable("replyNo") Long replyNo) {
        return replyService.delete(replyNo);
    }
}
