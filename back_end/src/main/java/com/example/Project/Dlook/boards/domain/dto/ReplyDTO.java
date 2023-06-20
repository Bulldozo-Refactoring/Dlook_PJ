package com.example.Project.Dlook.boards.domain.dto;


import com.example.Project.Dlook.boards.domain.Board;
import lombok.*;

@Data
@NoArgsConstructor
@Builder
@Getter
@Setter

public class ReplyDTO {
    private Long replyNo;
    private String replyWriter;
    private String replyContent;
    private Board boardNo;

    public ReplyDTO(Long replyNo, String replyWriter, String replyContent, Board boardNo) {
        this.replyNo = replyNo;
        this.replyWriter = replyWriter;
        this.replyContent = replyContent;
        this.boardNo = boardNo;
    }

    public Long getReplyNo() {
        return replyNo;
    }

    public String getReplyWriter() {
        return replyWriter;
    }

    public String getReplyContent() {
        return replyContent;
    }

}
