package com.example.Project.Dlook.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Table(name = "blackList")
public class BlackList {
    @Id
    private String accessToken;

    @Column(columnDefinition = "varchar(255)", nullable = false)
    private String message;

    @Column(nullable = false)
    private Long expiration;
}
