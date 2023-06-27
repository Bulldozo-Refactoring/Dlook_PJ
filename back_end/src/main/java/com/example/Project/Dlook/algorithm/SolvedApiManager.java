package com.example.Project.Dlook.algorithm;

import com.example.Project.Dlook.algorithm.domain.User;
import com.example.Project.Dlook.algorithm.domain.dto.ProblemDto;
import com.example.Project.Dlook.algorithm.domain.dto.UserDto;
import lombok.extern.slf4j.Slf4j;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.io.UnsupportedEncodingException;

@Component
@Slf4j
public class SolvedApiManager {

    private final String BASE_URL = "https://solved.ac/api/v3/user";
    private final String api_user = "/show";
    private final String api_problem = "/problem_stats";
    private final String api_handle = "?handle=";

    private User user;

    private String getUserInformation() throws UnsupportedEncodingException {
        return BASE_URL +
                api_user +
                api_handle + "wy9295";
    }

    private String getProblemStats() throws UnsupportedEncodingException{
        RestTemplate restTemplate = new RestTemplate();
        return BASE_URL +
                api_problem +
                api_handle + "wy9295";
    }


    //==문제풀이 로직==//
    public String  getSolvedCount() throws IOException, ParseException {
        log.info("nth");
        RestTemplate restTemplate = new RestTemplate();
        log.info("teakjf");
        String jsonString = restTemplate.getForObject(getUserInformation(), String.class);
        log.info("jsonString : {}", jsonString);

        JSONParser jsonParser = new JSONParser();
        Object jsonObject = jsonParser.parse(jsonString);
        log.info("jsonObject : {}", jsonObject);

        JSONObject jsonBody = (JSONObject) jsonObject;
        log.info("jsonBody : {}", jsonBody);

        return jsonBody.get("solvedCount").toString();
    }

    public JSONArray getProblemCount() throws IOException, ParseException {
        RestTemplate restTemplate = new RestTemplate();
        String jsonString = restTemplate.getForObject(getProblemStats(), String.class);

        JSONParser jsonParser = new JSONParser();
        Object jsonObject = jsonParser.parse(jsonString);

        return (JSONArray) jsonObject;
    }

    //==Dto 저장==//
    private UserDto makeUserDto(JSONObject obj) {
        return UserDto.builder()
                .solvedCount((Integer) obj.get("solvedCount"))
                .build();
    }

//    private ProblemDto makeProblemDto(JSONObject obj) {
//        return ProblemDto.builder()
//                .solved((Integer) obj.get("solved"))
//                .build();
//    }
}
