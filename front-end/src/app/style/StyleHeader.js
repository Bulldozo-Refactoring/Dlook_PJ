// [ ] 추후 정리 필요
import { Menu } from '@mui/icons-material';
import { NavLink as BaseNavLink } from 'react-router-dom';
import { styled } from 'styled-components';

import { Login } from '@mui/icons-material';
import { Avatar, Box } from '@mui/material';

const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.light.t03};
  z-index: 100;
`;
const HeaderInner = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 0 40px;
`;
const HeaderWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${({ theme }) => theme.common.xlarge};
  margin: 0 auto;
  color: inherit;
  line-height: 80px;
`;
const Li = styled.li`
  width: ${({ theme }) => theme.common.col3};
  height: 80px;
  text-align: center;
`;
const LastLi = styled(Li)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const MenuIconStyle = styled(Menu)`
  cursor: pointer;
  float: left;
  height: 100% !important;
  * {
    color: ${({ theme }) => theme.color.c05};
  }
`;
const MenuUl = styled.ul`
  padding: 100px 50px 20px;
  width: ${({ theme }) => theme.common.col12};
  height: 320px;
  position: absolute;
  top: ${(props) => (props.open ? '0' : '-999px')};
  left: 0;
  transition: 0.7s;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.light.b01};
  box-shadow: 0 1px 5px 4px ${({ theme }) => theme.color.c01};
  font-weight: 500;
`;
const Img = styled.img`
  display: inline;
  vertical-align: middle;
  width: 100px;
  * {
    color: inherit;
  }
`;

const Title = styled.p`
  margin-bottom: 0.5em;
  font-size: 1.24em;
  font-weight: bold;
`;
const MenuLi = styled.li`
  margin: 0 3rem;
`;
const StyleLi = styled.li`
  position: relative;
`;
const NavStyle = styled(BaseNavLink)`
  display: block;
  padding: 6px 15px;
  border-left: 3px solid;
  font-size: 0.9em;
  color: ${({ theme }) => theme.light.t03};
  font-weight: 500;
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.light.c07};
  }
  &:hover::before {
    background-color: ${({ theme }) => theme.light.t03};
  }
  &.active {
    color: ${({ theme }) => theme.color.c07};
    font-weight: 700;
  }
`;
const PStyled = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.light.b01};
`;
const BoxStyle = styled(Box)`
  display: flex;
  align-items: center;
  text-align: center;
`;
const LoginIcon = styled(Login)`
  path {
    color: ${({ theme }) => theme.color.c05};
  }
`;
const AvatarStyle = styled(Avatar)`
  background-color: ${({ theme }) => theme.color.c05} !important;
`;
export {
  AvatarStyle,
  BoxStyle,
  HeaderContainer,
  HeaderInner,
  HeaderWrapper,
  Img,
  LastLi,
  Li,
  LoginIcon,
  MenuIconStyle,
  MenuLi,
  MenuUl,
  NavStyle,
  PStyled,
  StyleLi,
  Title,
};
