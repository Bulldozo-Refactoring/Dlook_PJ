package com.example.Project.Dlook.domain.dto;
import lombok.*;
@Data
@NoArgsConstructor
@Builder
public class BoardDTO {
    private Long boardNo;
    private String boardTitle;
    private String boardWriter;
    private String boardContent;
    private Integer boardCtg;

    public BoardDTO(Long boardNo, String boardTitle, String boardWriter, String boardContent, Integer boardCtg) {
        this.boardNo = boardNo;
        this.boardTitle = boardTitle;
        this.boardWriter = boardWriter;
        this.boardContent = boardContent;
        this.boardCtg = boardCtg;
    }
}