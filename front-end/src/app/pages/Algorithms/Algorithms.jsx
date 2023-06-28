import React from 'react';
import { Outlet } from 'react-router-dom';
import AlgorithmsMenu from 'app/components/Algorithms/Menu';
import { styled } from 'styled-components';

const Algorithms = () => {
  return (
    <AlContainer>
      <AlgorithmsMenu />
      <Outlet style={{ width: (theme) => theme.common.col9 }} />
    </AlContainer>
  );
};
const AlContainer = styled.div`
  display: flex;
  > div:last-child {
    width: ${({ theme }) => theme.common.col9};
    padding: 4.4rem 1.3rem 0 3.3rem;
  }
`;
export default Algorithms;
