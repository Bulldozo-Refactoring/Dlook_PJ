//package com.example.Project.Dlook.service;
//
//import com.example.Project.Dlook.domain.Board;
//import com.example.Project.Dlook.domain.Reply;
//import com.example.Project.Dlook.domain.dto.ReplyDTO;
//import com.example.Project.Dlook.repository.BoardRepository;
//import com.example.Project.Dlook.repository.ReplyRepository;
//import lombok.RequiredArgsConstructor;
//import org.springframework.stereotype.Service;
//
//import java.util.Optional;
//
//@Service
//@RequiredArgsConstructor
//public class ReplyService {
//    private final ReplyRepository replyRepository;
//    private final BoardRepository boardRepository;
//
//    //create
//
//    public Long write(ReplyDTO replyDTO) {
//        Optional<Board> optionalBoard = boardRepository.findById(replyDTO.getBoard_no());
//        if(optionalBoard.isPresent()) {
//            Board board = optionalBoard.get();
//            Reply reply = Reply.toSave(replyDTO, board);
//            return replyRepository.save(reply).getReply_no();
//        } else {
//            return null;
//        }
//
//    }
//}
