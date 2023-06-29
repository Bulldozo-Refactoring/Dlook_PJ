import { MenuLi, MenuUl, NavStyle } from 'app/style/StyleMypage';

const Mymenu = () => {
  return (
    <MenuUl>
      <MenuLi>
        <NavStyle to="/mypages/certify">백준 연동</NavStyle>
      </MenuLi>
      <MenuLi>
        <NavStyle to="/mypages/boards">글/댓글 관리</NavStyle>
      </MenuLi>
    </MenuUl>
  );
};

export default Mymenu;
