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
    border-bottom: 3px solid var(--bg-200);
    width: 100%;
  }
`;
const BottomLi = styled.li`
  display: none;
  border: none;
  flex-direction: column;
  background-color: var(--bg-100);
`;
const TopLi = styled.li`
  position: relative;
  &:hover {
    background-color: var(--primary-100);
    color: var(--bg-100);
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
  background-color: var(--bg-100);
`;

const NavStyle = styled(BaseNavLink)`
  display: block;
  text-align: center;
  font-weight: 500;
  font-size: 18px;
  padding: 15px 40px;
  border-bottom: 3px solid var(--bg-200);
  &.active {
    font-weight: 700;
    padding: 15px 40px;
    border-bottom: 3px solid var(--primary-100);
  }
`;
const NavSubStyle = styled(BaseNavLink)`
  display: block;
  text-align: center;
  font-weight: 500;
  font-size: 18px;
  padding: 16px 0;
  background-color: var(--bg-200);
  box-sixing: border-box;
  &:hover {
    color: var(--primary-200);
  }
  &.active {
    padding: 16px 0;
    background-color: var(--primary-200);
  }
`;

export default AlgorithmsMenu;
