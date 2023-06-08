import React from 'react';
import { exData } from "../../data/data";
import AlgorithmsMenu from '../Layout/Algorithms/AlgorithmsMenu';
import RadarCharts from '../Layout/Algorithms/RadarCharts';

function AlgorithmsStep() {
  return (
    <div id='Algorithms' className='container_inner'>
        <ul className="menu"><AlgorithmsMenu /></ul>
        <div style={{ width: 'auto', height: '400px', margin: '0 auto' }}>    
        <RadarCharts data={exData}/>
        </div>
    </div>
  )
}

export default AlgorithmsStep;