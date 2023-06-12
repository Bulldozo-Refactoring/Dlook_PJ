// 백준 연동
import React from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import Mymenu from "app/components/Mymenu";
import SubmitButton from "app/components/SubmitButton";
import logo from "app/assets/images/logo.svg";

const MyCertify = () => {
  const { member_seq } = useParams();

  return (
    <Container>
      <H1>내정보</H1>
      <Content>
        <Mymenu />
        <Right>
          {/* 연동 전 */}
          <Before>
            <Img src={logo} alt="logo" />
            <PStyle>
              해당 페이지는 백준 아이디를 연동해야만 사용 가능합니다.
              <br />
              연동에 성공하면 해당 기능을 사용할 수 있습니다.
            </PStyle>
            <UlStyle>
              <LiStyle>사용 가능 기능1</LiStyle>
              <LiStyle>사용 가능 기능2</LiStyle>
              <LiStyle>사용 가능 기능3</LiStyle>
            </UlStyle>
            <SubmitButton style={{ color: "var(--text-100)", width: "40%" }}>
              백준 연동하러 가기
            </SubmitButton>
          </Before>
          {/* 연동 후 */}
          <After>
            <div style={{ width: "30%" }}>
              <Circle></Circle>
              <PinkText01>Sliver</PinkText01>
              <p
                style={{
                  fontWeight: "500",
                  fontSize: "35px",
                  color: "#D0D3FF",
                }}
              >
                딸기너구리
              </p>
            </div>
            <div style={{ width: "70%", textAlign: "left", padding: "0 30px" }}>
              <PinkText01
                style={{
                  marginBottom: "11.5rem",
                  fontSize: "2rem",
                  fontWeight: "700",
                }}
              >
                User Bio - 힘들어요 제법 쓰러질듯해요
              </PinkText01>
              <div>
                <p>
                  <WhiteText>SolvedCount</WhiteText>
                  <PinkText02>2658</PinkText02>
                </p>
                <p>
                  <WhiteText>exp</WhiteText>
                  <PinkText02>48469349284</PinkText02>
                </p>
                <p>
                  <WhiteText>Class</WhiteText>
                  <PinkText02>8</PinkText02>
                </p>
              </div>
            </div>
          </After>
        </Right>
      </Content>
    </Container>
  );
};
const Container = styled.div`
  padding: 80px 0 0;
`;
const Content = styled.div`
  display: flex;
  width: calc(100% - 400px);
  margin: 0 auto 2rem;
`;
const Right = styled.div`
  // max-width: calc(89% - 102px);
  width: 100%;
  min-height: 600px;
`;
const Before = styled.div`
  display: none;
  height: 100%;
  padding: 100px 10px;
  border: 1px solid var(--bg-300);
  border-radius: 10px;
  text-align: center;
`;
const After = styled.div`
  display: flex;
  width: 70%;
  height: 70%;
  margin: 0 auto;
  padding: 40px;
  background-image: linear-gradient(130deg, #424874, #6f73a3, #d0d3ff);
  border: 1px solid var(--bg-300);
  border-radius: 10px;
  text-align: center;
`;
const H1 = styled.h1`
  width: calc(100% - 400px);
  margin: 0 auto 1rem;
  text-align: left;
  font-size: 45px;
  font-weight: 500;
  line-height: 55px;
`;
const Img = styled.img`
  width: 150px;
  padding: 10px;
  vertical-align: middle;
  border-radius: 10px;
  background-color: var(--primary-100);
`;
const PStyle = styled.p`
  margin: 4rem 0 1rem;
  font-size: 1.2rem;
  font-weight: 500;
`;
const UlStyle = styled.ul`
  counter-reset: number 0;
  margin-bottom: 4rem;
`;
const LiStyle = styled.li`
  position: relative;
  &::before {
    position: absolute;
    top: 50%;
    left: calc(50% - 65px);
    transform: translateY(-50%);
    counter-increment: number 1;
    content: counter(number) ".";
    color: var(--text-100);
    font-size: 0.8em;
    z-index: 1;
  }
`;
const Circle = styled.p`
  width: 200px;
  height: 200px;
  margin: 0 auto 2rem;
  border-radius: 50%;
  background-color: var(--bg-100);
`;
const PinkText01 = styled.p`
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-weight: 500;
  font-size: 25px;
  color: #ffcefe;
`;
const PinkText02 = styled.span`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-weight: 500;
  font-size: 20px;
  color: #ffcefe;
`;
const WhiteText = styled.p`
  display: inline-block;
  width: 35%;
  font-weight: 500;
  font-size: 20px;
  color: var(--bg-100);
`;
export default MyCertify;
