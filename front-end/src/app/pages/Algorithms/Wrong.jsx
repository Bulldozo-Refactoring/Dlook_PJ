// 알고리즘 - 문제분석 - 오답유형
import { styled } from 'styled-components';
import PieChart from 'app/components/Algorithms/PieCharts';

const Wrong = () => {
  return (
    <AlgorithmsWrong>
      <Wrap>
        <PieChart data={exData} />
      </Wrap>
    </AlgorithmsWrong>
  );
};

const AlgorithmsWrong = styled.div``;
const Wrap = styled.div`
  width: 100%;
  height: 500px;
`;
const exData = [
  {
    id: 'python',
    label: 'python',
    value: 456,
    color: 'hsl(79, 70%, 50%)',
  },
  {
    id: 'erlang',
    label: 'erlang',
    value: 52,
    color: 'hsl(150, 70%, 50%)',
  },
  {
    id: 'php',
    label: 'php',
    value: 597,
    color: 'hsl(99, 70%, 50%)',
  },
  {
    id: 'elixir',
    label: 'elixir',
    value: 280,
    color: 'hsl(173, 70%, 50%)',
  },
  {
    id: 'ruby',
    label: 'ruby',
    value: 119,
    color: 'hsl(223, 70%, 50%)',
  },
];

export default Wrong;
