import { NavLink as BaseNavLink } from 'react-router-dom';
import { styled } from 'styled-components';

function HeaderMenu() {
  return (
    <>
      <Li>
        <Title>알고리즘 문제 풀이</Title>
        <ul>
          <StyleLi>
            <NavStyle to="/algorithms/step">문제 추천</NavStyle>
          </StyleLi>
          <StyleLi>
            <NavStyle to="/algorithms/type">알고리즘 문제 분석</NavStyle>
          </StyleLi>
          <StyleLi>
            <NavStyle to="/algorithms/rank">랭킹 분석</NavStyle>
          </StyleLi>
        </ul>
      </Li>
      <Li>
        <Title>전체 게시판</Title>
        <ul>
          <StyleLi>
            <NavStyle to={`/boards/list?page=0`}>전체 게시판</NavStyle>
          </StyleLi>
        </ul>
      </Li>
      <Li>
        <Title>쓰레기통</Title>
        <ul>
          <StyleLi>
            <NavStyle to="/garbage">쓰레기통</NavStyle>
          </StyleLi>
        </ul>
      </Li>
      <Li>
        <Title>더보기</Title>
        <ul>
          <StyleLi>
            <NavStyle to="/mypages/certify">내 정보</NavStyle>
          </StyleLi>
          <StyleLi>
            <NavStyle to="/notice">공지사항/이벤트</NavStyle>
          </StyleLi>
          <StyleLi>
            <NavStyle to="/">이용방법</NavStyle>
          </StyleLi>
          <StyleLi>
            <NavStyle to="/">서비스 정책</NavStyle>
          </StyleLi>
        </ul>
      </Li>
    </>
  );
}
const Title = styled.p`
  margin-bottom: 0.5em;
  font-size: 1.24em;
  font-weight: bold;
`;
const Li = styled.li`
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
export default HeaderMenu;
