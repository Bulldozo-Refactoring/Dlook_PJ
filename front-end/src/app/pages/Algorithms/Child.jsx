// 알고리즘 - 문제추천 - 알고리즘
import { Autocomplete, FormControl } from '@mui/joy';
import { Table } from 'app/components/Board/Table';
import { styled } from 'styled-components';

const Child = () => {
  // [ ] 알고리즘 추천 페이지 데이터 작업 필요
  const List = [{ title: '알고리즘 종류1' }, { title: '알고리즘 종류1' }, { title: '알고리즘 종류1' }, { title: '알고리즘 종류1' }];
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
    <AlgorithmsChild>
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
      {Table(['문제 번호', '제목', '해결 여부'], modifiedDataList, 'https://www.acmicpc.net/board/view', pageNumber)}
    </AlgorithmsChild>
  );
};

const AlgorithmsChild = styled.div``;
const StepTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 0.4rem;
`;
const H2 = styled.h2`
  font-size: 40px;
  line-height: 18px;
`;
const AutocompleteStyle = styled(Autocomplete)`
  width: 100%;
  max-width: 400px;
  margin-left: -10px;
  border-color:  ${({ theme }) => theme.light.t03}; !important;
`;
const ResetButton = styled.button`
  padding: 6px 15px;
  max-height: 40px;
  border: 1px solid ${({ theme }) => theme.light.t03};
  border-radius: 8px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.color.c04};
  font-size: 14px;
  color: ${({ theme }) => theme.light.t03};
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

export default Child;
