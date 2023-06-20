//package com.example.Project.Dlook.algorithm;
//
//import com.example.Project.Dlook.algorithm.domain.User;
//import com.example.Project.Dlook.algorithm.domain.dto.ProblemDto;
//import com.example.Project.Dlook.algorithm.domain.dto.UserDto;
//import lombok.RequiredArgsConstructor;
//import org.json.simple.JSONArray;
//import org.json.simple.JSONObject;
//import org.json.simple.parser.JSONParser;
//import org.json.simple.parser.ParseException;
//import org.springframework.stereotype.Component;
//import org.springframework.web.reactive.function.client.WebClient;
//
//import java.io.IOException;
//import java.io.UnsupportedEncodingException;
//
//@Component
//@RequiredArgsConstructor
//public class SolvedApiManager {
//    private final String BASE_URL = "https://solved.ac/api/v3/user";
//    private final String api_user = "/show";
//    private final String api_problem = "/problem_stats";
//    private final String api_handle = "?handle=";
//
//    private User user;
//    private final WebClient webClient;
//
//    private String getUserInformation() throws UnsupportedEncodingException {
//        return BASE_URL +
//                api_user +
//                api_handle + "wy9295";
//    }
//
//    private String getProblemStats() throws UnsupportedEncodingException{
//        return BASE_URL +
//                api_problem +
//                api_handle + "wy9295";
//    }
//
//    //==문제풀이 로직==//
//    public String  getSolvedCount() throws IOException, ParseException {
//        String jsonString = webClient.get()
//                .uri(getUserInformation())
//                .retrieve()
//                .bodyToMono(String.class)
//                .block();
//
//        JSONParser jsonParser = new JSONParser();
//        JSONObject jsonObject = (JSONObject) jsonParser.parse(jsonString);
//
//        return jsonObject.get("solvedCount").toString();
//    }
//
//    public JSONArray getProblemCount() throws IOException, ParseException {
//        String jsonString = webClient.get()
//                .uri(getProblemStats())
//                .retrieve()
//                .bodyToMono(String.class)
//                .block();
//
//        JSONParser jsonParser = new JSONParser();
//        Object jsonObject = jsonParser.parse(jsonString);
//
//        return (JSONArray) jsonObject;
//    }
//
//    //==Dto 저장==//
//    private UserDto makeUserDto(JSONObject obj) {
//        return UserDto.builder()
//                .solvedCount((Integer) obj.get("solvedCount"))
//                .build();
//    }
//
//    private ProblemDto makeProblemDto(JSONObject obj) {
//        return ProblemDto.builder()
//                .solved((Integer) obj.get("solved"))
//                .build();
//    }
//}
