package com.example.Project.Dlook.domain;


import com.example.Project.Dlook.domain.dto.BoardDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name="boards")
public class Board {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long board_no;

    @Column(nullable = false)
    
    private String member_seq;

    @Column(length=255, nullable = false)
    private String board_writer;

    @Column(length=255, nullable = false)
    private String board_title;

    @Column(nullable = false)
    private String board_content;

    @Column(nullable = false)
    private Integer board_ctg;

    @Column(updatable = false, nullable = false)
    @CreationTimestamp
    private LocalDateTime board_credate;

    @Column(insertable = false, nullable = false)
    @UpdateTimestamp
    private LocalDateTime board_upddate;

    @OneToMany(mappedBy = "board", cascade = CascadeType.REMOVE, orphanRemoval = true, fetch = FetchType.LAZY)
    private List<Reply> replyList = new ArrayList<>();



    public static Board toSave(BoardDTO boardDTO) {
        Board board= new Board();
        board.setBoard_no(boardDTO.getBoard_no());
        board.setBoard_title(boardDTO.getBoard_title());
        board.setBoard_content(boardDTO.getBoard_content());
        board.setBoard_ctg(boardDTO.getBoard_ctg());

        return board;
    }

    public static Board toUpdate(BoardDTO boardDTO) {
        Board board = new Board();
        board.setBoard_no(boardDTO.getBoard_no());
        board.setBoard_title(boardDTO.getBoard_title());
        board.setBoard_content(boardDTO.getBoard_content());
        board.setBoard_ctg(boardDTO.getBoard_ctg());


        return board;
    }
}


