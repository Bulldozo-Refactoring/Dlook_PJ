import React from "react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

function HeaderMenu() {
  const activeStyle = {
    color: "#FFCEFE",
    fontWeight: "700",
  };

  return (
    <>
      <li>
        <p>알고리즘 문제 풀이</p>
        <ul className="sub_menu">
          <Li>
            <NavStyle
              style={({ isActive }) => (isActive ? activeStyle : {})}
              to="/algorithms/step"
            >
              문제 추천
            </NavStyle>
          </Li>
          <Li>
            <NavStyle
              style={({ isActive }) => (isActive ? activeStyle : {})}
              to="/algorithms/type"
            >
              알고리즘 문제 분석
            </NavStyle>
          </Li>
        </ul>
      </li>
      <li>
        <p>전체 게시판</p>
        <ul className="sub_menu">
          <Li>
            <NavStyle
              style={({ isActive }) => (isActive ? activeStyle : {})}
              to="/board"
            >
              전체 게시판
            </NavStyle>
          </Li>
        </ul>
      </li>
      <li>
        <p>쓰레기통</p>
        <ul className="sub_menu">
          <Li>
            <NavStyle
              style={({ isActive }) => (isActive ? activeStyle : {})}
              to="/garbage"
            >
              쓰레기통
            </NavStyle>
          </Li>
        </ul>
      </li>
      <li>
        <p>더보기</p>
        <ul className="sub_menu">
          <Li>
            <NavStyle
              style={({ isActive }) => (isActive ? activeStyle : {})}
              to="/member/profile"
            >
              내 정보
            </NavStyle>
          </Li>
          <Li>
            <NavStyle
              style={({ isActive }) => (isActive ? activeStyle : {})}
              to="/notice"
            >
              공지사항/이벤트
            </NavStyle>
          </Li>
          <Li>
            <NavStyle
              style={({ isActive }) => (isActive ? activeStyle : {})}
              to="/"
            >
              이용방법
            </NavStyle>
          </Li>
          <Li>
            <NavStyle
              style={({ isActive }) => (isActive ? activeStyle : {})}
              to="/"
            >
              서비스 정책
            </NavStyle>
          </Li>
        </ul>
      </li>
    </>
  );
}

const Li = styled.li`
  position: relative;
`;
const NavStyle = styled(NavLink)`
  display: block;
  padding: 6px 15px;
  border-left: 3px solid;
  font-size: 0.9em;
  color: var(--primary-100);
  font-weight: 500;
  &:hover,
  &:focus {
    color: var(--accent-200);
  }
  &:hover::before {
    background-color: var(--accent-200);
  }
`;
export default HeaderMenu;
