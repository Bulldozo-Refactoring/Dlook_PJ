package com.example.Project.Dlook.controller;

import com.example.Project.Dlook.domain.dto.BoardDTO;
import com.example.Project.Dlook.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/boards")
@RequiredArgsConstructor
public class BoardController {

    private final BoardService boardService;

//list

    @PostMapping("/")
    public ResponseEntity<List<BoardDTO>> boardsList() {
        List<BoardDTO> boardDTOList = boardService.findAll();
        return ResponseEntity.ok(boardDTOList);
    }


//create

    @GetMapping("/write")
    public ResponseEntity<BoardDTO> writeForm() {

        return ResponseEntity.ok(new BoardDTO());
    }

    @PostMapping("/write")
    public String writeBoard(@ModelAttribute BoardDTO boardDTO) {
        boardService.write(boardDTO);
        return "redirect:/boards";
    }

    // read
    @GetMapping("/detail/{boardNo}") // 여기는 GET{boardNo}가 겹쳐서 일단 바꿈
    public String findById(@PathVariable Long board_no, Model model) {

        BoardDTO boardDTO = boardService.findById(board_no);
        model.addAttribute("board", boardDTO);
        return "detail";

    }
//update

    @GetMapping("/{boardNo}")
    public String updateForm(@PathVariable("boardNo") Long board_no, Model model) {
        BoardDTO boardDTO = boardService.findById(board_no);
        model.addAttribute("board", boardDTO);
        return "updateForm";
    }

    @PostMapping("/{boardNo}")
    public String updateBoard(@PathVariable("boardNo") Long board_no, @ModelAttribute BoardDTO boardDTO) {
        // 게시글 업데이트
        boardDTO.setBoard_no(board_no);
        boardService.update(boardDTO);
        return "redirect:/boards/{board_no}";
    }

    //delete

    @DeleteMapping("/{boardNo}")
    public String deleteBoard(@PathVariable("boardNo") Long board_no) {
        return "redirect:/";
    }

}
