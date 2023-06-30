package com.example.Project.Dlook.boards.service;


import com.example.Project.Dlook.boards.domain.Board;
import com.example.Project.Dlook.boards.domain.Reply;
import com.example.Project.Dlook.boards.domain.dto.BoardDTO;
import com.example.Project.Dlook.boards.domain.dto.ReplyDTO;
import com.example.Project.Dlook.boards.repository.BoardRepository;
import com.example.Project.Dlook.boards.repository.ReplyRepository;
import com.example.Project.Dlook.exception.AppException;
import com.example.Project.Dlook.exception.ErrorCode;
import com.example.Project.Dlook.members.domain.Member;
import com.example.Project.Dlook.members.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MypageService {

    public final BoardRepository boardRepository;
    public final ReplyRepository replyRepository;
    public final MemberRepository memberRepository;

    @Transactional
    public Page<BoardDTO> findAllBoard(Long memberSeq, Pageable pageable) {
        Optional<Member> optionalMember = memberRepository.findById(memberSeq);
        Member member = optionalMember.orElseThrow(() -> new AppException(ErrorCode.MEMBERNAME_NOT_FOUND));

        Page<Board> boardPage = boardRepository.findByMemberMemberSeq(memberSeq, pageable);
        return boardPage.map(board -> BoardDTO.builder()
                .boardNo(board.getBoardNo())
                .boardWriter(board.getBoardWriter())
                .boardContent(board.getBoardContent())
                .boardCtg(board.getBoardCtg())
                .boardTitle(board.getBoardTitle())
                .boardCtg(board.getBoardCtg())
                .build());
    }
    @Transactional
    public Page<ReplyDTO> findAllReply(Long memberSeq, Pageable pageable) {
        Optional<Member> optionalMember = memberRepository.findById(memberSeq);
        Member member = optionalMember.orElseThrow(() -> new AppException(ErrorCode.MEMBERNAME_NOT_FOUND));

        Page<Reply> replyPage = replyRepository.findByMemberMemberSeq(memberSeq, pageable);
        return replyPage.map(reply -> ReplyDTO.builder()
                .replyNo(reply.getReplyNo())
                .replyContent(reply.getReplyContent())
                .build());
    }
}