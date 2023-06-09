// 알고리즘 - 문제분석 - 유형별 분석
import React from 'react';
import { exData } from "data/data";
import RadarCharts from './RadarCharts';

function Type() {
  return (
        <div style={{ width: 'auto', height: '400px', margin: '0 auto' }}>    
        <RadarCharts data={exData}/>
        </div>
  )
}

export default Type;