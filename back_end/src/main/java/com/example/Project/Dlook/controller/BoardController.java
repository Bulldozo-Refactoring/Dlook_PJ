package com.example.Project.Dlook.controller;

import com.example.Project.Dlook.domain.dto.BoardDTO;
import com.example.Project.Dlook.repository.BoardRepository;
import com.example.Project.Dlook.service.BoardService;
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

    private final BoardRepository boardRepository;

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
    public ResponseEntity<String> findById(@PathVariable Long boardNo, Model model) {
        Optional<BoardDTO> boardDTO = boardService.findById(boardNo);
        model.addAttribute("board", boardDTO);
        return ResponseEntity.ok("Success");
    }

    // delete
    @DeleteMapping("/{boardNo}")
    public ResponseEntity<String> delete(@PathVariable Long boardNo) {
        boardService.delete(boardNo);
        return ResponseEntity.ok("Success");
    }

    @PostMapping("/{boardNo}")
    public ResponseEntity<String> updateBoard(@PathVariable("boardNo") Long boardNo, BoardDTO boardDTO) {
        BoardDTO updatedBoardDTO = new BoardDTO(boardNo, boardDTO.getBoardTitle(), boardDTO.getBoardContent(), boardDTO.getBoardCtg(), boardDTO.getBoardCredate());
        boardService.update(updatedBoardDTO);
        return ResponseEntity.ok("Success");
    }
}