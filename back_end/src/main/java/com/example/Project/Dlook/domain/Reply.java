package com.example.Project.Dlook.domain;

import com.example.Project.Dlook.domain.dto.ReplyDTO;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@Table(name="reply_table")
public class Reply {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long reply_no;

    @Column(nullable = false)
    private Long board_no;

    @Column(nullable = false)
    private Long member_seq;

    @Column(nullable = false)
    private String reply_writer;

    @Column(length=255, nullable = false)
    private String reply_content;

    @Column(nullable = false)
    @CreationTimestamp
    private LocalDateTime reply_date;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "board_no")
    private Board board;

    public static Reply toSave(ReplyDTO replyDTO, Board board) {
        Reply reply = new Reply();
        reply.setReply_no(replyDTO.getReply_no());
        reply.setReply_writer(replyDTO.getReply_writer());
        reply.setReply_content(replyDTO.getReply_content());
        reply.setReply_date(replyDTO.getReply_date());
        return reply;
    }
}
