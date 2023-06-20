package com.example.Project.Dlook.exception;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND, reason = "entity not found")
public class DataNotFoundException extends RuntimeException {
    // 클래스의 버전 관리가 가능하고 이 클래스의 인스턴스를 직렬화 및 역직렬화할 때 호환성을 보장하는 데 도움이 됨
    private static final long serialVersionUID = 1L;

    public DataNotFoundException(String message) {
        super(message);
    }
}
