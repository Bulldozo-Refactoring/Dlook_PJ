package com.example.Project.Dlook.boards.domain.dto;


import com.example.Project.Dlook.boards.domain.Board;
import com.example.Project.Dlook.members.domain.Member;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@Setter
public class ReplyDTO {
    private Long replyNo;
    private String replyWriter;
    private String replyContent;
    private Board boardNo;
    private Member memberSeq;
}
