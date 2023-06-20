package com.example.Project.Dlook.boards.domain;

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
    private Board boardNo;


}