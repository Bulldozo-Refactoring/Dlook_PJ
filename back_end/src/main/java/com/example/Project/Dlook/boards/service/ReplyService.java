//package com.example.Project.Dlook.service;
//
//import com.example.Project.Dlook.domain.dto.ReplyDTO;
//import com.example.Project.Dlook.domain.Reply;
//import com.example.Project.Dlook.boards.domain.Board;
//import com.example.Project.Dlook.boards.repository.BoardRepository;
//import com.example.Project.Dlook.repository.ReplyRepository;
//import lombok.RequiredArgsConstructor;
//import org.springframework.stereotype.Service;
//
//import java.util.ArrayList;
//import java.util.List;
//
//@Service
//@RequiredArgsConstructor
//
//public class ReplyService {
//
//    private final BoardRepository boardRepository;
//    private final ReplyRepository replyRepository;
//
//
//    public ReplyDTO save(Long boardNo, ReplyDTO replyDTO) {
//        Reply reply = Reply.builder()
//                .replyContent(replyDTO.getReplyContent())
//                .replyWriter(replyDTO.getReplyWriter())
//                .build();
//
//        Board board = boardRepository.findById(boardNo)
//                .orElseThrow(() -> new IllegalArgumentException("게시판을 찾을 수 없습니다."));
//
//        reply.setBoardNo(board);
//        replyRepository.save(reply);
//
//        return ReplyDTO.newDTO(reply);
//    }
//
//
//    public List<ReplyDTO> findAllByBoardNo(Long boardNo) {
//        List<Reply> replyList = replyRepository.findAllByBoardNo(boardNo);
//        List<ReplyDTO> replyDTOList = new ArrayList<>();
//
//        for (Reply reply : replyList) {
//            ReplyDTO replyDTO = ReplyDTO.builder()
//                    .replyWriter(reply.getReplyWriter())
//                    .replyContent(reply.getReplyContent())
//                    .build();
//
//            replyDTOList.add(replyDTO);
//        }
//
//        return replyDTOList;
//    }
//
//
//    public void delete(Long replyNo) {
//        replyRepository.findById(replyNo);
//    }
//}