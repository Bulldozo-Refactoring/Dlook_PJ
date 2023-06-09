import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from 'pages/Main';
import Board from 'pages/Board';
import Algorithms from 'pages/Algorithms';

import Layout from 'components/common/Layout';
import LogIn from 'pages/auth/Login';
import SignUp from 'pages/auth/SignUp';
import SignUpResult from './pages/auth/SignUpResult';
import Step from 'components/Algorithms/Step';
import Child from 'components/Algorithms/Child';
import Type from 'components/Algorithms/Type';
import Wrong from 'components/Algorithms/Wrong';
import Rank from 'components/Algorithms/Rank';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <MainPage /> },
      { path: 'login', element: <LogIn /> },
      { path: 'signUp', element: <SignUp /> },
      { path: 'signupresult', element: <SignUpResult /> },
      { path: 'board', element: <Board /> },
      {
        path: 'algorithms',
        element: <Algorithms />,
        children: [
          { path: 'step', element: <Step /> },
          { path: 'child', element: <Child /> },
          { path: 'type', element: <Type /> },
          { path: 'wrong', element: <Wrong /> },
          { path: 'rank', element: <Rank /> },
        ],
      },
    ],
  },
  
]);

export default function App() {
  return <RouterProvider router={router} />;
};