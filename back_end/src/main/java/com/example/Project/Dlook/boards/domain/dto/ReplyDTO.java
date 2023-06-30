package com.example.Project.Dlook.boards.domain.dto;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

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
