package com.example.Project.Dlook.boards.service;

import com.example.Project.Dlook.boards.domain.Board;
import com.example.Project.Dlook.boards.domain.dto.BoardDTO;
import com.example.Project.Dlook.boards.repository.BoardRepository;
import com.example.Project.Dlook.exception.AppException;
import com.example.Project.Dlook.exception.Authority;
import com.example.Project.Dlook.exception.ErrorCode;
import com.example.Project.Dlook.members.domain.Member;
import com.example.Project.Dlook.members.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletRequest;

@Service
@RequiredArgsConstructor
@Slf4j
public class BoardService {

    private final BoardRepository boardRepository;
    private final MemberRepository memberRepository;

    // 어느 토큰이든 값이 나온다.
    @Transactional
    public ResponseEntity<Page<BoardDTO>> list(int page) {
        int pageLimit = 10;
        Pageable pageable = PageRequest.of(page, pageLimit, Sort.by(Sort.Direction.DESC, "boardNo"));
        Page<BoardDTO> boardPage = findAll(pageable);
        return ResponseEntity.ok().body(boardPage);
    }

    @Transactional
    public ResponseEntity<String> write(BoardDTO boardDTO) {
        Member member = memberRepository.findByMemberName(boardDTO.getBoardWriter())
                .orElseThrow(() -> new AppException(ErrorCode.MEMBERNAME_NOT_FOUND));

        Board board = boardDTO.toBoard(member);
        boardRepository.save(board);

        return ResponseEntity.ok().body("Success");
    }

    @Transactional
    public ResponseEntity<BoardDTO> detail(Long boardNo) {
        Board board = boardRepository.findByBoardNo(boardNo)
                .orElseThrow(() -> new AppException(ErrorCode.Board_NOT_FOUND));

        BoardDTO boardDTO = BoardDTO.builder()
                .boardNo(board.getBoardNo())
                .boardTitle(board.getBoardTitle())
                .boardWriter(board.getBoardWriter())
                .boardContent(board.getBoardContent())
                .boardCtg(board.getBoardCtg())
                .build();

        return ResponseEntity.ok().body(boardDTO);
    }

    public ResponseEntity<Board> update(Long boardNo, BoardDTO boardDTO) {
        Board board = boardRepository.findByBoardNo(boardNo)
                .orElseThrow(() -> new AppException(ErrorCode.Board_NOT_FOUND));

        if (!board.getBoardWriter().equals(boardDTO.getBoardWriter())) {
            throw new AppException(ErrorCode.MEMBERNAME_NOT_FOUND);
        }

        Member member = memberRepository.findByMemberName(boardDTO.getBoardWriter())
                .orElseThrow(() -> new AppException(ErrorCode.MEMBERNAME_NOT_FOUND));

        Board updateBoard = Board.builder()
                .boardNo(board.getBoardNo())
                .member(member)
                .boardTitle(boardDTO.getBoardTitle())
                .boardWriter(board.getBoardWriter())
                .boardContent(boardDTO.getBoardContent())
                .boardCtg(board.getBoardCtg())
                .authority(Authority.ROLE_USER)
                .build();

        boardRepository.save(updateBoard);

        return ResponseEntity.ok().body(updateBoard);
    }

    @Transactional
    public ResponseEntity<String> delete(Long boardNo, HttpServletRequest request) {
        Board board = boardRepository.findByBoardNo(boardNo)
                .orElseThrow(() -> new AppException(ErrorCode.Board_NOT_FOUND));

        String name = request.getHeader("memberName");
        if (!board.getBoardWriter().equals(name)) {
            throw new AppException(ErrorCode.MEMBERNAME_NOT_FOUND);
        }

        boardRepository.delete(board);
        return ResponseEntity.ok().body("delete success");
    }

    // Board 엔티티 객체를 BoardDTO 객체로 변환
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
}






