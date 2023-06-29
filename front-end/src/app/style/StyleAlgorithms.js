// [ ] 추후 정리 필요
import { SubTitle, SubmitButton, Title } from 'app/style/GlobalStyle';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

//  AlMenu.jsx
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
// RankLevel.jsx
const StyleDiv = styled.div`
  position: relative;
`;
const Level = styled.ul`
  position: relative;
  width: 85px;
  height: 85px;
  li:first-child {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-color: #ff0000 transparent;
    transform: rotate(36deg);
  }
  li:last-child {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #424874, #ffcefe);
    clip-path: polygon(50% 0, 100% 38%, 82% 100%, 18% 100%, 0 38%);
  }
`;
const StyleSpan = styled.span`
  position: absolute;
  top: 26px;
  width: ${({ theme }) => theme.common.col12};
  text-align: center;
  font-size: ${({ theme }) => theme.common.xl};
  font-weight: 700;
  color: ${({ theme }) => theme.light.b01};
`;
// Step.jsx, Child.jsx
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 0.4rem;
`;
const ResetButton = styled(SubmitButton)`
  padding: 6px 15px;
  margin: 0;
  border-radius: 8px;
  font-size: ${({ theme }) => theme.common.base};
`;
// Rank
const AlgorithmsRank = styled.div`
  width: auto;
  min-height: 600px;
  margin: 0 auto;
  padding: 120px 0 0;
  text-align: center;
`;
const TypeH2 = styled(SubTitle)`
  font-size: 40px;
  line-height: 50px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 20px;
`;
const Img = styled.img`
  display: block;
  height: 120px;
  margin: 0 auto 1rem;
`;
const LinkStyle = styled.a`
  display: inline-block;
  background: none;
  text-decoration: underline;
  font-size: 15px;
  color: #1976d2;
  cursor: pointer;
`;
const Rating = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  box-shadow: 0 0 0 2px ${({ theme }) => theme.color.c01};
  border-radius: 10px;
  height: 200px;
`;
const RatingBefore = styled.div`
  position: absolute;
  top: calc(50% - 30px);
  left: calc(50% - 30px);
  width: 60px;
  height: 60px;
  padding: 19px 0;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.c05};
  font-weight: 500;
  color: ${({ theme }) => theme.light.b03};
`;
const RatingContent = styled.ul`
  height: 50%;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  text-align: left;
`;
const RatingLi = styled.li`
  width: 50%;
  height: 100%;
  padding: 40px 25px;
  font-weight: 700;
`;
const Value = styled.span`
  float: right;
  font-size: 25px;
  line-height: 25px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.c08};
`;
export {
  Level,
  Menu,
  Nav,
  NavItem,
  NavList,
  NavStyle,
  NavSubStyle,
  ResetButton,
  StyleDiv,
  StyleSpan,
  StyleTitle,
  Top,
  AlgorithmsRank,
  TypeH2,
  Img,
  LinkStyle,
  Rating,
  RatingBefore,
  RatingContent,
  RatingLi,
  Value,
};
