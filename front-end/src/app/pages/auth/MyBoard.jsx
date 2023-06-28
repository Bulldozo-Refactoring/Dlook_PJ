// 글/댓글 관리
import React from 'react';
import { styled } from 'styled-components';
import Mymenu from 'app/components/Mymenu';

const MyBoard = () => {
  return (
    <Container>
      <H1>내정보</H1>
      <Content>
        <Mymenu />
        <Right>글/댓글 관리</Right>
      </Content>
    </Container>
  );
};
const Container = styled.div`
  padding: 80px 0 0;
`;
const H1 = styled.h1`
  width: calc(100% - 400px);
  margin: 0 auto 1rem;
  text-align: left;
  font-size: 45px;
  font-weight: 500;
  line-height: 55px;
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
