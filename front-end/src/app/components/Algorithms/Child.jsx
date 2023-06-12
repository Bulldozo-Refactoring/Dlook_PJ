// 알고리즘 - 문제추천 - 알고리즘
import React from "react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import Autocomplete from "@mui/joy/Autocomplete";
import FormControl from "@mui/joy/FormControl";

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

const List = [
  { title: "알고리즘 종류1" },
  { title: "알고리즘 종류1" },
  { title: "알고리즘 종류1" },
  { title: "알고리즘 종류1" },
];

function Child() {
  return (
    <AlgorithmsChild>
      <H1>알고리즘 추천</H1>
      <StepTop>
        <H2>Level</H2>
        <div className="right" style={{ display: "flex" }}>
          <FormControl id="multiple-limit-tags">
            <Autocomplete
              multiple
              placeholder="List"
              size="sm"
              limitTags={2}
              options={List}
              getOptionLabel={(option) => option.title}
              defaultValue={[List[1]]}
              sx={{ width: "100%", maxWidth: "400px" }}
            />
          </FormControl>
          <ResetButton>새로고침</ResetButton>
        </div>
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
                  <NavLink to="/">{it.title}</NavLink>
                </th>
                <td>{it.solve}</td>
              </tr>
            );
          })}
        </TableListBody>
      </TableList>
    </AlgorithmsChild>
  );
}

const AlgorithmsChild = styled.div`
  width: auto;
  min-height: 600px;
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
  max-height: 32px;
  border-radius: 8px;
  font-size: 14px;
  line-height: 1.4;
  background-color: #d0d3ff;
  border-color: var(--primary-100);
  font-weight: 500;
`;
const TableList = styled.table`
  margin: 0 auto;
  width: 100%;
`;
const TableListHead = styled.thead`
  border-bottom: 1px solid var(--bg-300);
  background-color: var(--bg-200);
`;
const HeadTh = styled.th`
  padding: 10px;
  width: 12%;
  text-align: center;
  font-weight: 700;
`;
const TableListBody = styled.tbody`
  border-bottom: 1px solid var(--bg-300);
  text-align: center;
`;
export default Child;
