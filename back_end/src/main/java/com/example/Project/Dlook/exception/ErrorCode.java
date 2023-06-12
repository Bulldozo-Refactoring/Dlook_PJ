package com.example.Project.Dlook.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@AllArgsConstructor
@Getter
public enum ErrorCode {
    MEMBEREMAIL_DUPLICATED(HttpStatus.CONFLICT, ""),
    MEMBERNAME_DUPLICATED(HttpStatus.CONFLICT, ""),
    MEMBEREMAIL_NOT_FOUND(HttpStatus.NOT_FOUND, ""),
    TOKEN_NOT_FOUND(HttpStatus.NOT_FOUND, ""),
    INVALID_PASSWORD(HttpStatus.UNAUTHORIZED, "");

    private HttpStatus httpStatus;
    private String message;
}
