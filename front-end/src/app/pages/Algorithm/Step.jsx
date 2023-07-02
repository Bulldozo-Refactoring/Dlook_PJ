// 알고리즘 - 문제추천 - 실력별
import RankLevel from 'app/components/Algorithm/RankLevel';
import { Table } from 'app/components/Table';
import instance from 'app/slices/Instance';
import { ResetButton, Top } from 'app/style/StyleAlgorithm';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

const Step = () => {
  const dispatch = useDispatch();
  const tier = useLocation().search.split('=')[1];
  const [selectTier, setSelectTier] = useState(1);
  const [problem, setProblem] = useState([]);
  const token = localStorage.getItem('accessToken');

  const geProblemLevel = useCallback(() => {
    instance
      .get(`/users/problem/level/${selectTier}`, { headers: { authorization: 'Bearer ' + token } })
      .then(({ data }) => setProblem(data))
      .catch((error) => console.error(error));
  }, [selectTier, token]);

  useEffect(() => {
    setSelectTier(tier);
    if (selectTier !== null) dispatch(geProblemLevel);
  }, [dispatch, geProblemLevel, selectTier, tier]);

  const modifiedProblem = problem.map((list) => {
    const { problemId, titleKo } = list;
    return { no: problemId, title: titleKo, check: 'O' };
  });

  return (
    <div>
      <Top>
        <RankLevel tier={selectTier}></RankLevel>
        <ResetButton onClick={geProblemLevel}>새로고침</ResetButton>
      </Top>
      {Table(['문제 번호', '제목', '해결 여부'], modifiedProblem, `https://www.acmicpc.net/problem/`, 0)}
    </div>
  );
};

export default Step;
