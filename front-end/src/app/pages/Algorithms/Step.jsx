// 알고리즘 - 문제추천 - 실력별
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

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
    </AlgorithmsStep>
  );
}

const AlgorithmsStep = styled.div`
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
const ResetButton = styled.button`
  padding: 6px 15px;
  max-height: 40px;
  border: 1px solid var(--primary-100);
  border-radius: 8px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.lightTheme.t500};
  font-size: 14px;
  color: ${({ theme }) => theme.lightTheme.t300};
`;
const TableList = styled.table`
  margin: 0 auto;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  box-shadow: 0px 6px 3px 2px ${({ theme }) => theme.lightTheme.bg400};
`;
const TableListHead = styled.thead`
  border-bottom: 1px solid ${({ theme }) => theme.lightTheme.bg400};
  background-color: ${({ theme }) => theme.lightTheme.bg300};
`;
const TableListBody = styled.tbody`
  border-bottom: 1px solid ${({ theme }) => theme.lightTheme.bg400};
  text-align: center;
  font-weight: 400;
`;
const HeadTh = styled.th`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.lightTheme.bg400};
  text-align: center;
  cursor: pointer;
`;
const BodyTd = styled.td`
  padding: 15px 10px;
  border: 1px solid ${({ theme }) => theme.lightTheme.bg400};
  font-weight: 300;
`;
const BodyTr = styled.tr`
  &:hover {
    ${BodyTd} {
      font-weight: 500;
      background-color: ${({ theme }) => theme.lightTheme.p100};
      color: ${({ theme }) => theme.lightTheme.bg100};
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
export default Step;
