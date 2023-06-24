package com.example.Project.Dlook.algorithm.service;

import com.example.Project.Dlook.algorithm.SolvedApiManager;
import com.example.Project.Dlook.algorithm.domain.User;
import com.example.Project.Dlook.algorithm.repository.UserRepository;
import com.example.Project.Dlook.exception.DataNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.ParseException;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.Optional;
import java.util.Set;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserService {

    private final UserRepository userRepository;
    private final SolvedApiManager solvedApiManager;

    public User getUser(Long id) {
        Optional<User> user = Optional.ofNullable(userRepository.findById(id)
                .orElseThrow(() -> new DataNotFoundException("user not found")));

        return user.get();
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
