import React from 'react';
import { Outlet } from 'react-router-dom';
import AlgorithmsMenu from 'app/components/Algorithms/Menu';

const Algorithms = () => {
  return (
    <div id="Algorithms" className="container_inner">
      <AlgorithmsMenu />
      <Outlet />
    </div>
  );
};

export default Algorithms;
