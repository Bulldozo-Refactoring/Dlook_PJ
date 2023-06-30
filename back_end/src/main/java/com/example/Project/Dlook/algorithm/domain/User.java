package com.example.Project.Dlook.algorithm.domain;

import com.example.Project.Dlook.algorithm.SolvedStatus;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

//    @OneToOne(fetch = FetchType.LAZY)
//    @Column(unique = true)
//    private Member handle;  // member 에 handle(백준 id) 추가

    private Integer solvedCount; // 푼 문제 수

    @Enumerated(EnumType.STRING)
    private SolvedStatus solvedStatus;  // 성공 , 실패 여부
}
