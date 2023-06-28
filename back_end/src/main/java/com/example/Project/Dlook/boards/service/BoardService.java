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
import org.springframework.data.domain.*;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class BoardService {

    private final BoardRepository boardRepository;
    private final MemberRepository memberRepository;

    @Transactional
    public ResponseEntity<Map<String, Object>> getAllBoardList(int page) {
        PageRequest pageRequest = PageRequest.of(page, 10, Sort.by("boardNo").descending());
        Page<Board> boardPage = boardRepository.findAllCustom(pageRequest);
        List<Board> boardList = boardPage.getContent();

        List<BoardDTO> boardDTOList = new ArrayList<>();

        for (Board board : boardList) {
            BoardDTO boardDTO = BoardDTO.builder()
                    .boardNo(board.getBoardNo())
                    .boardTitle(board.getBoardTitle())
                    .boardWriter(board.getBoardWriter())
                    .boardContent(board.getBoardContent())
                    .boardCtg(board.getBoardCtg())
                    .build();

            boardDTOList.add(boardDTO);
        }

        Map<String, Object> response = new HashMap<>();
        response.put("boardList", boardDTOList);
        response.put("totalPages", boardPage.getTotalPages());
        response.put("totalElements", boardPage.getTotalElements());

        return ResponseEntity.ok(response);
    }

    @Transactional
    public ResponseEntity<Map<String, Object>> getCategoryList(int boardCtg, int page) {
        PageRequest pageRequest = PageRequest.of(page, 10, Sort.by("boardNo").descending());
        Page<Board> boardPage = boardRepository.findAllByBoardCtg(boardCtg, pageRequest);
        List<Board> boardList = boardPage.getContent();

        List<Map<String, Object>> boardInfoList = new ArrayList<>();
        for (Board board : boardList) {
            Map<String, Object> boardInfo = new HashMap<>();
            boardInfo.put("boardNo", board.getBoardNo());
            boardInfo.put("boardTitle", board.getBoardTitle());
            boardInfo.put("boardWriter", board.getBoardWriter());
            boardInfo.put("boardContent", board.getBoardContent());
            boardInfo.put("createdTime", board.getCreatedTime());
            boardInfo.put("boardCtg", board.getBoardCtg());
            boardInfoList.add(boardInfo);
        }

        Map<String, Object> response = new HashMap<>();
        response.put("boardList", boardInfoList);
        response.put("totalPages", boardPage.getTotalPages());
        response.put("totalElements", boardPage.getTotalElements());

        return ResponseEntity.ok(response);
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
}






