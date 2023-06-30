package com.example.Project.Dlook.boards.service;

import com.example.Project.Dlook.boards.domain.Garbage;
import com.example.Project.Dlook.boards.domain.dto.GarbageDto;
import com.example.Project.Dlook.boards.repository.GarbageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class GarbageService {

    private final GarbageRepository garbageRepository;

    @Transactional
    public ResponseEntity<List<GarbageDto>> list() {
        int pageNumber = 0;
        int pageSize = 50;
        Sort sort = Sort.by(Sort.Direction.DESC, "garbageNo");

        PageRequest pageRequest = PageRequest.of(pageNumber, pageSize, sort);

        Page<Garbage> garbagePage = garbageRepository.findAllCustom(pageRequest);

        Page<Garbage> garbageList = garbagePage;
        List<GarbageDto> garbageDtoList = new ArrayList<>();

        for (Garbage garbage : garbageList) {
            GarbageDto garbageDto = GarbageDto.builder()
                    .garbageNo(garbage.getGarbageNo())
                    .garbageContent(garbage.getGarbageContent())
                    .build();

            garbageDtoList.add(garbageDto);
        }

        return ResponseEntity.ok().body(garbageDtoList);
    }

    @Transactional
    public ResponseEntity<String> write(GarbageDto garbageDto) {
        Garbage garbage = Garbage.builder()
                .garbageNo(garbageDto.getGarbageNo())
                .garbageContent(garbageDto.getGarbageContent())
                .build();

        garbageRepository.save(garbage);

        return ResponseEntity.ok().body("success");
    }
}
