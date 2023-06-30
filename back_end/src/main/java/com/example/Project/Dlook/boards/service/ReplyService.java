package com.example.Project.Dlook.boards.service;

import com.example.Project.Dlook.boards.domain.Board;
import com.example.Project.Dlook.boards.domain.Reply;
import com.example.Project.Dlook.boards.domain.dto.ReplyDTO;
import com.example.Project.Dlook.boards.repository.ReplyRepository;
import com.example.Project.Dlook.exception.AppException;
import com.example.Project.Dlook.exception.ErrorCode;
import com.example.Project.Dlook.members.domain.Member;
import com.example.Project.Dlook.members.repository.MemberRepository;
import lombok.Builder;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

/**
 * The type Reply service.
 */
@Service
@Builder
@RequiredArgsConstructor
public class ReplyService {

    private final ReplyRepository replyRepository;
    private final MemberRepository memberRepository;

    /**
     * List response entity.
     *
     * @param boardNo the board no
     * @return the response entity
     */
    @Transactional
    public ResponseEntity<List<ReplyDTO>> list(Long boardNo) {
        List<Reply> replyList = replyRepository.findByBoardBoardNo(boardNo);
        List<ReplyDTO> replyDTOList = new ArrayList<>();

        for (Reply reply : replyList) {
            ReplyDTO replyDTO = ReplyDTO.builder()
                    .replyNo(reply.getReplyNo())
                    .replyWriter(reply.getReplyWriter())
                    .replyContent(reply.getReplyContent())
                    .memberSeq(reply.getMember().getMemberSeq())
                    .boardNo(boardNo)
                    .build();

            replyDTOList.add(replyDTO);
        }

        return  ResponseEntity.ok().body(replyDTOList);
    }

    /**
     * Write response entity.
     *
     * @param boardNo  the board no
     * @param replyDTO the reply dto
     * @return the response entity
     */
    @Transactional
    public ResponseEntity<String> write(Long boardNo, ReplyDTO replyDTO) {
        Member member = memberRepository.findByMemberName(replyDTO.getReplyWriter())
                .orElseThrow(() -> new AppException(ErrorCode.MEMBERNAME_NOT_FOUND));

        Board board = Board.builder()
                .boardNo(boardNo)
                .build();

        Reply reply = Reply.builder()
                .replyNo(replyDTO.getReplyNo())
                .replyWriter(replyDTO.getReplyWriter())
                .replyContent(replyDTO.getReplyContent())
                .member(member)
                .board(board)
                .build();

        replyRepository.save(reply);

        return ResponseEntity.ok().body("Success");
    }

    /**
     * Delete response entity.
     *
     * @param replyNo the reply no
     * @param request the request
     * @return the response entity
     */
    @Transactional
    public ResponseEntity<String> delete(Long replyNo, HttpServletRequest request) {
        Reply reply = replyRepository.findByReplyNo(replyNo)
                .orElseThrow(() -> new AppException(ErrorCode.REPLY_NOT_FOUND));

        String name = request.getHeader("memberName");
        if (!reply.getReplyWriter().equals(name)) {
            throw new AppException(ErrorCode.MEMBERNAME_NOT_FOUND);
        }

        replyRepository.delete(reply);

        return ResponseEntity.ok().body("delete success");
    }
}