package com.example.Project.Dlook.algorithm.domain.dto;

import lombok.Builder;

@Builder(toBuilder = true)
public class ProblemDto {
    private String level;
    private Integer solved;
}