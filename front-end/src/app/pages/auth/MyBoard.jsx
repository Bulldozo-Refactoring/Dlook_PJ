// 글/댓글 관리
// [ ]  구조 바꿔야함
import React from 'react';
import { styled } from 'styled-components';
import Mymenu from 'app/components/Mymenu';
import { Title } from '@mui/icons-material';

const MyBoard = () => {
  return (
    <Container>
      <StyleTitle>내정보</StyleTitle>
      <Content>
        <Mymenu />
        <Right>글/댓글 관리</Right>
      </Content>
    </Container>
  );
};
const Container = styled.div``;
const StyleTitle = styled(Title)`
  width: calc(100% - 400px);
  text-align: left;
`;
const Content = styled.div`
  display: flex;
  width: calc(100% - 400px);
  margin: 0 auto 2rem;
`;
const Right = styled.div`
  width: calc(100% - 100px);
  min-height: 600px;
`;

export default MyBoard;
