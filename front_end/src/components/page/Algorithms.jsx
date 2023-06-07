import React from 'react';
import { exData } from "../../data/data";
import RadarCharts from '../Layout/RadarCharts';

function Algorithms() {
  return (
    <div>
        Algorithms menu
        <div style={{ width: 'auto', height: '400px', margin: '0 auto' }}>    
        <RadarCharts data={exData}/>
        </div>
    </div>
  )
}

export default Algorithms;