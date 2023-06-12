package com.example.Project.Dlook.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public class MemberJoinDTO {
    private String memberName;
    private String memberEmail;
    private String memberPw;
}
