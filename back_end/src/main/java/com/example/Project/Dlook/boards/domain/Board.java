package com.example.Project.Dlook.boards.domain;
import com.example.Project.Dlook.boards.domain.BaseTime;
import lombok.*;
import javax.persistence.*;

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

//    @OneToMany(mappedBy = "boardNo", cascade = CascadeType.ALL, orphanRemoval = true)
//    private List<Reply> replyList = new ArrayList<>();
//


    public String getBoardTitle() {
        return boardTitle;
    }

    public void setBoardTitle(String boardTitle) {
        this.boardTitle = boardTitle;
    }

    public String getBoardWriter() {
        return boardWriter;
    }

    public void setBoardWriter(String boardWriter) {
        this.boardWriter = boardWriter;
    }

    public String getBoardContent() {
        return boardContent;
    }

    public void setBoardContent(String boardContent) {
        this.boardContent = boardContent;
    }

    public Integer getBoardCtg() {
        return boardCtg;
    }

    public void setBoardCtg(Integer boardCtg) {
        this.boardCtg = boardCtg;
    }

    public Long getBoardNo() {
        return boardNo;
    }

    public void setBoardNo(Long boardNo) {
        this.boardNo = boardNo;
    }

}



