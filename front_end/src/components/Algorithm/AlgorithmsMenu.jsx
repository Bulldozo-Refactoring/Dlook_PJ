import React from "react";
import { NavLink } from "react-router-dom";

function AlgorithmMenu() {
  const activeStyle = {
    color: "#FFCEFE",
    fontWeight: "700",
  };
  return (
    <>
      <li>
        <p>문제 추천</p>
        <ul className="sub_menu">
          <li>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : {})}
              to="/algorithms/step"
            >
              실력별 추천
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : {})}
              to="/algorithms/child"
            >
              알고리즘 분류
            </NavLink>
          </li>
        </ul>
      </li>
      <li>
        <p>알고리즘 문제 분석</p>
        <ul className="sub_menu">
          <li>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : {})}
              to="/algorithms/type"
            >
              유형별 분석
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : {})}
              to="/algorithms/wrong"
            >
              오답 유형
            </NavLink>
          </li>
        </ul>
      </li>
      <li>
        <p>랭킹 분석</p>
        <ul className="sub_menu">
          <li>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : {})}
              to="/algorithms/rank"
            >
              랭킹분석
            </NavLink>
          </li>
        </ul>
      </li>
    </>
  );
}

export default AlgorithmMenu;
