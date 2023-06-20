//package com.example.Project.Dlook.algorithm.service;
//
//import com.example.Project.Dlook.algorithm.SolvedApiManager;
//import com.example.Project.Dlook.algorithm.domain.User;
//import com.example.Project.Dlook.algorithm.repository.UserRepository;
//import com.example.Project.Dlook.exception.DataNotFoundException;
//import com.example.Project.Dlook.members.repository.MemberRepository;
//import lombok.RequiredArgsConstructor;
//import org.springframework.stereotype.Service;
//import lombok.RequiredArgsConstructor;
//import org.json.simple.JSONArray;
//import org.json.simple.JSONObject;
//import org.json.simple.parser.JSONParser;
//import org.json.simple.parser.ParseException;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.json.JsonParser;
//import org.springframework.http.ResponseEntity;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//import org.springframework.web.client.RestTemplate;
//
//import java.io.IOException;
//import java.io.UnsupportedEncodingException;
//import java.util.List;
//import java.util.Map;
//import java.util.Optional;
//
//@Service
//@RequiredArgsConstructor
//public class UserService {
//
//    private final UserRepository userRepository;
//
//    private final MemberRepository memberRepository;
//
//    private final SolvedApiManager solvedApiManager;
//
//    public User getUser(Long id) {
//        Optional<User> user = Optional.ofNullable(userRepository.findById(id)
//                .orElseThrow(() -> new DataNotFoundException("user not found")));
//
//        return user.get();
//    }
//
//    public Long getTier(String tier) throws IOException, ParseException, UnsupportedEncodingException {
//        JSONArray test = solvedApiManager.getProblemCount();
//        Long temp = 0L;
//        if (test.size() > 0) {
//            for (Object o : test) {
//                JSONObject jsonObj = (JSONObject) o;
//                switch (tier) {
//                    case "Bronze" -> {
//                        if (jsonObj.get("level")level.equals(1L) || jsonObj.get("level").equals(2L) || jsonObj.get("level").equals(3L) || jsonObj.get("level").equals(4L) || jsonObj.get("level").equals(5L)) {
//                            temp += (Long) jsonObj.get("solved");
//                        }
//                    }
//                    case "Silver" -> {
//                        if (jsonObj.get("level").equals(6L) || jsonObj.get("level").equals(7L) || jsonObj.get("level").equals(8L) || jsonObj.get("level").equals(9L) || jsonObj.get("level").equals(10L)) {
//                            temp += (Long) jsonObj.get("solved");
//                        }
//                    }
//                    case "Gold" -> {
//                        if (jsonObj.get("level").equals(11L) || jsonObj.get("level").equals(12L) || jsonObj.get("level").equals(13L) || jsonObj.get("level").equals(14L) || jsonObj.get("level").equals(15L)) {
//                            temp += (Long) jsonObj.get("solved");
//                        }
//                    }
//                    case "Platinum" -> {
//                        if (jsonObj.get("level").equals(16L) || jsonObj.get("level").equals(17L) || jsonObj.get("level").equals(18L) || jsonObj.get("level").equals(19L) || jsonObj.get("level").equals(20L)) {
//                            temp += (Long) jsonObj.get("solved");
//                        }
//                    }
//                    case "Diamond" -> {
//                        if (jsonObj.get("level").equals(21L) || jsonObj.get("level").equals(22L) || jsonObj.get("level").equals(23L) || jsonObj.get("level").equals(24L) || jsonObj.get("level").equals(25L)) {
//                            temp += (Long) jsonObj.get("solved");
//                        }
//                    }
//                    case "Ruby" -> {
//                        if (jsonObj.get("level").equals(26L) || jsonObj.get("level").equals(27L) || jsonObj.get("level").equals(28L) || jsonObj.get("level").equals(29L) || jsonObj.get("level").equals(30L)) {
//                            temp += (Long) jsonObj.get("solved");
//                        }
//                    }
//                }
//            }
//        }
//        return temp;
//    }
//
//    public Long getSolvedCount() throws IOException, ParseException, UnsupportedEncodingException{
//        Long re = Long.parseLong(this.solvedApiManager.getSolvedCount());
//        return re;
//    }
//}
