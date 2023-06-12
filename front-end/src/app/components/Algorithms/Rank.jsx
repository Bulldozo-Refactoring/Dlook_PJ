// 알고리즘 - 랭킹분석
import React from "react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

function Child() {
  return (
    <AlgorithmsType>
      <div style={{ marginBottom: "40px" }}>
        <H2>기간별 진행도</H2>
        <Img src="https://ghchart.rshah.org/219138/OlMinje" />
        <NavLink
          style={{
            display: "inline-block",
            textDecoration: "underline",
          }}
          to="https://github.com/Bulldozo/Dlook_PJ"
        >
          깃허브 바로가기
        </NavLink>
      </div>
      <div>
        <H2>Rating</H2>
        <Rating></Rating>
      </div>
    </AlgorithmsType>
  );
}
const AlgorithmsType = styled.div`
  width: auto;
  height: 600px;
  margin: 0 auto;
  padding: 120px 0 0;
  text-align: center;
`;
const H2 = styled.h2`
  font-size: 40px;
  line-height: 50px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 20px;
`;
const Img = styled.img`
  display: block;
  margin: 0 auto;
`;
const Rating = styled.div`
  border: 1px solid;
`;
export default Child;
