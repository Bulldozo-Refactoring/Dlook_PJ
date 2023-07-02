// 유형별 분석 그래프
import { ResponsiveRadar } from '@nivo/radar';

const RadarCharts = ({ data }) => (
  <ResponsiveRadar
    data={data}
    keys={['chardonay', 'carmenere', 'syrah']}
    indexBy="taste"
    valueFormat=">-.2f"
    margin={{ top: 50, right: 60, bottom: 20, left: 60 }}
    borderColor={{ from: 'color', modifiers: [] }}
    gridLevels={7}
    gridShape="linear"
    gridLabelOffset={36}
    dotSize={10}
    dotColor={{ theme: 'background' }}
    dotBorderWidth={2}
    colors={{ scheme: 'nivo' }}
    blendMode="multiply"
    motionConfig="wobbly"
    legends={[
      {
        anchor: 'top-left',
        direction: 'column',
        translateX: 100,
        translateY: -40,
        itemWidth: 80,
        itemHeight: 20,
        itemTextColor: '#999',
        symbolSize: 12,
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
export default RadarCharts;
