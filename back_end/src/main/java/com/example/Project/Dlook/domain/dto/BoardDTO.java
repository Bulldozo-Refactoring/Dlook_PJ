package com.example.Project.Dlook.domain.dto;


import com.example.Project.Dlook.domain.Board;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor

public class BoardDTO {
    private Long board_no;
    private Long member_seq;
    private String board_title;
    private String board_content;
    private Integer board_ctg;
    private LocalDateTime cre_date;
    private LocalDateTime upd_date;

    public static BoardDTO boardDTO(Board board) {
        BoardDTO boardDTO = new BoardDTO();
        boardDTO.setBoard_no(board.getBoard_no());
        boardDTO.setMember_seq(boardDTO.getMember_seq());
        boardDTO.setBoard_title(boardDTO.getBoard_title());
        boardDTO.setBoard_content(board.getBoard_content());
        boardDTO.setBoard_ctg(boardDTO.getBoard_ctg());
        boardDTO.setCre_date(boardDTO.getCre_date());
        boardDTO.setUpd_date(boardDTO.getUpd_date());
        return boardDTO;
    }
}
