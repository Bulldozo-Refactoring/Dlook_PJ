package com.example.Project.Dlook.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Builder
public class Reply extends BaseTime {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long replyNo;

//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "user_id")
//    @OnDelete(action = OnDeleteAction.CASCADE)
//    private Member memberseq;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "boardNo")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Board boardNo;

    @Column(nullable = false)
    private String replyContent;

    @Column(nullable = false)
    private String replyWriter;
}
