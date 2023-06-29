package com.example.Project.Dlook.boards.domain.dto;


import com.example.Project.Dlook.boards.domain.Board;
import com.example.Project.Dlook.members.domain.Member;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
public class ReplyDTO {
    private Long replyNo;
    private String replyWriter;
    private String replyContent;
    private Long boardNo;
    private Long memberSeq;
}
