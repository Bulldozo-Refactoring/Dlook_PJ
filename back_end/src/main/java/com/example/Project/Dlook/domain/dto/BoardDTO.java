package com.example.Project.Dlook.domain.dto;


import com.example.Project.Dlook.domain.Board;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
@NoArgsConstructor

public class BoardDTO {
    private Long board_no;
    private String board_title;
    private String board_content;
    private Integer board_ctg;
}
