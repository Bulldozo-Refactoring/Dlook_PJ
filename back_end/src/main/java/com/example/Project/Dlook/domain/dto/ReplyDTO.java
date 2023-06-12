package com.example.Project.Dlook.domain.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;

@Getter
@Setter
@ToString
public class ReplyDTO {
    private Long reply_no;
    private Long board_no;
    private Long member_seq;
    private String reply_writer;
    private String reply_content;
    private LocalDateTime reply_date;
}
