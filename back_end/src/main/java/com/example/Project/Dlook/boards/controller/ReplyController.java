package com.example.Project.Dlook.boards.controller;


import com.example.Project.Dlook.boards.domain.dto.ReplyDTO;
import com.example.Project.Dlook.boards.service.ReplyService;
import lombok.AllArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@AllArgsConstructor
@RequestMapping("/boards/{boardNo}/reply")
public class ReplyController {

    private final ReplyService replyService;

    @GetMapping("/")
    public ResponseEntity<List<ReplyDTO>> replyList(@PathVariable ("boardNo") Long boardNo) {
        List<ReplyDTO> replyDTOList = replyService.findAll(boardNo);
        return ResponseEntity.ok(replyDTOList);
    }

    //댓글쓰기
    @PostMapping("/")
    public ResponseEntity<String> replyWrite(@PathVariable("boardNo") Long boardNo, @RequestBody ReplyDTO replyDTO) {
        replyService.save(boardNo, replyDTO);
        return ResponseEntity.ok("Success");
    }

    //댓글삭제
    @DeleteMapping("/{replyNo}")
    public ResponseEntity<String> replyDelete(@PathVariable("replyNo") Long replyNo) {
        replyService.delete(replyNo);
        return ResponseEntity.ok("Success");
    }
}
