import { styled } from 'styled-components';

const StyleDiv = styled.div`
  position: relative;
`;
const Level = styled.ul`
  position: relative;
  width: 85px;
  height: 85px;
  li:first-child {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-color: #ff0000 transparent;
    transform: rotate(36deg);
  }
  li:last-child {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #424874, #ffcefe);
    clip-path: polygon(50% 0, 100% 38%, 82% 100%, 18% 100%, 0 38%);
  }
`;
const StyleSpan = styled.span`
  position: absolute;
  top: 26px;
  width: ${({ theme }) => theme.common.col12};
  text-align: center;
  font-size: ${({ theme }) => theme.common.xl};
  font-weight: 700;
  color: ${({ theme }) => theme.light.b01};
`;

const RankLevel = (level) => {
  const userLevel = level.level;
  return (
    <>
      <StyleDiv>
        <Level>
          <li></li>
          <li></li>
        </Level>
        <StyleSpan key={userLevel}>{userLevel}</StyleSpan>
      </StyleDiv>
    </>
  );
};

export default RankLevel;
