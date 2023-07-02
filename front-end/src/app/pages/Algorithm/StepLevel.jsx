// 알고리즘 - 문제추천 - 실력별 레벨 선택
import { LevelBack, LevelBackLi, LevelBackUl, LevelBtn, LevelRankBtn, Star, StarsWrapper } from 'app/style/StyleAlgorithm';
import { useState } from 'react';

const StepLevel = () => {
  const [activeBtn, setActiveBtn] = useState(null);
  const [activeLevel, setActiveLevel] = useState(null);
  const tiers = [
    { tier: 1, level: 'Bronze', rank: ['V', 'IV', 'III', 'II', 'I'] },
    { tier: 6, level: 'Silver', rank: ['V', 'IV', 'III', 'II', 'I'] },
    { tier: 11, level: 'Gold', rank: ['V', 'IV', 'III', 'II', 'I'] },
    { tier: 16, level: 'Platinum', rank: ['V', 'IV', 'III', 'II', 'I'] },
    { tier: 21, level: 'Diamond', rank: ['V', 'IV', 'III', 'II', 'I'] },
    { tier: 26, level: 'Ruby', rank: ['V', 'IV', 'III', 'II', 'I'] },
  ];

  const toggleBtn = (tier) => setActiveBtn(tier === activeBtn ? null : tier);

  const toggleLevel = (tier) => {
    setActiveLevel(tier.level === activeLevel ? null : tier.level);
    toggleBtn(tier.tier);
  };

  const generateRandomStars = () => {
    const stars = [];
    const numStars = 100;

    for (let i = 0; i < numStars; i++) {
      const size = Math.floor(Math.random() * 5) + 1;
      const left = Math.random() * 100;
      const top = Math.random() * 100;

      stars.push({ size, left, top });
    }

    return stars;
  };

  const stars = generateRandomStars();

  return (
    <>
      <LevelBack>
        <LevelBackUl>
          {tiers.map((tier) => (
            <LevelBackLi key={tier.tier}>
              {activeBtn !== tier.tier ? <LevelBtn onClick={() => toggleLevel(tier)}>{tier.level}</LevelBtn> : ''}
              {activeLevel === tier.level ? (
                <ul>
                  {tier.rank.map((rank) => (
                    <li key={`${tier.tier}-${rank}`}>
                      <LevelRankBtn to={`/algorithm/step?tier=${tier.tier + tier.rank.indexOf(rank)}`}>
                        {tier.level} {rank}
                      </LevelRankBtn>
                    </li>
                  ))}
                </ul>
              ) : (
                ''
              )}
            </LevelBackLi>
          ))}
        </LevelBackUl>
        <StarsWrapper>
          {stars.map((star, index) => (
            <>
              <Star key={index} size={star.size} left={star.left} top={star.top} />
            </>
          ))}
        </StarsWrapper>
      </LevelBack>
    </>
  );
};

export default StepLevel;
