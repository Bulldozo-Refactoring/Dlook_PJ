package com.example.Project.Dlook.boards.controller;

import com.example.Project.Dlook.boards.domain.dto.BoardDTO;
import com.example.Project.Dlook.boards.service.BoardService;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/boards")
@RequiredArgsConstructor
public class BoardController {

    private final BoardService boardService;

    // list
    @GetMapping("/")
    public ResponseEntity<List<BoardDTO>> boardsList() {
        List<BoardDTO> boardDTOList = boardService.findAll();
        return ResponseEntity.ok(boardDTOList);
    }

    // create
    @PostMapping("/write")
    public ResponseEntity<String> boardWrite(@RequestBody BoardDTO boardDTO) {
        boardService.save(boardDTO);
        return ResponseEntity.ok("Success");
    }

    // read
    @GetMapping("/detail/{boardNo}")
    public ResponseEntity<BoardDTO> findById(@PathVariable Long boardNo, Model model) {
        Optional<BoardDTO> boardDTOOptional = boardService.findById(boardNo);
        if (boardDTOOptional.isPresent()) {
            BoardDTO boardDTO = boardDTOOptional.get();
            model.addAttribute("board", boardDTO);
            return ResponseEntity.ok(boardDTO);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // update

    @PutMapping("/{boardNo}")
    public ResponseEntity<String> updateBoard(@PathVariable("boardNo") Long boardNo, @RequestBody BoardDTO boardDTO) {
        boardDTO.setBoardNo(boardNo);
        boardService.update(boardDTO);
        return ResponseEntity.ok("Success");
    }


    // delete
    @DeleteMapping("/{boardNo}")
    public ResponseEntity<String> delete(@PathVariable Long boardNo) {
        boardService.delete(boardNo);
        return ResponseEntity.ok("Success");
    }


}
