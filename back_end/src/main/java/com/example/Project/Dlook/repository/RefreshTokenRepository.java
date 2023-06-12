package com.example.Project.Dlook.repository;

import com.example.Project.Dlook.domain.Member;
import com.example.Project.Dlook.domain.RefreshToken;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RefreshTokenRepository extends JpaRepository<RefreshToken, Long> {
    Optional<RefreshToken> findByMemberEmail(String memberEmail);
}
