package com.example.Project.Dlook.boards.service;
import com.example.Project.Dlook.boards.domain.dto.BoardDTO;
import com.example.Project.Dlook.boards.domain.Board;
import com.example.Project.Dlook.boards.repository.BoardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
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
                .boardNo(boardDTO.getBoardNo())
                .boardTitle(boardDTO.getBoardTitle())
                .boardWriter(boardDTO.getBoardWriter())
                .boardContent(boardDTO.getBoardContent())
                .boardCtg(boardDTO.getBoardCtg())
                .build();

        boardRepository.save(board);
    }

    public Page<BoardDTO> findAll(Pageable pageable) {
        Page<Board> boardPage = boardRepository.findAll(pageable);
        return boardPage.map(board -> BoardDTO.builder()
                .boardNo(board.getBoardNo())
                .boardTitle(board.getBoardTitle())
                .boardWriter(board.getBoardWriter())
                .boardContent(board.getBoardContent())
                .boardCtg(board.getBoardCtg())
                .build());
    }

    public Page<BoardDTO> list(int page) {
        Pageable pageable = PageRequest.of(page, 10, Sort.by(Sort.Direction.DESC, "boardNo"));
        return findAll(pageable);
    }


    public Page<BoardDTO> paging(Pageable pageable) {
        int page = pageable.getPageNumber();
        int pageLimit = 10;

        Page<Board> boardPage = boardRepository.findAll(
                PageRequest.of(page, pageLimit, Sort.by(Sort.Direction.DESC, "boardNo"))
        );

        return boardPage.map(board -> BoardDTO.builder()
                .boardNo(board.getBoardNo())
                .boardTitle(board.getBoardTitle())
                .boardWriter(board.getBoardWriter())
                .boardContent(board.getBoardContent())
                .build()
        );
    }

    public Optional<BoardDTO> findById(Long boardNo) {
        Optional<Board> optionalBoardEntity = boardRepository.findById(boardNo);
        if (optionalBoardEntity.isPresent()) {
            Board board = optionalBoardEntity.get();
            BoardDTO boardDTO = BoardDTO.builder()
                    .boardNo(board.getBoardNo())
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






