package com.example.Project.Dlook.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Table(name = "member")
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long memberSeq;

    @Column(columnDefinition = "varchar(255)", nullable = false)
    private String memberName;

    @Column(columnDefinition = "varchar(255)", nullable = false)
    private String memberEmail;

    @Column(columnDefinition = "varchar(255)", nullable = false)
    private String memberPw;

    @Column(nullable = false)
    private Integer certify;

    @PrePersist
    private void preper() {
        if (certify == null) {
            certify = 0;
        }
    }
}
