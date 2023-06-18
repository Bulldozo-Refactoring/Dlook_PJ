package com.example.Project.Dlook.boards.repository;

import com.example.Project.Dlook.boards.domain.Board;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BoardRepository extends JpaRepository<Board, Long> {
}
