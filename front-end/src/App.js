import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PrivateRoute from 'app/components/common/PrivateRoute';
// page import
import Layout from 'app/components/common/Layout';
import Error from 'app/pages/Error';
import MainPage from 'app/pages/Main';
import Board from 'app/pages/Board';
import Notice from 'app/pages/Notice';
import Garbage from 'app/pages/Garbage';
import Algorithms from 'app/pages/Algorithms';
import Step from 'app/components/Algorithms/Step';
import Child from 'app/components/Algorithms/Child';
import Type from 'app/components/Algorithms/Type';
import Wrong from 'app/components/Algorithms/Wrong';
import Rank from 'app/components/Algorithms/Rank';
import Login from 'app/pages/auth/Login';
import Join from 'app/pages/auth/Join';
import JoinResult from 'app/pages/auth/JoinResult';
import ForgotPassword from 'app/pages/auth/ForgotPassword';
import MyCertify from 'app/pages/auth/MyCertify';
import MyBoard from 'app/pages/auth/MyBoard';
import BoardWrite from 'app/pages/BoardWrite';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <Error />,
      children: [
        { path: '', element: <MainPage /> },
        {
          // members - 비회원
          path: 'members',
          errorElement: <Error />,
          children: [
            { path: 'join', element: <Join /> },
            { path: 'joinresult', element: <JoinResult /> },
            { path: 'login', element: <Login /> },
            {
              path: 'password',
              element: <ForgotPassword />,
              children: [{ path: ':/memberSeq' }],
            },
            { path: 'email' },
          ],
        },
        {
          // members - 회원
          path: 'members',
          errorElement: <Error />,
          element: <PrivateRoute />,
          children: [
            { path: 'reissue' },
            { path: 'logout' },
            { path: ':memberSeq' },
            {
              // 관리자는 로그인 상태에서 url 접근 가능하게..?
              path: 'auth',
              element: 'auth 확인',
              children: [{ path: 'login', element: 'auth 로그인' }],
            },
          ],
        },
        {
          // board - 비회원
          path: 'board',
          errorElement: <Error />,
          children: [
            { path: '', element: <Board /> },
            { path: 'detail/:boardNo', element: '' },
          ],
        },
        {
          // board - 회원
          path: 'board',
          element: <PrivateRoute />,
          errorElement: <Error />,
          children: [
            { path: 'write', element: <BoardWrite /> },
            { path: ':boardNo', element: <BoardWrite /> },
          ],
        },
        {
          // garbage - 비회원
          path: 'garbage',
          errorElement: <Error />,
          children: [{ path: '', element: <Garbage /> }],
        },
        {
          // garbage - 회원
          path: 'garbage',
          element: <PrivateRoute />,
          errorElement: <Error />,
          children: [{ path: 'write', element: '쓰레기통 작성' }],
        },
        {
          // notice - 관리자 x
          path: 'notice',
          errorElement: <Error />,
          children: [
            { path: '', element: <Notice /> },
            { path: 'detail', element: '글 상세' },
          ],
        },
        { path: 'manual', element: '이용방법' },
        { path: 'rule', element: '서비스 정책' },
        {
          // 알고리즘 - 회원
          path: 'algorithms',
          element: <PrivateRoute />,
          errorElement: <Error />,
          children: [
            {
              path: '',
              element: <Algorithms />,
              children: [
                { path: 'step', element: <Step />, ismembers: true },
                { path: 'child', element: <Child /> },
                { path: 'type', element: <Type /> },
                { path: 'wrong', element: <Wrong /> },
                { path: 'rank', element: <Rank /> },
              ],
            },
          ],
        },
        {
          // mypage -- 회원
          path: 'mypages',
          element: <PrivateRoute />,
          errorElement: <Error />,
          children: [
            { path: 'certify', element: <MyCertify /> },
            { path: 'board', element: <MyBoard /> },
            { path: 'replys', element: '헝' },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
