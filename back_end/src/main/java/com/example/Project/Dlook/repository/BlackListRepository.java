package com.example.Project.Dlook.repository;

import com.example.Project.Dlook.domain.BlackList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BlackListRepository extends JpaRepository<BlackList, String> {
    boolean existsByAccessToken(String accessToken);
}
