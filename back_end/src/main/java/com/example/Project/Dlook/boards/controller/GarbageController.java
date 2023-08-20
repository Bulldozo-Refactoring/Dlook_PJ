package com.example.Project.Dlook.boards.controller;

import com.example.Project.Dlook.boards.domain.dto.GarbageDto;
import com.example.Project.Dlook.boards.service.GarbageService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/garbage")
public class GarbageController {

    private final GarbageService garbageService;

    @GetMapping
    public ResponseEntity<List<GarbageDto>> garbageList() {
        return garbageService.list();
    }

    @PostMapping("/write")
    public ResponseEntity<String> gbgWrite(@RequestBody GarbageDto garbageDTO) {
        return garbageService.write(garbageDTO);
    }
}
