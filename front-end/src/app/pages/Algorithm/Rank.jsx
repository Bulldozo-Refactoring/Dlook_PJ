// 알고리즘 - 랭킹분석
import RankLevel from 'app/components/Algorithm/RankLevel';
import { setMemberName } from 'app/store';
import { Img, RatingContent, StyledSubTitle } from 'app/style/StyleAlgorithm';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

const Rank = () => {
  const userInfo = Cookies.get('userInfo');
  const [info, setInfo] = useState([]);
  const [usersName, setUsersName] = useState(null);
  const getUserInfo = Cookies.get('userInfo');
  const cookieUserInfo = JSON.parse(getUserInfo);
  const tier = cookieUserInfo?.tier;

  useEffect(() => {
    setUsersName(setMemberName());
    if (userInfo) {
      const cookieUserInfo = JSON.parse(userInfo);
      setInfo(cookieUserInfo);
    }
  }, [userInfo, usersName]);

  return (
    <div>
      <section>
        <RankLevel tier={tier}></RankLevel>
        <RatingContent>
          <li>
            MaxStreak<span>{info.maxStreak}</span>
          </li>
          <li>
            Rating<span>{info.rating}</span>
          </li>
          <li>
            Class<span>{info.tier}</span>
          </li>
          <li>
            푼 문제<span>{info.solvedCount}</span>
          </li>
        </RatingContent>
      </section>
      <section>
        <StyledSubTitle>기간별 진행도</StyledSubTitle>
        <Img src={`https://ghchart.rshah.org/219138/${info.user}`} alt="백준 잔디" />
        {/* <LinkStyle onClick={() => (document.location.href = 'https://github.com/Bulldozo')}>깃허브 바로가기</LinkStyle> */}
      </section>
    </div>
  );
};

export default Rank;
