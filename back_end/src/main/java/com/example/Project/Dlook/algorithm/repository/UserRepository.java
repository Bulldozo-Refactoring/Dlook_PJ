package com.example.Project.Dlook.algorithm.repository;

import com.example.Project.Dlook.algorithm.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}
