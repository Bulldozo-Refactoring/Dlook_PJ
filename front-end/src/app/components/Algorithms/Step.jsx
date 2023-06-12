// 알고리즘 - 문제추천 - 실력별
import React from "react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

const dummyList = [
  {
    id: 1,
    title: "문제링크 ",
    solve: "해결",
  },
  {
    id: 1,
    title: "문제링크 ",
    solve: "해결",
  },
];

function Step() {
  return (
    <AlgorithmsStep>
      <H1>실력별 추천</H1>
      <StepTop>
        <H2>Level</H2>
        <ResetButton>새로고침</ResetButton>
      </StepTop>
      <TableList>
        <TableListHead>
          <tr>
            <HeadTh>문제 번호</HeadTh>
            <HeadTh>제목</HeadTh>
            <HeadTh>해결 여부</HeadTh>
          </tr>
        </TableListHead>
        <TableListBody>
          {dummyList.map((it) => {
            return (
              <tr>
                <td style={{ padding: "10px" }}>{it.id}</td>
                <th>
                  <NavLink to="/" style={{ fontWeight: "400" }}>
                    {it.title}
                  </NavLink>
                </th>
                <td>{it.solve}</td>
              </tr>
            );
          })}
        </TableListBody>
      </TableList>
    </AlgorithmsStep>
  );
}

const AlgorithmsStep = styled.div`
  width: auto;
  height: 600px;
  margin: 0 auto;
  padding: 120px 0 0;
`;
const H1 = styled.h1`
  margin-bottom: 2rem;
  text-align: center;
  font-size: 45px;
  font-weight: 500;
  line-height: 51px;
`;
const StepTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 10px;
`;
const H2 = styled.h2`
  font-size: 40px;
  line-height: 18px;
  font-weight: 500;
`;
const ResetButton = styled.button`
  color: #1976d2;
  padding: 6px 15px;
  max-height: 40px;
  border-radius: 8px;
  font-size: 14px;
  line-height: 1.4;
  background-color: #d0d3ff;
  border-color: #424874;
  font-weight: 500;
`;
const TableList = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  margin: 0 auto;
  width: 100%;
`;
const TableListHead = styled.thead`
  border-bottom: 1px solid #ccc;
  background-color: #f5f5f5;
`;
const HeadTh = styled.th`
  padding: 10px;
  width: 12%;
  text-align: center;
  font-weight: 700;
`;
const TableListBody = styled.tbody`
  border-bottom: 1px solid #ccc;
  text-align: center;
  font-weight: 400;
`;
export default Step;
