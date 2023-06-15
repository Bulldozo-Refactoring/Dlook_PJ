package com.example.Project.Dlook.domain.dto;
import lombok.*;
@Data
@NoArgsConstructor
@Builder
public class BoardDTO {
    private String boardTitle;
    private String boardWriter;
    private String boardContent;
    private Integer boardCtg;

    public BoardDTO(String boardTitle, String boardWriter, String boardContent, Integer boardCtg) {
        this.boardTitle = boardTitle;
        this.boardWriter = boardWriter;
        this.boardContent = boardContent;
        this.boardCtg = boardCtg;
    }
}