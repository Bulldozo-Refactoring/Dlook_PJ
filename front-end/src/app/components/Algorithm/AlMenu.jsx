// 알고리즘 메뉴
import { Nav, NavItem, NavList, NavStyle, NavSubStyle } from 'app/style/StyleAlgorithm';

const AlMenu = () => {
  return (
    <>
      <Nav>
        <NavList>
          <NavItem>
            <NavStyle to="/algorithm/step">문제 추천</NavStyle>
            <NavList>
              <NavItem>
                {/* <NavSubStyle to="/algorithm/step">실력별 추천</NavSubStyle> */}
                <NavSubStyle to="/algorithm/level">실력별 추천</NavSubStyle>
              </NavItem>
              <NavItem>
                <NavSubStyle to="/algorithm/child">알고리즘 추천</NavSubStyle>
              </NavItem>
            </NavList>
          </NavItem>
          <NavItem>
            <NavStyle to="/algorithm/type">알고리즘 문제 분석</NavStyle>
            <NavList>
              <NavItem>
                <NavSubStyle to="/algorithm/type">유형별 분석</NavSubStyle>
              </NavItem>
              <NavItem>
                <NavSubStyle to="/algorithm/wrong">오답유형</NavSubStyle>
              </NavItem>
            </NavList>
          </NavItem>
          <NavItem>
            <NavStyle to="/algorithm/rank">랭킹분석</NavStyle>
            <NavList>
              <NavItem>
                <NavSubStyle to="/algorithm/rank">랭킹분석</NavSubStyle>
              </NavItem>
            </NavList>
          </NavItem>
        </NavList>
      </Nav>
    </>
  );
};

export default AlMenu;
