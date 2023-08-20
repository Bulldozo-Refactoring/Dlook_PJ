package com.example.Project.Dlook.boards.controller;

import com.example.Project.Dlook.boards.domain.Board;
import com.example.Project.Dlook.boards.domain.dto.BoardDTO;
import com.example.Project.Dlook.boards.domain.dto.ReplyDTO;
import com.example.Project.Dlook.boards.service.MyPageService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@RequestMapping("/mypages")
public class MyPageController {

    public final MyPageService mypageService;

    @GetMapping("/boards/{memberSeq}")
    public ResponseEntity<Page<Board>> boardWriterList(@PathVariable Long memberSeq,
                                                       @RequestParam(required = false, defaultValue = "0", value = "page") int page) {

        return mypageService.findAllBoard(memberSeq, page);
    }

    @GetMapping("/replys/{memberSeq}")
    public ResponseEntity<Page<ReplyDTO>> replywriterList(@PathVariable Long memberSeq,
                                                          @RequestParam(required = false, defaultValue = "0", value = "page") int page) {

        Pageable pageable = PageRequest.of(page, 10, Sort.Direction.DESC, "replyNo");
        Page<ReplyDTO> replyPage = mypageService.findAllReply(memberSeq, pageable);

        return ResponseEntity.ok(replyPage);
    }
}