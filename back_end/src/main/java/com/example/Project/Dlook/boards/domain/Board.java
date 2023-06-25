package com.example.Project.Dlook.boards.domain;
import com.example.Project.Dlook.boards.domain.dto.BoardDTO;
import com.example.Project.Dlook.exception.Authority;
import com.example.Project.Dlook.members.domain.Member;
import lombok.*;
import org.hibernate.annotations.DynamicUpdate;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.w3c.dom.Text;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
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

    @Column(columnDefinition = "Integer", nullable = false)
    private int boardCtg;

    @Enumerated(EnumType.STRING)
    private Authority authority;

//    @OneToMany(mappedBy = "board", cascade = CascadeType.REMOVE, fetch = FetchType.LAZY, orphanRemoval = true)
//    private List<Reply> replyList;
}