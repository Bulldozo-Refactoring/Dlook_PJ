package com.example.Project.Dlook.controller;

//import com.example.Project.Dlook.domain.dto.BoardDTO;
import com.example.Project.Dlook.domain.dto.ReplyDTO;
//import com.example.Project.Dlook.domain.Board;
import com.example.Project.Dlook.service.ReplyService;
import lombok.AllArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@AllArgsConstructor
@RequestMapping("/boards/reply")
public class ReplyController {

    private final ReplyService replyService;
//
//    @GetMapping("/")
//    public ResponseEntity<List<ReplyDTO>> replyList() {
//        List<ReplyDTO> replyDTOList = replyService.findAll();
//        return ResponseEntity.ok(replyDTOList);
//    }

    //댓글리스트
    @GetMapping("/")
    public ResponseEntity<List<ReplyDTO>> replyList(@PathVariable("boardNo") Long boardNo) {
        return ResponseEntity.ok(replyService.findAllByBoardNo(boardNo));
    }

    //댓글쓰기
    @PostMapping("/")
    public ResponseEntity<String> replyWrite(@RequestBody ReplyDTO replyDTO, @RequestParam("boardNo") Long boardNo) {
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

