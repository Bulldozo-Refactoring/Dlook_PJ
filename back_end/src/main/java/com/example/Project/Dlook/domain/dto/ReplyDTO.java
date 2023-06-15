package com.example.Project.Dlook.domain.dto;

import com.example.Project.Dlook.domain.Reply;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ReplyDTO {
    private Long replyNo;
    private String replyContent;
    private String replyWriter;

    public static ReplyDTO newDTO(Reply reply) {
        return new ReplyDTO(
                reply.getReplyNo(),
                reply.getReplyContent(),
                reply.getReplyWriter()
        );
    }
}