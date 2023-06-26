// 알고리즘 - 문제추천 - 알고리즘
import React from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import { Autocomplete, FormControl } from '@mui/joy';

function Child() {
  return (
    <AlgorithmsChild>
      <H1>알고리즘 추천</H1>
      <StepTop>
        <H2>Level</H2>
        <div className="right" style={{ display: 'flex' }}>
          <FormControl id="multiple-limit-tags">
            <AutocompleteStyle
              multiple
              placeholder="List"
              size="sm"
              limitTags={2}
              options={List}
              getOptionLabel={(option) => option.title}
              defaultValue={[List[1]]}
            />
          </FormControl>
          <ResetButton>새로고침</ResetButton>
        </div>
      </StepTop>
      <TableList>
        <TableListHead>
          <BodyTr>
            <HeadTh>문제 번호</HeadTh>
            <HeadTh style={{ width: '80%' }}>제목</HeadTh>
            <HeadTh>해결 여부</HeadTh>
          </BodyTr>
        </TableListHead>
        <TableListBody>
          {dummyList.map((it, index) => {
            return (
              <BodyTr key={index}>
                <BodyTd>{it.id}</BodyTd>
                <BodyTd>
                  <TdLink to="/algorithms/step">{it.title}</TdLink>
                </BodyTd>
                <BodyTd>{it.solve}</BodyTd>
              </BodyTr>
            );
          })}
        </TableListBody>
      </TableList>
    </AlgorithmsChild>
  );
}

const AlgorithmsChild = styled.div`
  width: auto;
  height: 600px;
  margin: 0 auto;
  padding: 120px 0 0;
  * {
    font-weight: 500;
  }
`;
const StepTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 0.4rem;
`;
const H1 = styled.h1`
  margin-bottom: 5rem;
  text-align: center;
  font-size: 45px;
  line-height: 51px;
`;
const H2 = styled.h2`
  font-size: 40px;
  line-height: 18px;
`;
const AutocompleteStyle = styled(Autocomplete)`
  width: 100%;
  max-width: 400px;
  margin-left: -10px;
  border-color: var(--primary-100) !important;
`;
const ResetButton = styled.button`
  padding: 6px 15px;
  max-height: 40px;
  border: 1px solid var(--primary-100);
  border-radius: 8px;
  box-sizing: border-box;
  background-color: #d0d3ff;
  font-size: 14px;
  color: var(--primary-100);
`;
const TableList = styled.table`
  margin: 0 auto;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  box-shadow: 0px 6px 3px 2px var(--bg-300);
`;
const TableListHead = styled.thead`
  border-bottom: 1px solid var(--bg-300);
  background-color: var(--bg-200);
`;
const TableListBody = styled.tbody`
  border-bottom: 1px solid var(--bg-300);
  text-align: center;
  font-weight: 400;
`;
const HeadTh = styled.th`
  padding: 10px;
  border: 1px solid var(--bg-300);
  text-align: center;
  cursor: pointer;
`;
const BodyTd = styled.td`
  padding: 15px 10px;
  border: 1px solid var(--bg-300);
  font-weight: 300;
`;
const BodyTr = styled.tr`
  &:hover {
    ${BodyTd} {
      font-weight: 500;
      background-color: var(--primary-200);
      color: var(--bg-100);
      opacity: 0.5;
    }
  }
`;
const TdLink = styled(NavLink)`
  display: inline-block;
  width: 100%;
  font-weight: 300;
`;
const dummyList = [
  {
    id: 1,
    title: '문제링크 ',
    solve: '해결',
  },
  {
    id: 2,
    title: '문제링크 ',
    solve: '해결',
  },
];

const List = [{ title: '알고리즘 종류1' }, { title: '알고리즘 종류1' }, { title: '알고리즘 종류1' }, { title: '알고리즘 종류1' }];
export default Child;
