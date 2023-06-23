package com.example.Project.Dlook.boards.controller;

import com.example.Project.Dlook.boards.domain.Board;
import com.example.Project.Dlook.boards.domain.dto.BoardDTO;
import com.example.Project.Dlook.boards.service.BoardService;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/boards")
@RequiredArgsConstructor
public class BoardController {

    private final BoardService boardService;

    // list
    @GetMapping
    public ResponseEntity<Page<BoardDTO>> boardList(@RequestParam(required = false, defaultValue = "0", value = "page") int page) {
        return boardService.list(page);
    }

    // create
    @PostMapping("/write")
    public ResponseEntity<String> boardWrite(@RequestBody BoardDTO boardDTO) {
        return boardService.write(boardDTO);
    }

    // read
    @GetMapping("/detail/{boardNo}")
    public ResponseEntity<BoardDTO> detail(@PathVariable Long boardNo) {
        return boardService.detail(boardNo);
    }

    // update
    @PatchMapping("/{boardNo}")
    public ResponseEntity<Board> update(@PathVariable("boardNo") Long boardNo, @RequestBody BoardDTO boardDTO) {
        return boardService.update(boardNo, boardDTO);
    }

    // delete
    @DeleteMapping("/{boardNo}")
    public ResponseEntity<String> delete(@PathVariable Long boardNo, HttpServletRequest request) {
        return boardService.delete(boardNo, request);
    }
}
