package com.example.Project.Dlook.service;



import com.example.Project.Dlook.domain.Board;
import com.example.Project.Dlook.domain.dto.BoardDTO;
import com.example.Project.Dlook.repository.BoardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
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
                .boardContent(boardDTO.getBoardContent())
                .boardCtg(boardDTO.getBoardCtg())
                .boardCredate(LocalDateTime.now())
                .build();

        boardRepository.save(board);
    }

    public List<BoardDTO> findAll() {
        List<Board> boardList = boardRepository.findAll();
        List<BoardDTO> boardDTOList = new ArrayList<>();

        for (Board board : boardList) {
            BoardDTO boardDTO = BoardDTO.builder()
                    .boardNo(board.getBoardNo())
                    .boardTitle(board.getBoardTitle())
                    .boardContent(board.getBoardContent())
                    .boardCtg(board.getBoardCtg())
                    .boardCredate(board.getBoardCredate())
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
                    .boardNo(board.getBoardNo())
                    .boardTitle(board.getBoardTitle())
                    .boardContent(board.getBoardContent())
                    .boardCtg(board.getBoardCtg())
                    .boardCredate(board.getBoardCredate())
                    .build();
            return Optional.of(boardDTO);
        } else {
            return Optional.empty();
        }
    }

    public BoardDTO update(BoardDTO boardDTO) {
        Board board = Board.builder()
                .boardNo(boardDTO.getBoardNo())
                .boardTitle(boardDTO.getBoardTitle())
                .boardContent(boardDTO.getBoardContent())
                .boardCtg(boardDTO.getBoardCtg())
                .boardCredate(boardDTO.getBoardCredate())
                .build();

        boardRepository.save(board);

        return findById(boardDTO.getBoardNo()).orElse(null);
    }

    public void delete(Long boardNo) {
        boardRepository.deleteById(boardNo);
    }
}






