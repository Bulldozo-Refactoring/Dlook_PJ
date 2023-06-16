package com.example.Project.Dlook.repository;

import com.example.Project.Dlook.domain.BlackList;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface BlackListRepository extends JpaRepository<BlackList, String> {
    Optional<String> findByAccessToken(String accessToken);
}
