//package com.example.Project.Dlook.service;
//
//
//import com.example.Project.Dlook.domain.Board;
//import com.example.Project.Dlook.domain.dto.BoardDTO;
//import com.example.Project.Dlook.repository.BoardRepository;
//import lombok.RequiredArgsConstructor;
//import org.springframework.stereotype.Service;
//
//import javax.transaction.Transactional;
//import java.util.ArrayList;
//import java.util.List;
//import java.util.Optional;
//
//@Service
//@RequiredArgsConstructor
//
//public class BoardService {
//
//    private final BoardRepository boardRepository;
//
//    @Transactional
//    public List<BoardDTO> findAll() {
//        List<Board> boardEntityList = boardRepository.findAll();
//        List<BoardDTO> boardDTOList = new ArrayList<>();
//        for (Board boardEntity : boardEntityList) {
//            boardDTOList.add(BoardDTO.boardDTO(boardEntity));
//        }
//
//        return boardDTOList;
//    }
//
//    @Transactional
//    public void write(BoardDTO boardDTO) {
//        Board board = Board.toSave(boardDTO);
//        boardRepository.save(board);
//    }
//
//    @Transactional
//    public BoardDTO findById(Long board_no) {
//        Optional<Board> optionalBoardEntity = boardRepository.findById(board_no);
//        if (optionalBoardEntity.isPresent()) {
//            Board board = optionalBoardEntity.get();
//            BoardDTO boardDTO = BoardDTO.boardDTO(board);
//            return boardDTO;
//        } else {
//            return null;
//        }
//    }
//
//    @Transactional
//    public BoardDTO update(BoardDTO boardDTO) {
//        Board board = Board.toUpdate(boardDTO);
//        boardRepository.save(board);
//        return findById(boardDTO.getBoard_no());
//    }
//
////
////    public void delete(Long board_no) {
////        boardRepository.deleteById(board_no);
////    }
//}
