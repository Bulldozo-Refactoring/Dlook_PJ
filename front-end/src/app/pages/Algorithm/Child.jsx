// 알고리즘 - 문제추천 - 알고리즘
import RankLevel from 'app/components/Algorithm/RankLevel';
import { Table } from 'app/components/Table';
import instance from 'app/slices/Instance';
import { Right, StyleResetButton, StyleSelect, Top } from 'app/style/StyleAlgorithm';
import Cookies from 'js-cookie';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const category = [
  { id: 1, title: 'math' },
  { id: 2, title: 'greedy' },
  { id: 3, title: 'dp' },
  { id: 4, title: 'graphs' },
  { id: 5, title: 'implementation' },
  { id: 6, title: 'backtracking' },
];

const SelectBox = (props) => {
  const handleChange = (e) => {
    props.setSelectedCategory(e.target.value);
    props.geProblemLevel();
  };
  return (
    <StyleSelect onChange={handleChange}>
      {props.category.map((category) => (
        <option key={category.id} value={category.id} defaultValue={props.defaultValue === category.id}>
          {category.title}
        </option>
      ))}
    </StyleSelect>
  );
};

const Child = () => {
  const dispatch = useDispatch();
  const [problem, setProblem] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(category[3]);
  const token = localStorage.getItem('accessToken');
  const getUserInfo = Cookies.get('userInfo');
  const cookieUserInfo = JSON.parse(getUserInfo);
  const tier = cookieUserInfo?.tier;

  const geProblemLevel = useCallback(() => {
    instance
      .get(`/users/problem/algorithm/${selectedCategory.title}`, { headers: { authorization: 'Bearer ' + token } })
      .then(({ data }) => setProblem(data))
      .catch((error) => console.error(error));
  }, [selectedCategory.title, token]);

  useEffect(() => {
    if (tier !== null) dispatch(geProblemLevel);
  }, [dispatch, geProblemLevel, tier, selectedCategory]);

  const modifiedProblem = problem.map((list) => {
    const { problemId, titleKo } = list;
    return { no: problemId, title: titleKo, check: 'O' };
  });

  return (
    <div>
      <Top>
        <RankLevel tier={tier}></RankLevel>
        <Right>
          <SelectBox category={category} defaultValue="math" setSelectedCategory={setSelectedCategory} geProblemLevel={geProblemLevel}></SelectBox>
          <StyleResetButton onClick={geProblemLevel}>새로고침</StyleResetButton>
        </Right>
      </Top>
      {Table(['문제 번호', '제목', '해결 여부'], modifiedProblem, `https://www.acmicpc.net/problem/`, 0)}
    </div>
  );
};

export default Child;
