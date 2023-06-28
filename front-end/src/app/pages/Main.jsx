import { Section, SectionsContainer } from 'react-fullpage';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import MainCard from 'app/components/MainCard';
import { SubmitButton } from 'app/style/StyledComponent';
import mainBack01 from 'app/assets/images/mainBack01.png';
import mainBack02 from 'app/assets/images/mainBack02.png';

const MainPage = () => {
  const navigate = useNavigate();
  // page scroll
  let options = {
    sectionClassName: 'section',
    anchors: ['sectionOne', 'sectionTwo', 'sectionThree'],
    scrollBar: false,
    navigation: true,
    verticalAlign: false,
    sectionPaddingTop: '80px',
    arrowNavigation: true,
  };

  return (
    <SectionsContainer controls {...options}>
      <Section>
        <MainBox01>
          <p>Welcome</p>
          <h1>Dlook에 오신걸 환영합니다.</h1>
          <p>
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
          </p>
          <SubmitButton onClick={() => navigate('/algorithms/step')}>알고리즘 문제 보러가기</SubmitButton>
        </MainBox01>
      </Section>
      <Section id="main_box02">
        <MainBox02>
          <h1>불도조</h1>
          <p>
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
          </p>
          <MainCard />
        </MainBox02>
      </Section>
      <Section>
        <MainBox03>
          <h1>NOTICE</h1>
          <NoticeUl>
            <li>
              <NoticeNav to="">+</NoticeNav>
              <NoticeDiv>
                청춘의 청춘 남는 못하다 봄바람을 있는 속에 실로 것이다. 붙잡아 만천하의 것은 있으며, 그들에게 쓸쓸한 풀밭에 찾아 우는
                것이다. 이상 가치를 무엇을 피부가 공자는 크고 속에 대고, 이것이다.
              </NoticeDiv>
            </li>
          </NoticeUl>
        </MainBox03>
      </Section>
    </SectionsContainer>
  );
};
const Main = styled.div`
  height: 100%;
  h1 {
    margin-bottom: 30px;
    font-size: 60px;
    font-weight: 500;
    line-height: 66px;
  }
  p {
    margin-bottom: 2rem;
  }
`;
const MainBox01 = styled(Main)`
  padding: 100px 40px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${mainBack01});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  text-align: center;
  font-size: 20px;
  line-height: 26px;
  font-weight: 300;
  z-index: 1;
  *,
  button {
    color: ${({ theme }) => theme.light.b01};
  }
`;
const MainBox02 = styled(Main)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 50%;
  margin-left: auto;
  padding: 10% 40px;
  font-size: 18px;
  line-height: 24px;
  font-weight: 300;
  &::before {
    content: '';
    position: absolute;
    top: 33%;
    left: -100%;
    width: 80%;
    height: 450px;
    background: url(${mainBack02}) no-repeat center center;
    background-size: cover;
    background-attachment: fixed !important;
  }
  button {
    padding: 3px 20px;
    font-size: 13px;
    color: ${({ theme }) => theme.color.c05};
    background-color: ${({ theme }) => theme.light.b03};
  }
`;
const MainBox03 = styled(Main)`
  padding: 80px calc(50% - 400px);
  background-color: ${({ theme }) => theme.light.b03};
  text-align: center;
`;
const NoticeUl = styled.ul`
  text-align: center;
  li {
    display: inline-flex;
    align-items: center;
    margin-bottom: 2rem;
    padding: 20px 15px;
    background-color: ${({ theme }) => theme.light.b01};
  }
`;
const NoticeNav = styled(NavLink)`
  display: inline-block;
  margin-right: 20px;
  position: relative;
  padding-top: 12px;
  font-size: 100px;
  line-height: 0;
  font-weight: 600;
  color: ${({ theme }) => theme.color.c05};
  z-index: 1;
  &::before {
    content: '';
    position: absolute;
    top: -24px;
    left: -3px;
    width: 57px;
    height: 57px;
    background-color: ${({ theme }) => theme.light.t03};
    z-index: -1;
  }
`;
const NoticeDiv = styled.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  width: 600px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
export default MainPage;
