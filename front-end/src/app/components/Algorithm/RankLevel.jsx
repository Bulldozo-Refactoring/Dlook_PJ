import { Level, RankLevelDiv, StyleSpan } from 'app/style/StyleAlgorithm';

const RankLevel = (level) => {
  const userLevel = level.tier;
  return (
    <>
      <RankLevelDiv>
        <Level>
          <li></li>
          <li></li>
        </Level>
        <StyleSpan key={userLevel}>{userLevel}</StyleSpan>
      </RankLevelDiv>
    </>
  );
};

export default RankLevel;
