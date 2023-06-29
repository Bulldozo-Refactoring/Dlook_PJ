// 알고리즘 메뉴
import { Menu, Nav, NavItem, NavList, NavStyle, NavSubStyle, StyleTitle } from 'app/style/StyleAlgorithms';
import { useLocation } from 'react-router-dom';

const AlMenu = () => {
  const { pathname } = useLocation();
  const titles = [
    { path: '/algorithms/step', title: '실력별 추천' },
    { path: '/algorithms/child', title: '알고리즘 추천' },
    { path: '/algorithms/type', title: '유형별 분석' },
    { path: '/algorithms/wrong', title: '오답 유형' },
    { path: '/algorithms/rank', title: '랭킹 분석' },
  ];
  const titleObj = titles.find((item) => item.path === pathname);
  const title = titleObj ? titleObj.title : '';

  return (
    <>
      <Menu>
        <StyleTitle>{title}</StyleTitle>
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

export default AlMenu;
