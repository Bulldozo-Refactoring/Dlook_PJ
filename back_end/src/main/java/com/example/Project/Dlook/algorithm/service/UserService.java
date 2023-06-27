package com.example.Project.Dlook.algorithm.service;

import com.example.Project.Dlook.algorithm.domain.dto.ProblemDto;
import com.example.Project.Dlook.algorithm.domain.dto.UserDto;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserService {

    public ResponseEntity<UserDto> getUser(String memberName) throws JsonProcessingException {
        String url = "https://solved.ac/api/v3/user/show?handle=" + memberName;

        WebClient client = WebClient.builder()
                .defaultHeader(HttpHeaders.ACCEPT, MediaType.APPLICATION_JSON_VALUE)
                .build();

        String response = client.get()
                .uri(url)
                .retrieve()
                .bodyToMono(String.class)
                .block();

        ObjectMapper objectMapper = new ObjectMapper();
        JsonNode jsonNode = objectMapper.readTree(response);

        UserDto userDto = UserDto.builder()
                .tier(jsonNode.get("tier").asInt())
                .maxStreak(jsonNode.get("maxStreak").asInt())
                .rating(jsonNode.get("rating").asInt())
                .user(jsonNode.get("handle").asText())
                .solvedCount(jsonNode.get("solvedCount").asInt())
                .build();

        return ResponseEntity.ok().body(userDto);
    }

    public List<ProblemDto> getProblemsByLevel(int level) throws JsonProcessingException {
        String url = "https://solved.ac/api/v3/search/problem?query=tier:" + level + "&sort=random";

        WebClient client = WebClient.builder()
                .defaultHeader(HttpHeaders.ACCEPT, MediaType.APPLICATION_JSON_VALUE)
                .build();

        String response = client.get()
                .uri(url)
                .retrieve()
                .bodyToMono(String.class)
                .block();

        ObjectMapper objectMapper = new ObjectMapper();
        JsonNode jsonNode = objectMapper.readTree(response);

        List<ProblemDto> problemList = new ArrayList<>();
        JsonNode itemsNode = jsonNode.get("items");

        if (itemsNode.size() > 0) {
            for (JsonNode item : itemsNode) {
                int problemId = item.get("problemId").asInt();
                String titleKo = item.get("titleKo").asText();

                ProblemDto problemDto = ProblemDto.builder()
                        .problemId(problemId)
                        .titleKo(titleKo)
                        .build();

                problemList.add(problemDto);
            }
        }
        return problemList;
    }
}
