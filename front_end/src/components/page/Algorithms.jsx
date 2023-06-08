import React from 'react';
import { Outlet } from "react-router-dom";
import AlgorithmsMenu from "../Layout/Algorithms/Menu"

function Algorithms() {
  return (
    <div id='Algorithms' className='container_inner'>
      <AlgorithmsMenu />
      <Outlet />
    </div>
  )
}

export default Algorithms;