package com.example.Project.Dlook.algorithm.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Builder
public class UserDto {
    private Integer tier;
    private Integer maxStreak;
    private Integer rating;
    private String user;
    private Integer solvedCount;
}
