// 오답유형 그래프
import { ResponsivePie } from '@nivo/pie';

const PieChart = ({ data }) => (
  <ResponsivePie
    data={data}
    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
    sortByValue={true}
    innerRadius={0.35}
    activeOuterRadiusOffset={8}
    colors={{ scheme: 'blue_purple' }}
    borderWidth={6}
    borderColor={{
      from: 'color',
      modifiers: [['darker', '0.3']],
    }}
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextColor="#333333"
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: 'color' }}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor={{
      from: 'color',
      modifiers: [['darker', 2]],
    }}
    fill={[
      { match: { id: 'MATH' }, id: 'dots' },
      { match: { id: 'GREEDY' }, id: 'dots' },
      { match: { id: 'DP' }, id: 'dots' },
      { match: { id: 'GRAPHS' }, id: 'dots' },
      { match: { id: 'IMPLEMENTATION' }, id: 'lines' },
      { match: { id: 'BACKTRACKING' }, id: 'lines' },
      { match: { id: 'ELIXIR' }, id: 'lines' },
    ]}
    legends={[
      {
        anchor: 'bottom',
        direction: 'row',
        justify: false,
        translateX: 0,
        translateY: 56,
        itemsSpacing: 0,
        itemWidth: 100,
        itemHeight: 18,
        itemTextColor: '#999',
        itemDirection: 'left-to-right',
        itemOpacity: 1,
        symbolSize: 18,
        symbolShape: 'circle',
        effects: [
          {
            on: 'hover',
            style: { itemTextColor: '#000' },
          },
        ],
      },
    ]}
  />
);
export default PieChart;
