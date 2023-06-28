package com.example.Project.Dlook.boards.domain;

import com.example.Project.Dlook.members.domain.Member;
import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name="reply")
public class Reply extends BaseTime {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long replyNo;


    @Column(nullable = false, length = 500)
    private String replyContent;

    @Column(nullable = false)
    private String replyWriter;

    @ManyToOne
    @JoinColumn(name = "boardNo")
    private Board board;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="memberSeq")
    private Member member;

}