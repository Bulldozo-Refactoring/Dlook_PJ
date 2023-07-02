// [ ] 추후 정리 필요
import { SubTitle, SubmitButton, Title } from 'app/style/GlobalStyle';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

// algorithm
const StyleTitle = styled(Title)`
  padding-left: 2rem;
`;

//  AlMenu.jsx
// prettier-ignore
const Nav = styled.nav`
  width: ${({ theme }) => theme.common.col2}; padding-top: 3px; padding-right: 1rem;
  > ul:first-child > li:first-child,
  > ul:first-child > li:first-child > a { border-radius: 1rem; }
`;
// prettier-ignore
const NavList = styled.ul`
  display: flex; justify-content: flex-start; flex-direction: column;
`;
const NavItem = styled.li`
  box-shadow: 0 0 0 3px ${({ theme }) => theme.light.t03};
  background-color: ${({ theme }) => theme.light.t03};
`;
// prettier-ignore
const NavStyle = styled(NavLink)`
  display: block; padding: 0.7rem 0; text-align: center; font-size: ${({ theme }) => theme.common.md}; font-weight: 700; background-color: ${({ theme }) => theme.light.t03}; color: ${({ theme }) => theme.light.b01};
`;
// prettier-ignore
const NavSubStyle = styled(NavStyle)`
  box-shadow: 0 0 0 3px ${({ theme }) => theme.light.b03}; background-color: ${({ theme }) => theme.light.b01}; font-size: ${({ theme }) => theme.common.base}; color: ${({ theme }) => theme.light.t03}; font-weight: 500;
  &:hover { background-color: ${({ theme }) => theme.light.b01}; color: ${({ theme }) => theme.color.c05}; }
  &.active { background-color: ${({ theme }) => theme.light.b01}; color: ${({ theme }) => theme.color.c08}; }
`;

// Step.jsx, Child.jsx
// prettier-ignore
const Top = styled.div`
  display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 0.4rem;
`;
// prettier-ignore
const ResetButton = styled(SubmitButton)`
  padding: 6px 15px; margin: 0; border-radius: 8px; font-size: ${({ theme }) => theme.common.base};
`;

// StepLevel.jsx
// prettier-ignore
const LevelBack = styled.div`
  padding: 10rem 3rem 0; height: 100vh; background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
`;
// prettier-ignore
const LevelBackUl = styled.ul`
  display: grid; justify-items: center; max-width: 929px; margin: 0 auto;
  /* > li:not(:last-child)::before, */
  /* > li:nth-child(6)::after, */
  > li::before,
  > li:nth-child(2)::after,
  > li:nth-child(3)::after,
  > li:nth-child(5)::after { content: ''; position: absolute; background-color: ${({ theme }) => theme.light.b02}; border-radius: 10px; transform: translate(100%, -100%); top: 50%; width: 60px; height: 10px; z-index: -1; }
  > li:nth-child(1)::before { left: 5.4rem; }
  > li:nth-child(2)::before { left: -4rem; width: 165px; }
  > li:nth-child(2)::after { top: 12.5rem; left: 15.4rem; width: 10px; height: 8.4rem; }
  > li:nth-child(3)::before { top: calc(50% - 16%); left: -27.4rem; width: 35.8rem; }
  > li:nth-child(3)::after { top: calc(50% + 16%); left: -29.4rem; width: 38.5rem; }
  > li:nth-child(4)::before { top: calc(50% + 16%); left: -52.8rem; width: 27rem; }
  > li:nth-child(5)::before { top: 4.2rem; left: 4rem; width: 10px; height: 8rem; }
  > li:nth-child(5)::after { left: -20rem; width: 27.87rem; }
  > li:nth-child(6)::before { top: 0.7rem; left: 4rem; width: 10px; height: 6rem;}
  /* > li:nth-child(6)::after { left: -22rem; width: 12rem; } */
  > li:nth-child(1) { grid-column: 3/4; grid-row: 1/3;
    button { background-color: #c49c48; color: ${({ theme }) => theme.light.b01}; }
  }
  > li:nth-child(2) { grid-column: 4/5; grid-row: 1/3;
    button { background-color: #c0c0c0; }
  }
  > li:nth-child(3) { grid-column: 1/2; grid-row: 3/5;
    button { background-color: #ffd700; }
  }
  > li:nth-child(4) { grid-column: 7/8; grid-row: 4/6;
    button { background-color: #cfffe5; }
  }
  > li:nth-child(5) { grid-column: 3/4; grid-row: 6/9;
    button { background-color: #79edff; }
  }
  > li:nth-child(6) { grid-column: 7/8; grid-row: 9/10;
    button { background-color: #ce2d46; color: ${({ theme }) => theme.light.b01}; }
  }
  /* > li:last-child { grid-column: 4/5; grid-row: 9/10;
    button { background-color: ${({ theme }) => theme.light.t01}; color: ${({ theme }) => theme.light.b01}; }
  } */
`;
// prettier-ignore
const LevelBackLi = styled.li`
  position: relative; z-index: 1;
  ul { display: flex; flex-direction: column; justify-content: space-between; width: 150px; height: 150px; padding: 0.5rem; border-radius: 10px; background-color: ${({ theme }) => theme.light.b01}; }
`;
// prettier-ignore
const LevelBtn = styled.button`
  width: 150px; height: 150px; border-radius: 10%; box-shadow: 3px 3px 1px 0px ${({ theme }) => theme.light.b02}; font-size: ${({ theme }) => theme.common.md}; font-weight: 700;
`;
// prettier-ignore
const LevelRankBtn = styled(NavLink)`
  display: inherit; text-align: center; background-color: ${({ theme }) => theme.color.c03}; color: ${({ theme }) => theme.light.b01}; z-index: 1;
  &:hover,
  &:focus,
  &:active { background-color: ${({ theme }) => theme.light.t03}; }
`;
// prettier-ignore
const StarsWrapper = styled.div`
  position: absolute; top: 0; left: 0; width: 100%; height: 100%;
`;
// prettier-ignore
const Star = styled.div`
  position: absolute; width: ${({ size }) => size}px; height: ${({ size }) => size}px; border-radius: 50%; background-color: ${({ theme }) => theme.light.b01}; opacity: 0.8; left: ${({ left }) => left}%; top: ${({ top }) => top}%;
`;

// Child.jsx
// prettier-ignore
const Right = styled.div`
  display: flex; width: ${({ theme }) => theme.common.col6}; height: 40px;
`;
// prettier-ignore
const StyleResetButton = styled(ResetButton)`
  width: ${({ theme }) => theme.common.col3}; padding: 6px 10px;
`;
// prettier-ignore
const StyleSelect = styled.select`
  width: ${({ theme }) => theme.common.col9}; padding-left: 10px; border-radius: 8px; font-size: ${({ theme }) => theme.common.md}; font-weight: 400;
`;

// Rank.jsx
const StyledSubTitle = styled(SubTitle)`
  text-align: center;
  margin-bottom: 20px;
`;
// prettier-ignore
const RatingContent = styled.ul`
  position: relative; display: flex; border: 2px solid #e0dbdf; border-radius: 10px;
  li { width: 50%; padding: 25px; border-left: 2px solid #e0dbdf; font-weight: 700; }
  li:first-child { border-left: 0; }
  span { float: right; font-size: 25px; line-height: 25px; color: ${({ theme }) => theme.color.c08}; }
`;
const Img = styled.img`
  display: block;
  margin: 0 auto 1rem;
`;

// RankLevel.jsx
const RankLevelDiv = styled.div`
  position: relative;
`;
// prettier-ignore
const Level = styled.ul`
  position: relative; width: 85px; height: 85px;
  li:first-child { position: absolute; top: 0; left: 0; width: 0; height: 0; border-style: solid; border-color: #ff0000 transparent; transform: rotate(36deg); }
  li:last-child { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(to bottom, #424874, #e0dbdf); clip-path: polygon(50% 0, 100% 38%, 82% 100%, 18% 100%, 0 38%); }
`;
// prettier-ignore
const StyleSpan = styled.span`
  position: absolute; top: 26px; width: 85px; text-align: center; font-size: ${({ theme }) => theme.common.xl}; font-weight: 700; color: ${({ theme }) => theme.light.b01}; z-index: 1;
`;

export {
  Img,
  Level,
  LevelBack,
  LevelBackLi,
  LevelBackUl,
  LevelBtn,
  LevelRankBtn,
  Nav,
  NavItem,
  NavList,
  NavStyle,
  NavSubStyle,
  RankLevelDiv,
  RatingContent,
  ResetButton,
  Right,
  Star,
  StarsWrapper,
  StyleResetButton,
  StyleSelect,
  StyleSpan,
  StyleTitle,
  StyledSubTitle,
  Top,
};
