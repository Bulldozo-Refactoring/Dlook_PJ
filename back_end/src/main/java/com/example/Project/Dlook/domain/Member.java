package com.example.Project.Dlook.domain;

import com.example.Project.Dlook.exception.Authority;
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

    @Column(unique = true, columnDefinition = "varchar(255)", nullable = false)
    private String memberName;

    @Column(unique = true, columnDefinition = "varchar(255)", nullable = false)
    private String memberEmail;

    @Column(columnDefinition = "varchar(255)", nullable = false)
    private String memberPw;

    @Enumerated(EnumType.STRING)
    private Authority authority;

    @Column(nullable = false)
    private Integer certify;

    @PrePersist
    private void preper() {
        if (certify == null) {
            certify = 0;
        }
    }

    @Builder
    public Member(String memberEmail, String memberPw, Authority authority) {
        this.memberEmail = memberEmail;
        this.memberPw = memberPw;
        this.authority = authority;
    }
}
