package com.example.Project.Dlook.boards.repository;

import com.example.Project.Dlook.boards.domain.Board;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface BoardRepository extends JpaRepository<Board, Long> {
    Optional<Board> findByBoardNo(Long boardNo);
    Page<Board> findByMemberMemberSeq(Long memberSeq, Pageable pageable);
    Page<Board> findAllByBoardCtg(int category, PageRequest pageRequest);
    @Query("SELECT b FROM Board b")
    Page<Board> findAllCustom(PageRequest pageRequest);
}
