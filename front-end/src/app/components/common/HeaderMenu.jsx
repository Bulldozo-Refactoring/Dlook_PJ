import { MenuLi, NavStyle, StyleLi, Title } from 'app/style/StyleHeader';

function HeaderMenu() {
  return (
    <>
      <MenuLi>
        <Title>알고리즘 문제 풀이</Title>
        <ul>
          <StyleLi>
            {/* <NavStyle to="/algorithm/step">문제 추천</NavStyle> */}
            <NavStyle to="/algorithm/level">문제 추천</NavStyle>
          </StyleLi>
          <StyleLi>
            <NavStyle to="/algorithm/type">알고리즘 문제 분석</NavStyle>
          </StyleLi>
          <StyleLi>
            <NavStyle to="/algorithm/rank">랭킹 분석</NavStyle>
          </StyleLi>
        </ul>
      </MenuLi>
      <MenuLi>
        <Title>전체 게시판</Title>
        <ul>
          <StyleLi>
            <NavStyle to={`/boards/list?page=0`}>전체 게시판</NavStyle>
          </StyleLi>
        </ul>
      </MenuLi>
      <MenuLi>
        <Title>쓰레기통</Title>
        <ul>
          <StyleLi>
            <NavStyle to="/garbage">쓰레기통</NavStyle>
          </StyleLi>
        </ul>
      </MenuLi>
      <MenuLi>
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
      </MenuLi>
    </>
  );
}
export default HeaderMenu;
