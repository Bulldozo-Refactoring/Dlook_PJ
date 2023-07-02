// 알고리즘 - 문제분석 - 오답유형
import { styled } from 'styled-components';
import PieChart from 'app/components/Algorithm/PieCharts';

const Wrong = () => {
  return (
    <AlgorithmWrong>
      <Wrap>
        <PieChart data={exData} />
      </Wrap>
    </AlgorithmWrong>
  );
};

const AlgorithmWrong = styled.div``;
const Wrap = styled.div`
  width: 100%;
  height: 500px;
`;

const exData = [
  {
    id: 'MATH',
    label: 'MATH',
    value: 456,
    color: 'hsl(79, 70%, 50%)',
  },
  {
    id: 'GREEDY',
    label: 'GREEDY',
    value: 52,
    color: 'hsl(150, 70%, 50%)',
  },
  {
    id: 'DP',
    label: 'DP',
    value: 597,
    color: 'hsl(99, 70%, 50%)',
  },
  {
    id: 'GRAPHS',
    label: 'GRAPHS',
    value: 280,
    color: 'hsl(173, 70%, 50%)',
  },
  {
    id: 'IMPLEMENTATION',
    label: 'IMPLEMENTATION',
    value: 119,
    color: 'hsl(223, 70%, 50%)',
  },
  {
    id: 'BACKTRACKING',
    label: 'BACKTRACKING',
    value: 119,
    color: 'hsl(223, 70%, 50%)',
  },
  {
    id: 'ELIXIR',
    label: 'ELIXIR',
    value: 119,
    color: 'hsl(223, 70%, 50%)',
  },
];

export default Wrong;
