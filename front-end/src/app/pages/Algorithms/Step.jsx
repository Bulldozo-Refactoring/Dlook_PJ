// 알고리즘 - 문제추천 - 실력별
import RankLevel from 'app/components/Algorithms/RankLevel';
import { Table } from 'app/components/Board/Table';
import { SubmitButton } from 'app/style/StyledComponent';
import Cookies from 'js-cookie';
import { styled } from 'styled-components';

const StepTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 0.4rem;
  height: 85px;
`;
const ResetButton = styled(SubmitButton)`
  padding: 6px 15px;
  margin: 0;
  border-radius: 8px;
  font-size: ${({ theme }) => theme.common.base};
`;

const Step = () => {
  // [ ] 지금은 값이 안 들어감
  const level = Cookies.get('memberName');
  // [ ] 실력별 추천 페이지 데이터 작업 필요
  const pageNumber = 10;
  const modifiedDataList = dummyList.map((list) => {
    const { id, title, solve } = list;
    return {
      no: id,
      title: title,
      solve,
    };
  });

  return (
    <div>
      <StepTop>
        <RankLevel level={level}></RankLevel>
        <ResetButton>새로고침</ResetButton>
      </StepTop>
      {Table(['문제 번호', '제목', '해결 여부'], modifiedDataList, 'https://www.acmicpc.net/board/view', pageNumber)}
    </div>
  );
};

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
