// 알고리즘 - 문제추천 - 실력별
import RankLevel from 'app/components/Algorithms/RankLevel';
import { Table } from 'app/components/Table';
import instance from 'app/slices/Instance';
import { ResetButton, Top } from 'app/style/StyleAlgorithms';
import Cookies from 'js-cookie';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const Step = () => {
  const dispatch = useDispatch();
  const [problem, setProblem] = useState([]);
  const token = localStorage.getItem('accessToken');
  const getUserInfo = Cookies.get('userInfo');
  const cookieUserInfo = JSON.parse(getUserInfo);
  const tier = cookieUserInfo.tier;

  const geProblemLevel = useCallback(() => {
    instance
      .get(`/users/problem/level/${tier}`, {
        headers: {
          authorization: 'Bearer ' + token,
        },
      })
      .then(({ data }) => {
        setProblem(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [tier, token]);

  useEffect(() => {
    if (tier !== null) dispatch(geProblemLevel);
  }, [dispatch, geProblemLevel, tier]);

  const modifiedProblem = problem.map((list) => {
    const { problemId, titleKo } = list;
    return {
      no: problemId,
      title: titleKo,
      check: 'O',
    };
  });

  return (
    <div>
      <Top>
        <RankLevel tier={tier}></RankLevel>
        <ResetButton>새로고침</ResetButton>
      </Top>
      {Table(['문제 번호', '제목', '해결 여부'], modifiedProblem, `https://www.acmicpc.net/problem/`, 0)}
    </div>
  );
};

export default Step;
