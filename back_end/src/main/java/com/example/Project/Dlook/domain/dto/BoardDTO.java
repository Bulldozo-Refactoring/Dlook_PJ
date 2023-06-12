package com.example.Project.Dlook.domain.dto;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
@Builder
public class BoardDTO {
    private Long boardNo;
    private String boardTitle;
    private String boardContent;
    private Integer boardCtg;
    private LocalDateTime boardCredate;

    public BoardDTO(Long boardNo, String boardTitle, String boardContent, Integer boardCtg, LocalDateTime boardCredate) {
        this.boardNo = boardNo;
        this.boardTitle = boardTitle;
        this.boardContent = boardContent;
        this.boardCtg = boardCtg;
        this.boardCredate = boardCredate;
    }
}



