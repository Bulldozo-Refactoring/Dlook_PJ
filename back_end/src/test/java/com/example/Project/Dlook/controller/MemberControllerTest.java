package com.example.Project.Dlook.controller;

import com.example.Project.Dlook.domain.dto.MemberJoinDTO;
import com.example.Project.Dlook.domain.dto.MemberLoginDTO;
import com.example.Project.Dlook.exception.AppException;
import com.example.Project.Dlook.exception.ErrorCode;
import com.example.Project.Dlook.service.MemberService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest
public class MemberControllerTest {

    @Autowired
    MockMvc mockMvc;

    @MockBean
    MemberService memberService;

    @Autowired
    ObjectMapper objectMapper;

    @Test
    @DisplayName("회원가입 성공")
    @WithMockUser
    void join() throws Exception {
        String memberName = "noxknow";
        String memberEmail = "chris2769@naver.com";
        String memberPw = "1q2w3e4r";
        mockMvc.perform(post("/members/join")
                        .with(csrf())
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsBytes(new MemberJoinDTO(memberName, memberEmail, memberPw))))
                        .andDo(print())
                        .andExpect(status().isOk());
    }

    @Test
    @DisplayName("회원가입 실패 - memberEmail 중복")
    @WithMockUser
    void join_fail1() throws Exception {
        String memberName = "noxknow";
        String memberEmail = "chris2769@naver.com";
        String memberPw = "1q2w3e4r";

        when(memberService.join(any(), any(), any()))
                .thenThrow(new RuntimeException("해당 memberEmail이 중복됩니다."));

        mockMvc.perform(post("/members/join")
                        .with(csrf())
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsBytes(new MemberJoinDTO(memberName, memberEmail, memberPw))))
                        .andDo(print())
                        .andExpect(status().isConflict());
    }

    @Test
    @DisplayName("회원가입 실패 - memberName 중복")
    @WithMockUser
    void join_fail2() throws Exception {
        String memberName = "noxknow";
        String memberEmail = "chris2769@naver.com";
        String memberPw = "1q2w3e4r";

        when(memberService.join(any(), any(), any()))
                .thenThrow(new RuntimeException("해당 memberName이 중복됩니다."));

        mockMvc.perform(post("/members/join")
                        .with(csrf())
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsBytes(new MemberJoinDTO(memberName, memberEmail, memberPw))))
                        .andDo(print())
                        .andExpect(status().isConflict());
    }

    @Test
    @DisplayName("로그인 성공")
    @WithMockUser
    void login_success() throws Exception {
        String memberEmail = "chris2769@naver.com";
        String memberPw = "1q2w3e4r";

        when(memberService.login(any(), any()))
                .thenReturn("token");

        mockMvc.perform(post("/members/login")
                        .with(csrf())
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsBytes(new MemberLoginDTO(memberEmail, memberPw))))
                        .andDo(print())
                        .andExpect(status().isOk());
    }

    @Test
    @DisplayName("로그인 실패 - memberEmail 없음")
    @WithMockUser
    void login_fail1() throws Exception {
        String memberEmail = "chris2769@naver.com";
        String memberPw = "1q2w3e4r";

        when(memberService.login(any(), any()))
                .thenThrow(new AppException(ErrorCode.MEMBEREMAIL_NOT_FOUND, ""));

        mockMvc.perform(post("/members/login")
                        .with(csrf())
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsBytes(new MemberLoginDTO(memberEmail, memberPw))))
                .andDo(print())
                .andExpect(status().isNotFound());
    }

    @Test
    @DisplayName("로그인 실패 - password 틀림")
    @WithMockUser
    void login_fail2() throws Exception {
        String memberEmail = "chris2769@naver.com";
        String memberPw = "1q2w3e4r";

        when(memberService.login(any(), any()))
                .thenThrow(new AppException(ErrorCode.INVALID_PASSWORD, ""));

        mockMvc.perform(post("/members/login")
                        .with(csrf())
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsBytes(new MemberLoginDTO(memberEmail, memberPw))))
                        .andDo(print())
                        .andExpect(status().isUnauthorized());
    }
}
