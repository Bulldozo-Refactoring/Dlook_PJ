package com.example.Project.Dlook.algorithm.service;

import com.example.Project.Dlook.algorithm.domain.dto.ProblemAlgorithmDto;
import com.example.Project.Dlook.algorithm.domain.dto.ProblemLevelDto;
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

    public List<ProblemLevelDto> getProblemsByLevel(int level) throws JsonProcessingException {
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

        List<ProblemLevelDto> problemList = new ArrayList<>();
        JsonNode itemsNode = jsonNode.get("items");
        int count = Math.min(10, itemsNode.size());

        if (count > 0) {
            for (int i = 0; i < count; i++) {
                JsonNode item = itemsNode.get(i);
                int problemId = item.get("problemId").asInt();
                String titleKo = item.get("titleKo").asText();

                ProblemLevelDto problemLevelDto = ProblemLevelDto.builder()
                        .problemId(problemId)
                        .titleKo(titleKo)
                        .build();

                problemList.add(problemLevelDto);
            }
        }
        return problemList;
    }

    public List<ProblemAlgorithmDto> getProblemsByAlgorithm(String algorithm) throws JsonProcessingException {
        String url = "https://solved.ac/api/v3/search/problem?query=&sort=random";

        WebClient client = WebClient.builder()
                .defaultHeader(HttpHeaders.ACCEPT, MediaType.APPLICATION_JSON_VALUE)
                .build();

        List<ProblemAlgorithmDto> problemList = new ArrayList<>();
        int count = 0;
        int page = 1; // Start with the first page

        while (count < 10) {
            String response = client.get()
                    .uri(url + "&page=" + page)
                    .retrieve()
                    .bodyToMono(String.class)
                    .block();

            ObjectMapper objectMapper = new ObjectMapper();
            JsonNode jsonNode = objectMapper.readTree(response);

            JsonNode itemsNode = jsonNode.get("items");

            for (JsonNode item : itemsNode) {
                int problemId = item.get("problemId").asInt();
                String titleKo = item.get("titleKo").asText();
                JsonNode tags_list = item.get("tags");
                List<String> tag_keys = new ArrayList<>();
                for (JsonNode tag : tags_list) {
                    String key = tag.get("key").asText();
                    tag_keys.add(key);
                }

                if (tag_keys.contains(algorithm)) {
                    ProblemAlgorithmDto problemAlgorithmDto = ProblemAlgorithmDto.builder()
                            .problemId(problemId)
                            .titleKo(titleKo)
                            .key(algorithm)
                            .build();

                    problemList.add(problemAlgorithmDto);
                    count += 1;
                    if (count >= 10) {
                        break;
                    }
                }
            }
            page++;
        }
        return problemList;
    }
}
