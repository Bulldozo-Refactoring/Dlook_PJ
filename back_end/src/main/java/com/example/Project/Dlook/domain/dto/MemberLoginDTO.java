package com.example.Project.Dlook.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public class MemberLoginDTO {
    private String memberEmail;
    private String memberPw;
}
