// [ ] 추후 정리 필요
import { Title } from 'app/style/GlobalStyle';
import { NavLink as BaseNavLink } from 'react-router-dom';
import { styled } from 'styled-components';

const MenuUl = styled.ul`
  width: ${({ theme }) => theme.common.col2};
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
  color: ${({ theme }) => theme.light.t01};
  font-weight: 500;
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.color.c01};
  }
  &:hover::before {
    background-color: ${({ theme }) => theme.color.c07};
  }
  &.active {
    color: ${({ theme }) => theme.color.c07};
    font-weight: 700;
  }
`;

// certify
const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;
const StyleTitle = styled(Title)`
  text-align: left;
`;
const Content = styled.div`
  display: flex;
`;
const Right = styled.div`
  width: 80%;
  min-height: 600px;
`;
const Before = styled.div`
  height: 100%;
  padding: 100px 10px;
  border: 1px solid ${({ theme }) => theme.color.c01};
  border-radius: 10px;
  text-align: center;
`;
const After = styled.div`
  display: flex;
  width: 90%;
  height: 70%;
  margin: 0 auto;
  padding: 40px;
  border: 1px solid ${({ theme }) => theme.color.c01};
  border-radius: 3rem;
  background: linear-gradient(
    130deg,
    ${({ theme }) => theme.light.t03},
    ${({ theme }) => theme.color.c05},
    ${({ theme }) => theme.light.t01}
  );
  animation: gradient 10s ease infinite;
  background-size: 300% 300%;
  background-position: 0% 0%;
  text-align: center;
  box-shadow: 10px 15px 8px 0px rgba(223, 200, 255, 0.5);

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
const Img = styled.img`
  width: 150px;
  padding: 10px;
  vertical-align: middle;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.light.t03};
`;
const StyleP = styled.p`
  margin: 4rem 0 1rem;
  font-size: 1.2rem;
  font-weight: 500;
`;
const StyleUl = styled.ul`
  counter-reset: number 0;
  margin-bottom: 4rem;
`;
const StyleLi = styled.li`
  position: relative;
  &::before {
    position: absolute;
    top: 50%;
    left: calc(50% - 65px);
    transform: translateY(-50%);
    counter-increment: number 1;
    content: counter(number) '.';
    color: 
    ${({ theme }) => theme.light.t01}
    font-size: 0.8em;
    z-index: 1;
  }
`;
const Circle = styled.p`
  width: 200px;
  height: 200px;
  margin: 0 auto 2rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.light.b01};
`;
const PinkText01 = styled.p`
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-weight: 500;
  font-size: 25px;
  color: ${({ theme }) => theme.color.c07};
`;
const PinkText02 = styled(PinkText01)`
  margin-bottom: 11.5rem;
  font-size: 30px;
`;
const PinkText03 = styled(PinkText01)`
  display: inline;
  font-size: 20px;
`;
const BlueText = styled.span`
  margin-bottom: 11.5rem;
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.color.c04};
`;
const WhiteText = styled.p`
  display: inline-block;
  width: 40%;
  font-weight: 500;
  font-size: 20px;
  color: ${({ theme }) => theme.light.b01};
`;

export {
  After,
  Before,
  BlueText,
  Circle,
  Container,
  Content,
  Img,
  MenuLi,
  MenuUl,
  NavStyle,
  PinkText01,
  PinkText02,
  PinkText03,
  Right,
  StyleLi,
  StyleP,
  StyleTitle,
  StyleUl,
  WhiteText,
};
