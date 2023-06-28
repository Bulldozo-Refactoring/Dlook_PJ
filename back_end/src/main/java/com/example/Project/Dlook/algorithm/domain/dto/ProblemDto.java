package com.example.Project.Dlook.algorithm.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Builder
public class ProblemDto {
    private Integer problemId;
    private String titleKo;
}