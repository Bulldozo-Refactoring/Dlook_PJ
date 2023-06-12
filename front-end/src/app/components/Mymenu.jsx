import React from "react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

function Mymenu() {
  const activeStyle = {
    color: "#FF73A5",
    fontWeight: "700",
  };

  return (
    <Menu>
      <MenuLi>
        <NabStyle
          style={({ isActive }) => (isActive ? activeStyle : {})}
          to="/mypages/certify"
        >
          백준 연동
        </NabStyle>
      </MenuLi>
      <MenuLi>
        <NabStyle
          style={({ isActive }) => (isActive ? activeStyle : {})}
          to="/mypages/board"
        >
          글/댓글 관리
        </NabStyle>
      </MenuLi>
    </Menu>
  );
}

const Menu = styled.ul`
  min-width: 220px;
  height: 100px;
  text-align: center;
`;
const MenuLi = styled.li`
  position: relative;
`;
const NabStyle = styled(NavLink)`
  display: block;
  padding: 6px 15px;
  border-left: 3px solid;
  font-size: 1.1em;
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
export default Mymenu;
