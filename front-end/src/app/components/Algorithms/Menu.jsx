// 알고리즘 메뉴
import React from "react";
import { NavLink } from "react-router-dom";
function AlgorithmsMenu() {
  const disabled = {
    padding: "15px 40px",
    borderBottom: "3px solid #f5f5f5",
  };
  const active = {
    fontWeight: "700",
    padding: "15px 40px",
    borderBottom: "3px solid #424874",
  };
  const subDisabled = {
    padding: "16px 0",
    backgroundColor: "#f5f5f5",
    boxSixing: "border-box",
  };
  const subActive = {
    padding: "16px 0",
    backgroundColor: "#a6b1e1",
    boxSixing: "border-box",
  };
  return (
    <>
      <div className="menu">
        <ul className="top_menu">
          <li>
            <NavLink
              style={({ isActive }) => (isActive ? active : disabled)}
              to="/algorithms/step"
            >
              문제 추천
            </NavLink>
            <ul className="bottom_menu" style={{ position: "absolute" }}>
              <li>
                <NavLink
                  style={({ isActive }) => (isActive ? subActive : subDisabled)}
                  to="/algorithms/step"
                >
                  실력별 추천
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive }) => (isActive ? subActive : subDisabled)}
                  to="/algorithms/child"
                >
                  알고리즘 추천
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => (isActive ? active : disabled)}
              to="/algorithms/type"
            >
              알고리즘 문제 분석
            </NavLink>
            <ul className="bottom_menu" style={{ position: "absolute" }}>
              <li>
                <NavLink
                  style={({ isActive }) => (isActive ? subActive : subDisabled)}
                  to="/algorithms/type"
                >
                  유형별 분석
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive }) => (isActive ? subActive : subDisabled)}
                  to="/algorithms/wrong"
                >
                  오답유형
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => (isActive ? active : disabled)}
              to="/algorithms/rank"
            >
              랭킹분석
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default AlgorithmsMenu;
