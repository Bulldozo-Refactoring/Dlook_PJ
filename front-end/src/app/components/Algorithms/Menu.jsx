// 알고리즘 메뉴
import { NavLink as BaseNavLink } from 'react-router-dom';
import { styled } from 'styled-components';

function AlgorithmsMenu() {
  return (
    <>
      <div className="menu">
        <TopUi>
          <TopLi>
            <NavStyle to="/algorithms/step">문제 추천</NavStyle>
            <BottomUi>
              <BottomLi>
                <NavSubStyle to="/algorithms/step">실력별 추천</NavSubStyle>
              </BottomLi>
              <BottomLi>
                <NavSubStyle to="/algorithms/child">알고리즘 추천</NavSubStyle>
              </BottomLi>
            </BottomUi>
          </TopLi>
          <TopLi>
            <NavStyle to="/algorithms/type">알고리즘 문제 분석</NavStyle>
            <BottomUi>
              <BottomLi>
                <NavSubStyle to="/algorithms/type">유형별 분석</NavSubStyle>
              </BottomLi>
              <BottomLi>
                <NavSubStyle to="/algorithms/wrong">오답유형</NavSubStyle>
              </BottomLi>
            </BottomUi>
          </TopLi>
          <TopLi>
            <NavStyle to="/algorithms/rank">랭킹분석</NavStyle>
          </TopLi>
        </TopUi>
      </div>
    </>
  );
}

const TopUi = styled.ul`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-width: 90px;
  min-height: 39px;
  z-index: 10;
  &::before {
    content: '';
    position: absolute;
    top: 57px;
    border-bottom: 3px solid ${({ theme }) => theme.lightTheme.bg300};
    width: 100%;
  }
`;
const BottomLi = styled.li`
  display: none;
  border: none;
  flex-direction: column;
  background-color: ${({ theme }) => theme.lightTheme.bg100};
`;
const TopLi = styled.li`
  position: relative;
  &:hover {
    background-color: ${({ theme }) => theme.lightTheme.t300};
    color: ${({ theme }) => theme.lightTheme.bg100};
    ${BottomLi} {
      display: flex;
    }
  }
`;
const BottomUi = styled.ul`
  position: absolute;
  bottom: -89px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-width: 90px;
  min-height: 39px;
  border: none;
  background-color: ${({ theme }) => theme.lightTheme.bg100};
`;

const NavStyle = styled(BaseNavLink)`
  display: block;
  text-align: center;
  font-weight: 500;
  font-size: 18px;
  padding: 15px 40px;
  border-bottom: 3px solid ${({ theme }) => theme.lightTheme.bg300};
  &.active {
    font-weight: 700;
    padding: 15px 40px;
    border-bottom: 3px solid ${({ theme }) => theme.lightTheme.t300};
  }
`;
const NavSubStyle = styled(BaseNavLink)`
  display: block;
  text-align: center;
  font-weight: 500;
  font-size: 18px;
  padding: 16px 0;
  background-color: ${({ theme }) => theme.lightTheme.bg300};
  box-sixing: border-box;
  &:hover {
    color: ${({ theme }) => theme.lightTheme.p300};
  }
  &.active {
    padding: 16px 0;
    background-color: ${({ theme }) => theme.lightTheme.t500};
  }
`;

export default AlgorithmsMenu;
