import { SubmitButton } from 'app/style/GlobalStyle';
import MainCard, { MainBox01, MainBox02, MainBox03, NoticeDiv, NoticeNav, NoticeUl } from 'app/style/StyleMain';
import { Section, SectionsContainer } from 'react-fullpage';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();
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
        <p>환영합니다!</p>
        <h1>Dlook에서 코딩 테스트를 경험해보세요.</h1>
        <br/><br/>
        <p>
            새로운 도전이 시작됩니다.
            <br/>
            Dlook은 여러분의 코딩 실력을 향상시키는 최고의 장소입니다.
            <br/>
            지금 시작하세요.
        </p>
          <SubmitButton onClick={() => navigate('/algorithm/level')}>알고리즘 문제 보러가기</SubmitButton>
        </MainBox01>
      </Section>
      <Section id="main_box02">
        <MainBox02>
          <h1>불도조</h1>
          {/* <p>
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
          </p> */}
          <MainCard />
        </MainBox02>
      </Section>
      <Section>
        <MainBox03>
          <h1>NOTICE</h1>
          <NoticeUl>
            {[0, 1, 2, 3].map((e) => {
              <li>
                <NoticeNav to="">+</NoticeNav>
                <NoticeDiv>
                  청춘의 청춘 남는 못하다 봄바람을 있는 속에 실로 것이다. 붙잡아 만천하의 것은 있으며, 그들에게 쓸쓸한
                  풀밭에 찾아 우는 것이다. 이상 가치를 무엇을 피부가 공자는 크고 속에 대고, 이것이다.
                </NoticeDiv>
              </li>;
            })}
          </NoticeUl>
        </MainBox03>
      </Section>
    </SectionsContainer>
  );
};

export default MainPage;
