import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PrivateRoute from 'app/components/common/PrivateRoute';
// page import
import Layout from 'app/components/common/Layout';
import Error from 'app/pages/Error';
import MainPage from 'app/pages/Main';
import Notice from 'app/pages/Notice';
import Garbage from 'app/pages/Garbage';
import GarbageWrite from 'app/pages/GarbageWrite';
import Algorithms from 'app/pages/Algorithms/Algorithms';
import Step from 'app/pages/Algorithms/Step';
import Child from 'app/pages/Algorithms/Child';
import Type from 'app/pages/Algorithms/Type';
import Wrong from 'app/pages/Algorithms/Wrong';
import Rank from 'app/pages/Algorithms/Rank';
import Login from 'app/pages/auth/Login';
import Join from 'app/pages/auth/Join';
import JoinResult from 'app/pages/auth/JoinResult';
import ForgotPassword from 'app/pages/auth/ForgotPassword';
import MyCertify from 'app/pages/auth/MyCertify';
import MyBoard from 'app/pages/auth/MyBoard';
import BoardList from 'app/pages/Board/BoardList';
import BoardWrite from 'app/pages/Board/BoardWrite';
import BoardDetail from 'app/pages/Board/BoardDetail';
import BoardModify from 'app/pages/Board/BoardModify';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <Error />,
      children: [
        { path: '', element: <MainPage /> },
        {
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
          path: 'members',
          errorElement: <Error />,
          element: <PrivateRoute />,
          children: [
            { path: 'reissue' },
            { path: 'logout' },
            { path: ':memberSeq' },
            {
              path: 'auth',
              element: 'auth 확인',
              children: [{ path: 'login', element: 'auth 로그인' }],
            },
          ],
        },
        {
          path: 'boards',
          errorElement: <Error />,
          children: [
            { path: 'list?page=:page', element: <BoardList /> },
            { path: ':boardCtg', element: <BoardList /> },
            { path: 'detail/:boardNo', element: <BoardDetail /> },
          ],
        },
        {
          path: 'boards',
          element: <PrivateRoute />,
          errorElement: <Error />,
          children: [
            { path: 'write', element: <BoardWrite /> },
            { path: 'update/:boardNo', element: <BoardModify /> },
          ],
        },
        {
          path: 'garbage',
          errorElement: <Error />,
          children: [{ path: '', element: <Garbage /> }],
        },
        {
          path: 'garbage',
          element: <PrivateRoute />,
          errorElement: <Error />,
          children: [{ path: 'write', element: <GarbageWrite /> }],
        },
        {
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
          path: 'mypages',
          element: <PrivateRoute />,
          errorElement: <Error />,
          children: [
            { path: 'certify', element: <MyCertify /> },
            { path: 'boards', element: <MyBoard /> },
            { path: 'replys', element: '헝' },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
