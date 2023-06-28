// 알고리즘 - 문제추천 - 알고리즘
import { Autocomplete, FormControl } from '@mui/joy';
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
`;
const Right = styled.div`
  display: flex;
  height: 40px;
`;
const AutocompleteStyle = styled(Autocomplete)`
  width: 100%;
  border-color:  ${({ theme }) => theme.light.t03}; !important;
`;
const ResetButton = styled(SubmitButton)`
  width: ${({ theme }) => theme.common.col3};
  padding: 6px 10px;
  margin: 0;
  border-radius: 8px;
  font-size: ${({ theme }) => theme.common.base};
`;

const Child = () => {
  // [ ] 알고리즘 추천 페이지 데이터 작업 필요
  const List = [
    { id: 1, title: '알고리즘 종류1' },
    { id: 2, title: '알고리즘 종류2' },
    { id: 3, title: '알고리즘 종류3' },
  ];
  const pageNumber = 10;
  const modifiedDataList = dummyList.map((list) => {
    const { id, title, solve } = list;
    return {
      no: id,
      title: title,
      solve,
    };
  });
  // [ ] 지금은 값이 안 들어감
  const level = Cookies.get('memberName');

  return (
    <div>
      <StepTop>
        <RankLevel level={level}></RankLevel>
        <Right>
          <AutocompleteStyle
            multiple
            placeholder="List"
            size="sm"
            limitTags={2}
            options={List}
            getOptionLabel={(option) => option.title}
            defaultValue={[List[1]]}
          >
            <FormControl id="multiple-limit-tags"></FormControl>
          </AutocompleteStyle>
          <ResetButton>새로고침</ResetButton>
        </Right>
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

export default Child;
