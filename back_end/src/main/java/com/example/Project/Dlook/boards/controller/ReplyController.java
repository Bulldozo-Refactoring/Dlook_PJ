package com.example.Project.Dlook.boards.controller;


import com.example.Project.Dlook.boards.domain.dto.ReplyDTO;
import com.example.Project.Dlook.boards.service.ReplyService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@RequestMapping("/boards/{boardNo}/reply")
@RequiredArgsConstructor
public class ReplyController {

    private final ReplyService replyService;

    @GetMapping
    public ResponseEntity<List<ReplyDTO>> replyList(@PathVariable("boardNo") Long boardNo) {
        return replyService.list(boardNo);
    }

    //댓글쓰기
    @PostMapping
    public ResponseEntity<String> replyWrite(@PathVariable("boardNo") Long boardNo, @RequestBody ReplyDTO replyDTO) {
        return replyService.write(boardNo, replyDTO);
    }

    //댓글삭제
    @DeleteMapping("/{replyNo}")
    public ResponseEntity<String> replyDelete(@PathVariable("replyNo") Long replyNo, HttpServletRequest request) {
        return replyService.delete(replyNo, request);
    }
}
