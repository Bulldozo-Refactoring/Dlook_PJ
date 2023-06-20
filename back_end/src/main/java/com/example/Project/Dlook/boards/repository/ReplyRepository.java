package com.example.Project.Dlook.boards.repository;

import com.example.Project.Dlook.boards.domain.Reply;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReplyRepository extends JpaRepository<Reply, Long> {
    List<Reply> findByBoardNo(Long boardNo);
}
