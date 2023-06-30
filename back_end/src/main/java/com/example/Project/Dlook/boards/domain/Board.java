package com.example.Project.Dlook.boards.domain;

import com.example.Project.Dlook.exception.Authority;
import com.example.Project.Dlook.members.domain.Member;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "boards")
@DynamicUpdate
public class Board extends BaseTime {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long boardNo;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="memberSeq")
    private Member member;

    @Column(columnDefinition = "varchar(255)", nullable = false)
    private String boardTitle;

    @Column(columnDefinition = "varchar(255)", nullable = false)
    private String boardWriter;

    @Column(columnDefinition = "varchar(1500)", nullable = false)
    private String boardContent;

    @Column(columnDefinition = "INTEGER", nullable = false)
    private Integer boardCtg;

    @OneToMany(mappedBy = "board", cascade = CascadeType.REMOVE, fetch = FetchType.LAZY)
    private List<Reply> replyList;

    @Enumerated(EnumType.STRING)
    private Authority authority;
}