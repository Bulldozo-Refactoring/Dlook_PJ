import AlMenu from 'app/components/Algorithm/AlMenu';
import { StyleTitle } from 'app/style/StyleAlgorithm';
import { Outlet, useLocation } from 'react-router-dom';
import { styled } from 'styled-components';

const Algorithm = () => {
  const { pathname } = useLocation();
  const titles = [
    { path: '/algorithm/level', title: '실력별 추천' },
    { path: '/algorithm/step', title: '실력별 추천' },
    { path: '/algorithm/child', title: '알고리즘 추천' },
    { path: '/algorithm/type', title: '유형별 분석' },
    { path: '/algorithm/wrong', title: '오답 유형' },
    { path: '/algorithm/rank', title: '랭킹 분석' },
  ];
  const titleObj = titles.find((item) => item.path === pathname);
  const title = titleObj ? titleObj.title : '';

  return pathname === '/algorithm/level' ? (
    <Outlet style={{ width: (theme) => theme.common.col12 }} />
  ) : (
    <>
      <AlContainer>
        <StyleTitle>{title}</StyleTitle>
        <div>
          <AlMenu />
          <Outlet style={{ width: (theme) => theme.common.col9 }} />
        </div>
      </AlContainer>
    </>
  );
};

const AlContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 40px;
  > div {
    display: flex;
  }
  > div > div:last-child {
    width: ${({ theme }) => theme.common.col9};
    padding-left: 2.5rem;
  }
`;
export default Algorithm;
