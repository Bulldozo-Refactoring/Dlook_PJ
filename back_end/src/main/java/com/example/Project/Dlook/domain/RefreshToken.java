package com.example.Project.Dlook.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Builder
@Entity
@Getter
@Table(name = "refresh_token")
@NoArgsConstructor
@AllArgsConstructor
public class RefreshToken {
    @Id
    private String refreshKey; // memberEmail 값

    @Column
    private String refreshValue; // Refresh Token String

    public RefreshToken updateValue(String token) {
        this.refreshValue = token;
        return this;
    }
}
