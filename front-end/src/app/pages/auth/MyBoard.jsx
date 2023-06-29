// 글/댓글 관리
// [ ]  구조 바꿔야함
import Mymenu from 'app/components/Mymenu';
import { Content, Right, StyleTitle } from 'app/style/StyleMypage';

const MyBoard = () => {
  return (
    <div>
      <StyleTitle>내정보</StyleTitle>
      <Content>
        <Mymenu />
        <Right>글/댓글 관리</Right>
      </Content>
    </div>
  );
};

export default MyBoard;
