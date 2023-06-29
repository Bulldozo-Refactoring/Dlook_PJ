// 알고리즘 - 랭킹분석
import { setMemberName } from 'app/store';
import { AlgorithmsRank, Img, LinkStyle, Rating, RatingBefore, RatingContent, RatingLi, TypeH2, Value } from 'app/style/StyleAlgorithms';

const Rank = () => {
  const userName = setMemberName();
  return (
    <AlgorithmsRank>
      <div style={{ marginBottom: '6rem' }}>
        <TypeH2>기간별 진행도</TypeH2>
        <Img src={`https://ghchart.rshah.org/219138/${userName}`} alt="백준 잔디" />
        <LinkStyle onClick={() => (document.location.href = 'https://github.com/Bulldozo')}>깃허브 바로가기</LinkStyle>
      </div>
      <div style={{ width: '40%', margin: '0 auto' }}>
        <TypeH2>Rating</TypeH2>
        <Rating>
          <RatingBefore>Rank</RatingBefore>
          <RatingContent style={{ borderBottom: '1px solid #ccc' }}>
            <RatingLi style={{ borderRight: '1px solid #ccc' }}>
              EXP<Value>2500</Value>
            </RatingLi>
            <RatingLi>
              Rating<Value>2500</Value>
            </RatingLi>
          </RatingContent>
          <RatingContent>
            <RatingLi style={{ borderRight: '1px solid #ccc' }}>
              Class<Value>2500</Value>
            </RatingLi>
            <RatingLi>
              푼 문제<Value>2500</Value>
            </RatingLi>
          </RatingContent>
        </Rating>
      </div>
    </AlgorithmsRank>
  );
};

export default Rank;
