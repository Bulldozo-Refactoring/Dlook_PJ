package com.example.Project.Dlook.boards.repository;

import com.example.Project.Dlook.boards.domain.Reply;
import com.example.Project.Dlook.members.domain.Member;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface ReplyRepository extends JpaRepository<Reply, Long> {
    Optional<Reply> findByReplyNo(Long replyNo);
    List<Reply> findByBoardBoardNo(Long boardNo);
    Page<Reply> findByMemberMemberSeq(Long memberSeq, Pageable pageable);
}
