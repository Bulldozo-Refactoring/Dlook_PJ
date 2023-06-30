package com.example.Project.Dlook.boards.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class GarbageDto {
    private Long garbageNo;
    private Integer garbageContent;
}
