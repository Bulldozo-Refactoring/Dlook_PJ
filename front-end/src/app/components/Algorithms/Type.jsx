// 알고리즘 - 문제분석 - 유형별 분석
import React from "react";
import RadarCharts from "./RadarCharts";
import { styled } from "styled-components";

function Type() {
  return (
    <AlgorithmsType>
      <H1>유형별 분석</H1>
      <div style={{ width: "100%", height: "100%" }}>
        <RadarCharts data={exData} />
      </div>
    </AlgorithmsType>
  );
}

const exData = [
  {
    taste: "fruity",
    chardonay: 95,
    carmenere: 103,
    syrah: 55,
  },
  {
    taste: "bitter",
    chardonay: 115,
    carmenere: 80,
    syrah: 30,
  },
  {
    taste: "heavy",
    chardonay: 118,
    carmenere: 41,
    syrah: 74,
  },
  {
    taste: "strong",
    chardonay: 84,
    carmenere: 117,
    syrah: 43,
  },
  {
    taste: "sunny",
    chardonay: 24,
    carmenere: 45,
    syrah: 112,
  },
];

const AlgorithmsType = styled.div`
  width: auto;
  height: 600px;
  margin: 0 auto;
  padding: 120px 0 0;
`;
const H1 = styled.h1`
  margin-bottom: 3rem;
  text-align: center;
  font-size: 45px;
  font-weight: 500;
  line-height: 51px;
`;
export default Type;
