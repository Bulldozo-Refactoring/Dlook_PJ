import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PrivateRoute from "app/components/common/PrivateRoute";

import Layout from "app/components/common/Layout";
import MainPage from "app/pages/Main";
import Board from "app/pages/Board";
import Notice from "app/pages/Notice";
import Garbage from "app/pages/Garbage";
import Algorithms from "app/pages/Algorithms";
import Step from "app/components/Algorithms/Step";
import Child from "app/components/Algorithms/Child";
import Type from "app/components/Algorithms/Type";
import Wrong from "app/components/Algorithms/Wrong";
import Rank from "app/components/Algorithms/Rank";
import Login from "app/pages/auth/Login";
import SignUp from "app/pages/auth/SignUp";
import SignUpResult from "app/pages/auth/SignUpResult";
import Profile from "app/pages/auth/Profile";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "", element: <MainPage /> },
        { path: "board", element: <Board /> },
        { path: "garbage", element: <Garbage /> },
        { path: "notice", element: <Notice /> },
        {
          path: "member",
          children: [
            { path: "login", element: <Login /> },
            { path: "signUp", element: <SignUp /> },
            { path: "signupresult", element: <SignUpResult /> },
          ],
        },
        {
          path: "member",
          element: <PrivateRoute />,
          children: [{ path: "profile", element: <Profile /> }],
        },
        {
          path: "algorithms",
          element: <PrivateRoute />,
          children: [
            {
              path: "",
              element: <Algorithms />,
              children: [
                { path: "step", element: <Step />, isAuth: true },
                { path: "child", element: <Child /> },
                { path: "type", element: <Type /> },
                { path: "wrong", element: <Wrong /> },
                { path: "rank", element: <Rank /> },
              ],
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
