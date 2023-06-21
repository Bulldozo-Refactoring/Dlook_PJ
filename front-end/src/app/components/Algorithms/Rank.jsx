// 알고리즘 - 랭킹분석
import React from 'react';
import { styled } from 'styled-components';

function Child() {
  return (
    <AlgorithmsType>
      <div style={{ marginBottom: '6rem' }}>
        <H2>기간별 진행도</H2>
        <Img src="https://ghchart.rshah.org/219138/OlMinje" alt="백준 잔디" />
        <LinkStyle onClick={() => (document.location.href = 'https://github.com/Bulldozo')}>깃허브 바로가기</LinkStyle>
      </div>
      <div style={{ width: '40%', margin: '0 auto' }}>
        <H2>Rating</H2>
        <Rating>
          <RatingBefore>Rank</RatingBefore>
          <RatingContent style={{ borderBottom: '1px solid var(--bg-300)' }}>
            <RatingLi style={{ borderRight: '1px solid var(--bg-300)' }}>
              EXP<Value>2500</Value>
            </RatingLi>
            <RatingLi>
              Rating<Value>2500</Value>
            </RatingLi>
          </RatingContent>
          <RatingContent>
            <RatingLi style={{ borderRight: '1px solid var(--bg-300)' }}>
              Class<Value>2500</Value>
            </RatingLi>
            <RatingLi>
              푼 문제<Value>2500</Value>
            </RatingLi>
          </RatingContent>
        </Rating>
      </div>
    </AlgorithmsType>
  );
}
const AlgorithmsType = styled.div`
  width: auto;
  min-height: 600px;
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
  width: 80%;
  height: 150px;
  margin: 0 auto 1rem;
`;
const LinkStyle = styled.a`
  display: inline-block;
  background: none;
  text-decoration: underline;
  font-size: 15px;
  color: #1976d2;
  cursor: pointer;
`;
const Rating = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  box-shadow: 0 0 0 2px var(--bg-300);
  border-radius: 10px;
  height: 200px;
`;
const RatingBefore = styled.div`
  position: absolute;
  top: calc(50% - 30px);
  left: calc(50% - 30px);
  width: 60px;
  height: 60px;
  padding: 19px 0;
  border-radius: 50%;
  background-color: var(--primary-200);
  font-weight: 500;
  color: var(--bg-200);
`;
const RatingContent = styled.ul`
  height: 50%;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  text-align: left;
`;
const RatingLi = styled.li`
  width: 50%;
  height: 100%;
  padding: 40px 25px;
  font-weight: 700;
`;
const Value = styled.span`
  float: right;
  font-size: 25px;
  line-height: 25px;
  font-weight: 500;
  color: rgb(255, 115, 165);
`;
export default Child;
