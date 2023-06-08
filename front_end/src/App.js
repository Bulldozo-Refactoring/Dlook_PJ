import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import MainPage from './components/page/Main';
import Board from './components/page/Board';
import LogIn from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import SignUpResult from './components/auth/SignUpResult';
import Algorithms from './components/page/Algorithms';
import Step from './components/Layout/Algorithms/Step';
import Child from './components/Layout/Algorithms/Child';
import Type from './components/Layout/Algorithms/Type';
import Wrong from './components/Layout/Algorithms/Wrong';
import Rank from './components/Layout/Algorithms/Rank';


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