package com.example.Project.Dlook.members.service;

import com.example.Project.Dlook.members.domain.Member;
import com.example.Project.Dlook.members.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

    private final MemberRepository memberRepository;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String memberEmail) throws UsernameNotFoundException {

        return memberRepository.findByMemberEmail(memberEmail)
                .map(this::createUserDetails)
                .orElseThrow(() -> new UsernameNotFoundException(memberEmail + " -> can not find Database"));
    }

    // DB 에 User 값이 존재한다면 UserDetails 객체로 만들어서 리턴
    private UserDetails createUserDetails(Member member) {

        GrantedAuthority grantedAuthority = new SimpleGrantedAuthority(member.getAuthority().toString());

        return new User(
                String.valueOf(member.getMemberName()),
                member.getMemberPw(),
                Collections.singleton(grantedAuthority)
        );
    }
}
