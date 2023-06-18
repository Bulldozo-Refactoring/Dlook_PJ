import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SectionsContainer, Section } from 'react-fullpage';
import Cookies from 'js-cookie';
import styled from 'styled-components';

import MainCard from 'app/components/MainCard';
import SubmitButton from 'app/components/SubmitButton';
import mainBack01 from 'app/assets/images/mainBack01.png';
import mainBack02 from 'app/assets/images/mainBack02.png';

function MainPage() {
  // page scroll
  let options = {
    sectionClassName: 'section',
    anchors: ['sectionOne', 'sectionTwo', 'sectionThree'],
    scrollBar: false,
    navigation: true,
    verticalAlign: false,
    sectionPaddingBottom: '80px',
    arrowNavigation: true,
  };

  const isLoggedIn = Cookies.get('isLoggedIn');
  const navigate = useNavigate();

  const handleClick = () => {
    if (isLoggedIn) navigate('/algorithms/step');
    else navigate('/members/login');
  };

  return (
    <Main>
      <SectionsContainer {...options}>
        <Section>
          <MainBox01>
            <p>Welcome</p>
            <H1>Dlook에 오신걸 환영합니다.</H1>
            <PStyle>
              청춘의 청춘 남는 못하다 봄바람을 있는 속에 실로 것이다.
              <br />
              붙잡아 만천하의 것은 있으며,
              <br />
              그들에게 쓸쓸한 풀밭에 찾아 우는 것이다.
              <br />
              이상 가치를 무엇을 피부가 공자는 크고 속에 대고, 이것이다.
              <br />
              생생하며, 이상의 실현에 말이다.
              <br />
              그것은 얼마나 보는 새가 방황하여도,
              <br />
            </PStyle>
            <SubmitButton disableRipple onClick={handleClick}>
              알고리즘 문제 보러가기
            </SubmitButton>
          </MainBox01>
          <Back />
        </Section>
        <Section id="main_box02">
          <MainBox02>
            <H1>불도조</H1>
            <PStyle>
              청춘의 청춘 남는 못하다 봄바람을 있는 속에 실로 것이다.
              <br />
              붙잡아 만천하의 것은 있으며,
              <br />
              그들에게 쓸쓸한 풀밭에 찾아 우는 것이다.
              <br />
              이상 가치를 무엇을 피부가 공자는 크고 속에 대고, 이것이다.
              <br />
              생생하며, 이상의 실현에 말이다.
              <br />
              그것은 얼마나 보는 새가 방황하여도,
              <br />
            </PStyle>
            <MainCard />
          </MainBox02>
        </Section>
        <Section style={{ margin: '0 auto', backgroundColor: 'var(--bg-100)' }}>
          <MainBox03>
            <H1>공지사항</H1>
          </MainBox03>
        </Section>
      </SectionsContainer>
    </Main>
  );
}
const Main = styled.div`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 6.5%;
    left: -300px;
    background: url(${mainBack02}) no-repeat center center;
    background-size: cover;
    background-attachment: fixed !important;
    height: 550px;
    width: 80%;
    margin: 0 auto;
  overflow-x: hidden;
`;
const MainBox01 = styled.div`
  position: absolute;
  top: 200px;
  left: 0;
  width: 100%;
  text-align: center;
  font-size: 20px;
  line-height: 26px;
  font-weight: 300;
  z-index: 1;
  *,
  button {
    color: var(--bg-100);
  }
`;
const MainBox02 = styled.div`
  position: absolute;
  bottom: calc(100% - 55%);
  right: calc(100% - 95%);
  text-align: center;
  font-size: 18px;
  line-height: 24px;
  font-weight: 300;
  button {
    padding: 3px 20px;
    font-size: 13px;
    color: var(--primary-200);
    background-color: var(--bg-200);
  }
`;
const MainBox03 = styled.div`
  height: 100%;
  padding: 80px calc(50% - 400px);
  background-color: var(--bg-100);
  text-align: center;
`;
const H1 = styled.h1`
  margin-bottom: 30px;
  font-size: 60px;
  font-weight: 500;
  line-height: 66px;
`;
const PStyle = styled.p`
  margin-bottom: 2rem;
`;
const Back = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${mainBack01});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  z-index: 0;
  width: 100%;
  height: 100%;
`;
export default MainPage;
