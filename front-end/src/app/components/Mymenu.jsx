import React from 'react';
import { NavLink as BaseNavLink } from 'react-router-dom';
import { styled } from 'styled-components';

function Mymenu() {
  return (
    <MenuUl>
      <MenuLi>
        <NavStyle to="/mypages/certify">백준 연동</NavStyle>
      </MenuLi>
      <MenuLi>
        <NavStyle to="/mypages/boards">글/댓글 관리</NavStyle>
      </MenuLi>
    </MenuUl>
  );
}

const MenuUl = styled.ul`
  min-width: 220px;
  height: 100px;
  text-align: center;
`;
const MenuLi = styled.li`
  position: relative;
`;
const NavStyle = styled(BaseNavLink)`
  display: block;
  padding: 6px 15px;
  border-left: 3px solid;
  font-size: 1.3em;
  color: ${({ theme }) => theme.lightTheme.t100};
  font-weight: 500;
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.lightTheme.p400};
  }
  &:hover::before {
    background-color: ${({ theme }) => theme.lightTheme.p400};
  }
  &.active {
    color: ${({ theme }) => theme.lightTheme.p400};
    font-weight: 700;
  }
`;
export default Mymenu;
