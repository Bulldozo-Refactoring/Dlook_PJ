package com.example.Project.Dlook.boards.service;
import com.example.Project.Dlook.boards.domain.dto.BoardDTO;
import com.example.Project.Dlook.boards.domain.Board;
import com.example.Project.Dlook.boards.repository.BoardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class BoardService {

    private final BoardRepository boardRepository;

    public void save(BoardDTO boardDTO) {
        Board board = Board.builder()
                .boardTitle(boardDTO.getBoardTitle())
                .boardWriter(boardDTO.getBoardWriter())
                .boardContent(boardDTO.getBoardContent())
                .boardCtg(boardDTO.getBoardCtg())
                .build();

        boardRepository.save(board);
    }

    public List<BoardDTO> findAll() {
        List<Board> boardList = boardRepository.findAll();
        List<BoardDTO> boardDTOList = new ArrayList<>();

        for (Board board : boardList) {
            BoardDTO boardDTO = BoardDTO.builder()
                    .boardTitle(board.getBoardTitle())
                    .boardWriter(board.getBoardWriter())
                    .boardContent(board.getBoardContent())
                    .boardCtg(board.getBoardCtg())
                    .build();

            boardDTOList.add(boardDTO);
        }

        return boardDTOList;
    }

    public Optional<BoardDTO> findById(Long boardNo) {
        Optional<Board> optionalBoardEntity = boardRepository.findById(boardNo);
        if (optionalBoardEntity.isPresent()) {
            Board board = optionalBoardEntity.get();
            BoardDTO boardDTO = BoardDTO.builder()
                    .boardWriter(board.getBoardWriter())
                    .boardTitle(board.getBoardTitle())
                    .boardContent(board.getBoardContent())
                    .boardCtg(board.getBoardCtg())
                    .build();
            return Optional.of(boardDTO);
        } else {
            return Optional.empty();
        }
    }

    public void update(BoardDTO updatedBoardDTO) {
        Long boardNo = updatedBoardDTO.getBoardNo();
        Optional<Board> optionalBoardEntity = boardRepository.findById(boardNo);

        if (optionalBoardEntity.isPresent()) {
            Board board = optionalBoardEntity.get();
            board = Board.builder()
                    .boardNo(boardNo)
                    .boardTitle(updatedBoardDTO.getBoardTitle())
                    .boardWriter(updatedBoardDTO.getBoardWriter())
                    .boardContent(updatedBoardDTO.getBoardContent())
                    .boardCtg(updatedBoardDTO.getBoardCtg())
                    .build();

            boardRepository.save(board);
        } else {
            throw new IllegalArgumentException("게시글을 찾을 수 없습니다.");
        }
    }

    public void delete(Long boardNo) {
        boardRepository.deleteById(boardNo);
    }
}






