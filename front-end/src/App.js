import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PrivateRoute from "app/components/common/PrivateRoute";
// page import
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
import Join from "app/pages/auth/Join";
import JoinResult from "app/pages/auth/JoinResult";
import MyCertify from "app/pages/auth/MyCertify";
import MyBoard from "app/pages/auth/MyBoard";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "", element: <MainPage />, method: "get" },
        {
          // board - 비회원
          path: "board",
          children: [{ path: "", element: <Board />, method: "get" }],
        },
        {
          // board - 회원
          path: "board",
          element: <PrivateRoute />,
          children: [{ path: "", element: "", method: "get" }],
        },
        {
          // garbage -- 비회원
          path: "garbage",
          children: [{ path: "", element: <Garbage />, method: "get" }],
        },
        {
          // garbage --회원
          path: "garbage",
          element: <PrivateRoute />,
          children: [{ path: "", element: <Garbage />, method: "get" }],
        },
        {
          // notice -- 관리자 x
          path: "notice",
          children: [{ path: "", element: <Notice />, method: "get" }],
        },
        {
          // member - 비회원
          path: "member",
          children: [
            { path: "join", element: <Join />, method: "post" },
            { path: "login", element: <Login />, method: "Post" },
            { path: "joinresult", element: <JoinResult /> },
          ],
        },
        {
          // member - 회원
          path: "member",
          element: <PrivateRoute />,
          children: [{ path: "logout", element: "" }],
        },
        {
          // mypage -- 회원
          path: "mypages",
          element: <PrivateRoute />,
          children: [
            { path: "certify", element: <MyCertify /> },
            { path: "board", element: <MyBoard /> },
          ],
        },
        {
          // 알고리즘 - 회원
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
