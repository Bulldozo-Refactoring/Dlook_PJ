// 알고리즘 - 문제분석 - 유형별 분석
import { styled } from 'styled-components';
import RadarCharts from 'app/components/Algorithms/RadarCharts';

const Type = () => {
  return (
    <AlgorithmsType>
      <H1>유형별 분석</H1>
      <Wrap>
        <RadarCharts data={exData} />
      </Wrap>
    </AlgorithmsType>
  );
};

const AlgorithmsType = styled.div``;
const H1 = styled.h1`
  margin-bottom: 3rem;
  text-align: center;
  font-size: 45px;
  font-weight: 500;
  line-height: 51px;
`;
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
