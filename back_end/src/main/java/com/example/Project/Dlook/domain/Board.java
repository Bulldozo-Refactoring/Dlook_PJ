package com.example.Project.Dlook.domain;
import lombok.*;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name="boards")
public class Board extends BaseTime {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long boardNo;

//    주석 추가
//    @ManyToOne
//    @JoinColumn(name="memberSeq")
//    private Member memberSeq;

    @Column(length=255, nullable = false)
    private String boardWriter;

    @Column(length=255, nullable = false)
    private String boardTitle;

    @Column(length = 255, nullable = false)
    private String boardContent;

    @Column(nullable = false)
    private Integer boardCtg;

    @OneToMany(mappedBy = "boardNo", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Reply> replyList = new ArrayList<>();
}



