package com.example.Project.Dlook.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@AllArgsConstructor
@Getter
public enum ErrorCode {
    // Member
    MEMBEREMAIL_DUPLICATED(HttpStatus.CONFLICT), // 409
    MEMBERNAME_DUPLICATED(HttpStatus.CONFLICT), // 409
    MEMBEREMAIL_NOT_FOUND(HttpStatus.NOT_FOUND), // 404
    MEMBERNAME_NOT_FOUND(HttpStatus.NOT_FOUND), // 404
    MEMBER_LOGOUT(HttpStatus.NOT_FOUND), // 404

    // Token
    EXPIRED_TOKEN(HttpStatus.UNAUTHORIZED), // 401
    INVALID_PASSWORD(HttpStatus.UNAUTHORIZED), // 401
    INVALID_TOKEN(HttpStatus.UNAUTHORIZED), // 401
    INVALID_SIGNATURE(HttpStatus.UNAUTHORIZED), // 401

    // Board
    Board_NOT_FOUND(HttpStatus.NOT_FOUND); // 404

    private HttpStatus httpStatus;
}
