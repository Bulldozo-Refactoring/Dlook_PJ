package com.example.Project.Dlook.boards.repository;

import com.example.Project.Dlook.boards.domain.Garbage;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface GarbageRepository extends JpaRepository<Garbage, Long> {
    @Query("SELECT g FROM Garbage g")
    Page<Garbage> findAllCustom(PageRequest pageRequest);
}
