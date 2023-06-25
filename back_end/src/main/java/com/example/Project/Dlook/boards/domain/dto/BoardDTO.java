package com.example.Project.Dlook.boards.domain.dto;
import com.example.Project.Dlook.boards.domain.Board;
import com.example.Project.Dlook.exception.Authority;
import com.example.Project.Dlook.members.domain.Member;
import lombok.*;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Builder
public class BoardDTO {
    private Long boardNo;
    private String boardTitle;
    private String boardWriter;
    private String boardContent;
    private int boardCtg;

    public Board toBoard(Member member) {
        return Board.builder()
                .member(member)
                .boardTitle(boardTitle)
                .boardWriter(boardWriter)
                .boardContent(boardContent)
                .boardCtg(boardCtg)
                .authority(Authority.ROLE_USER)
                .build();
    }
}
