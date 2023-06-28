// 알고리즘 - 문제분석 - 유형별 분석
import RadarCharts from 'app/components/Algorithms/RadarCharts';
import { styled } from 'styled-components';

const Type = () => {
  return (
    <AlgorithmsType>
      <Wrap>
        <RadarCharts data={exData} />
      </Wrap>
    </AlgorithmsType>
  );
};

const AlgorithmsType = styled.div``;
const Wrap = styled.div`
  width: 100%;
  height: 500px;
`;
const exData = [
  {
    taste: 'fruity',
    chardonay: 95,
    carmenere: 103,
    syrah: 55,
  },
  {
    taste: 'bitter',
    chardonay: 115,
    carmenere: 80,
    syrah: 30,
  },
  {
    taste: 'heavy',
    chardonay: 118,
    carmenere: 41,
    syrah: 74,
  },
  {
    taste: 'strong',
    chardonay: 84,
    carmenere: 117,
    syrah: 43,
  },
  {
    taste: 'sunny',
    chardonay: 24,
    carmenere: 45,
    syrah: 112,
  },
];
export default Type;
