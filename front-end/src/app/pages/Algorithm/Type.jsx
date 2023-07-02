// 알고리즘 - 문제분석 - 유형별 분석
import RadarCharts from 'app/components/Algorithm/RadarCharts';
import { styled } from 'styled-components';

const Type = () => {
  return (
    <AlgorithmType>
      <Wrap>
        <RadarCharts data={exData} />
      </Wrap>
    </AlgorithmType>
  );
};

const AlgorithmType = styled.div``;
const Wrap = styled.div`
  width: 100%;
  height: 500px;
`;

const exData = [
  { taste: 'MATH', chardonay: 95, carmenere: 103, syrah: 55 },
  { taste: 'GREEDY', chardonay: 115, carmenere: 80, syrah: 30 },
  { taste: 'DP', chardonay: 118, carmenere: 41, syrah: 74 },
  { taste: 'GRAPHS', chardonay: 84, carmenere: 117, syrah: 43 },
  { taste: 'IMPLEMENTATION', chardonay: 24, carmenere: 45, syrah: 112 },
  { taste: 'BACKTRACKING', chardonay: 115, carmenere: 80, syrah: 30 },
  { taste: 'ELIXIR', chardonay: 118, carmenere: 41, syrah: 74 },
];
export default Type;
