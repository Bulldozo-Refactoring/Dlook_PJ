package com.example.Project.Dlook.boards.controller;

import com.example.Project.Dlook.boards.domain.dto.BoardDTO;
import com.example.Project.Dlook.boards.domain.dto.ReplyDTO;
import com.example.Project.Dlook.boards.service.MypageService;
import com.example.Project.Dlook.members.domain.Member;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@RequestMapping("/mypage")
public class MypageController {

    public final MypageService mypageService;

    @GetMapping("/boards/{memberSeq}")
    public ResponseEntity<Page<BoardDTO>> boardwriterList(@PathVariable("memberSeq") Long memberSeq,
                                                          @RequestParam(required = false, defaultValue = "0", value = "page") int page) {
        Pageable pageable = PageRequest.of(page, 10, Sort.Direction.DESC, "boardNo");
        Page<BoardDTO> writePage = mypageService.findAllBoard(memberSeq, pageable);
        return ResponseEntity.ok(writePage);
    }

    @GetMapping("/replys/{memberSeq}")
    public ResponseEntity<Page<ReplyDTO>> replywriterList(@PathVariable("memberSeq") Long memberSeq,
                                                          @RequestParam(required = false, defaultValue = "0", value = "page") int page) {
        Pageable pageable = PageRequest.of(page, 10, Sort.Direction.DESC, "replyNo");
        Page<ReplyDTO> replyPage = mypageService.findAllReply(memberSeq, pageable);
        return ResponseEntity.ok(replyPage);
    }

    @GetMapping("/certify")
    public ResponseEntity<?> certifyBJ() {
        return ResponseEntity.ok("");
    }

    @PostMapping("/certify")
    public ResponseEntity<?> certifyBackjoon() {
        return ResponseEntity.ok("");
    }
}