import { NavLink as BaseNavLink } from 'react-router-dom';
import { styled } from 'styled-components';

function HeaderMenu() {
  return (
    <>
      <li>
        <Title>알고리즘 문제 풀이</Title>
        <ul>
          <Li>
            <NavStyle to="/algorithms/step">문제 추천</NavStyle>
          </Li>
          <Li>
            <NavStyle to="/algorithms/type">알고리즘 문제 분석</NavStyle>
          </Li>
        </ul>
      </li>
      <li>
        <Title>전체 게시판</Title>
        <ul>
          <Li>
            <NavStyle to={`/boards/list?page=0`}>전체 게시판</NavStyle>
          </Li>
        </ul>
      </li>
      <li>
        <Title>쓰레기통</Title>
        <ul>
          <Li>
            <NavStyle to="/garbage">쓰레기통</NavStyle>
          </Li>
        </ul>
      </li>
      <li>
        <Title>더보기</Title>
        <ul>
          <Li>
            <NavStyle to="/mypages/certify">내 정보</NavStyle>
          </Li>
          <Li>
            <NavStyle to="/notice">공지사항/이벤트</NavStyle>
          </Li>
          <Li>
            <NavStyle to="/">이용방법</NavStyle>
          </Li>
          <Li>
            <NavStyle to="/">서비스 정책</NavStyle>
          </Li>
        </ul>
      </li>
    </>
  );
}
const Title = styled.p`
  margin-bottom: 0.5em;
  font-size: 1.24em;
  font-weight: bold;
`;
const Li = styled.li`
  position: relative;
`;
const NavStyle = styled(BaseNavLink)`
  display: block;
  padding: 6px 15px;
  border-left: 3px solid;
  font-size: 0.9em;
  color: var(--primary-100);
  font-weight: 500;
  &:hover,
  &:focus {
    color: var(--accent-200);
  }
  &:hover::before {
    background-color: var(--accent-200);
  }
  &.active {
    color: var(--accent-200);
    font-weight: 700;
  }
`;
export default HeaderMenu;
