package com.example.Project.Dlook.domain;

import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;


@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name="boards")
public class Board {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long boardNo;

    @Column(nullable = false)
    private String memberSeq;

    @Column(length=255, nullable = false)
    private String boardWriter;

    @Column(length=255, nullable = false)
    private String boardTitle;

    @Column(nullable = false)
    private String boardContent;

    @Column(nullable = false)
    private Integer boardCtg;

    @Column(updatable = false, nullable = false)
    @CreationTimestamp
    private LocalDateTime boardCredate;

    @Column(insertable = false, nullable = false)
    @UpdateTimestamp
    private LocalDateTime boardUpddate;

//    @OneToMany(mappedBy = "board", cascade = CascadeType.REMOVE, orphanRemoval = true, fetch = FetchType.LAZY)
//    private List<Reply> replyList = new ArrayList<>();

    }



