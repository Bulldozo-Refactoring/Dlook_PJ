import React from "react";
import { SectionsContainer, Section } from "react-fullpage";
import MainCard from "app/components/MainCard";
import SubmitButton from "app/components/SubmitButton";
import mainBack01 from "app/assets/images/mainBack01.png";
import styled from "styled-components";

function MainPage() {
  let options = {
    sectionClassName: "section",
    anchors: ["sectionOne", "sectionTwo", "sectionThree"],
    scrollBar: false,
    navigation: true,
    verticalAlign: false,
    sectionPaddingBottom: "80px",
    arrowNavigation: true,
  };

  return (
    <div id="main">
      <SectionsContainer {...options}>
        <Section id="main_box01">
          <MainBox01>
            <p>Welcome</p>
            <H1>Dlook에 오신걸 환영합니다.</H1>
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
            <SubmitButton
              disableRipple
              onClick={() => (document.location.href = "/algorithms/step")}
              style={{ marginTop: "30px", color: "var(--bg-100)" }}
            >
              알고리즘 문제 보러가기
            </SubmitButton>
          </MainBox01>
          <div
            className="back"
            style={{
              background:
                "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(" +
                mainBack01 +
                ") no-repeat center center",
              backgroundSize: "cover",
              zIndex: "0",
              width: "100%",
              height: "100%",
            }}
          ></div>
        </Section>
        <Section id="main_box02">
          <MainBox02>
            <H1>불도조</H1>
            <p style={{ marginBottom: "20px" }}>
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
            <div className="card">
              <MainCard />
            </div>
          </MainBox02>
        </Section>
        <Section
          id="main_box03"
          style={{ margin: "0 auto", backgroundColor: "var(--bg-100)" }}
        >
          <MainBox03>
            <h1 style={{ fontSize: "60px", fontWeight: "500" }}>공지사항</h1>
          </MainBox03>
        </Section>
      </SectionsContainer>
    </div>
  );
}

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
`;
const MainBox02 = styled.div`
  position: absolute;
  bottom: calc(100% - 55%);
  right: calc(100% - 95%);
  text-align: center;
  font-size: 18px;
  line-height: 24px;
  font-weight: 300;
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

export default MainPage;
