package com.example.Project.Dlook.boards.service;
import com.example.Project.Dlook.boards.domain.Board;

import com.example.Project.Dlook.boards.domain.Reply;
import com.example.Project.Dlook.boards.domain.dto.ReplyDTO;

import com.example.Project.Dlook.boards.repository.ReplyRepository;
import lombok.Builder;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@Builder
@RequiredArgsConstructor
public class ReplyService {

    private final ReplyRepository replyRepository;


    public void save(Long boardNo, ReplyDTO replyDTO) {
        Board board = Board.builder()
                .boardNo(boardNo)
                .build();

        Reply reply = Reply.builder()
                .replyNo(replyDTO.getReplyNo())
                .replyWriter(replyDTO.getReplyWriter())
                .replyContent(replyDTO.getReplyContent())
                .boardNo(board)
                .build();

        replyRepository.save(reply);
    }

    public List<ReplyDTO> findAll(Long boardNo) {
        List<Reply> replyList = replyRepository.findByBoardNo(boardNo);
        List<ReplyDTO> replyDTOList = new ArrayList<>();

        for (Reply reply : replyList) {
            ReplyDTO replyDTO = ReplyDTO.builder()
                    .replyNo(reply.getReplyNo())
                    .replyWriter(reply.getReplyWriter())
                    .replyContent(reply.getReplyContent())
                    .build();

            replyDTOList.add(replyDTO);
        }

        return replyDTOList;
    }



    public void delete(Long replyNo) {replyRepository.deleteById(replyNo);
    }


}