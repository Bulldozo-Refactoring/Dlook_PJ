package com.example.Project.Dlook.algorithm.service;

import com.example.Project.Dlook.algorithm.SolvedApiManager;
import com.example.Project.Dlook.algorithm.domain.User;
import com.example.Project.Dlook.algorithm.domain.dto.ProblemDto;
import com.example.Project.Dlook.algorithm.domain.dto.UserDto;
import com.example.Project.Dlook.algorithm.repository.UserRepository;
import com.example.Project.Dlook.exception.DataNotFoundException;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.ParseException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpRequest;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.io.IOException;
import java.net.http.HttpResponse;
import java.util.*;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserService {

    private final UserRepository userRepository;
    private final SolvedApiManager solvedApiManager;

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
        String url = "https://solved.ac/api/v3/search/problem?query=tier%3A" + level;

        WebClient client = WebClient.builder()
                .defaultHeader(HttpHeaders.ACCEPT, MediaType.APPLICATION_JSON_VALUE)
                .build();

        String response = client.get()
                .uri(url)
                .retrieve() // 본문으로 응답 검색
                .bodyToMono(String.class)
                .block();

        ObjectMapper objectMapper = new ObjectMapper();
        JsonNode jsonNode = objectMapper.readTree(response);
        log.info("jsonNode : {}", jsonNode);

        List<ProblemDto> problemList = new ArrayList<>();
        List<JsonNode> items = jsonNode.findValues("items");
        log.info("items : {}", items);

        if (items.size() > 0) {
            for (JsonNode item : items) {
                int problemId = item.get("problemId").asInt();
                String titleKo = item.get("titleKo").asText();

                ProblemDto problemDto = ProblemDto.builder()
                        .problemId(problemId)
                        .titleKo(titleKo)
                        .build();

                problemList.add(problemDto);
            }
        }
        log.info("problemList : {}", problemList);

        return problemList;

//        if (response != null) {
//            JsonObject levelProblem = JsonParser.parseString(response).getAsJsonObject();
//            int count = levelProblem.get("count").getAsInt();
//            int pages = (count - 1) / 7 + 1;
//
//            for (int page = 0; page < pages; page++) {
//                String pageUrl = url + "&page=" + (page + 1);
//
//                String pageResponse = client.get()
//                        .uri(pageUrl)
//                        .retrieve()
//                        .bodyToMono(String.class)
//                        .block();
//
//                if (pageResponse != null) {
//                    JsonObject pageLevelProblem = JsonParser.parseString(pageResponse).getAsJsonObject();
//                    JsonArray items = pageLevelProblem.get("items").getAsJsonArray();
//
//                    for (JsonElement item : items) {
//                        int problemId = item.getAsJsonObject().get("problemId").getAsInt();
//                        problems.add(problemId);
//                    }
//                } else {
//                    System.out.println("problem request fail");
//                }
//            }
//        } else {
//            System.out.println("problem request fail");
//        }
    }

    public Long getTier(String tier) throws IOException, ParseException {
        JSONArray test = solvedApiManager.getProblemCount();
        Long temp = 0L;
        if (test.size() > 0) {
            for (Object o : test) {
                JSONObject jsonObj = (JSONObject) o;
                switch (tier) {
                    case "Bronze":
                        if (Set.of(1L, 2L, 3L, 4L, 5L).contains(jsonObj.get("level"))) {
                            temp += (Long) jsonObj.get("solved");
                        }
                        break;
                    case "Silver":
                        if (Set.of(6L, 7L, 8L, 9L, 10L).contains(jsonObj.get("level"))) {
                            temp += (Long) jsonObj.get("solved");
                        }
                        break;
                    case "Gold":
                        if (Set.of(11L, 12L, 13L, 14L, 15L).contains(jsonObj.get("level"))) {
                            temp += (Long) jsonObj.get("solved");
                        }
                        break;
                    case "Platinum":
                        if (Set.of(16L, 17L, 18L, 19L, 20L).contains(jsonObj.get("level"))) {
                            temp += (Long) jsonObj.get("solved");
                        }
                        break;
                    case "Diamond":
                        if (Set.of(21L, 22L, 23L, 24L, 25L).contains(jsonObj.get("level"))) {
                            temp += (Long) jsonObj.get("solved");
                        }
                        break;
                    case "Ruby":
                        if (Set.of(26L, 27L, 28L, 29L, 30L).contains(jsonObj.get("level"))) {
                            temp += (Long) jsonObj.get("solved");
                        }
                        break;
                }
            }
        }
        return temp;
    }

    public Long getSolvedCount() throws IOException, ParseException {
        log.info("tyru");
        Long re = Long.parseLong(solvedApiManager.getSolvedCount());
        return re;
    }
}
