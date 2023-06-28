// 알고리즘 메뉴
import { Title } from 'app/style/StyledComponent';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

// step = '실략별 추천';
// child = '알고리즘 추천';
// /type = '유형별 분석';
// wrong = '오답유형';
// rank = '유형별분석';
const Menu = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: ${({ theme }) => theme.common.col2};
`;
const StyleTitle = styled(Title)`
  text-align: center;
`;
const Nav = styled.nav`
  width: ${({ theme }) => theme.common.col12};
  padding: 1rem;
  > ul:first-child > li:first-child,
  > ul:first-child > li:first-child > a {
    border-radius: 1rem;
  }
`;
const NavList = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;
const NavItem = styled.li`
  flex-direction: column;
  box-shadow: 0 0 0 3px ${({ theme }) => theme.light.t03};
  background-color: ${({ theme }) => theme.light.t03};
`;
const NavStyle = styled(NavLink)`
  display: block;
  padding: 0.7rem 0;
  text-align: center;
  font-size: ${({ theme }) => theme.common.md};
  font-weight: 700;
  background-color: ${({ theme }) => theme.light.t03};
  color: ${({ theme }) => theme.light.b01};
`;
const NavSubStyle = styled(NavStyle)`
  box-shadow: 0 0 0 3px ${({ theme }) => theme.light.b03};
  background-color: ${({ theme }) => theme.light.b01};
  font-size: ${({ theme }) => theme.common.base};
  color: ${({ theme }) => theme.light.t03};
  font-weight: 500;
  &:hover {
    background-color: ${({ theme }) => theme.light.b01};
    color: ${({ theme }) => theme.color.c05};
  }
  &.active {
    background-color: ${({ theme }) => theme.light.b01};
    color: ${({ theme }) => theme.color.c08};
  }
`;

const AlgorithmsMenu = () => {
  return (
    <>
      <Menu>
        <StyleTitle>실력별 추천</StyleTitle>
        <Nav>
          <NavList>
            <NavItem>
              <NavStyle to="/algorithms/step">문제 추천</NavStyle>
              <NavList>
                <NavItem>
                  <NavSubStyle to="/algorithms/step">실력별 추천</NavSubStyle>
                </NavItem>
                <NavItem>
                  <NavSubStyle to="/algorithms/child">알고리즘 추천</NavSubStyle>
                </NavItem>
              </NavList>
            </NavItem>
            <NavItem>
              <NavStyle to="/algorithms/type">알고리즘 문제 분석</NavStyle>
              <NavList>
                <NavItem>
                  <NavSubStyle to="/algorithms/type">유형별 분석</NavSubStyle>
                </NavItem>
                <NavItem>
                  <NavSubStyle to="/algorithms/wrong">오답유형</NavSubStyle>
                </NavItem>
              </NavList>
            </NavItem>
            <NavItem>
              <NavStyle to="/algorithms/rank">랭킹분석</NavStyle>
              <NavList>
                <NavItem>
                  <NavSubStyle to="/algorithms/rank">랭킹분석</NavSubStyle>
                </NavItem>
              </NavList>
            </NavItem>
          </NavList>
        </Nav>
      </Menu>
    </>
  );
};

export default AlgorithmsMenu;
