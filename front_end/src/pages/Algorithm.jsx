import React from "react";
import { Outlet } from "react-router-dom";
import AlgorithmMenu from "components/Algorithm/Menu";

const Algorithm = () => {
  return (
    <div id="Algorithms" className="container_inner">
      <AlgorithmMenu />
      <Outlet />
    </div>
  );
};

export default Algorithm;
