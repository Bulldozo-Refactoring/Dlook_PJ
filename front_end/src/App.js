import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "pages/Main";
import Board from "pages/Board";
import Algorithm from "pages/Algorithm";
import LogIn from "pages/auth/Login";
import SignUp from "pages/auth/SignUp";
import SignUpResult from "./pages/auth/SignUpResult";
import Layout from "components/common/Layout";
import Step from "components/Algorithm/Step";
import Child from "components/Algorithm/Child";
import Type from "components/Algorithm/Type";
import Wrong from "components/Algorithm/Wrong";
import Rank from "components/Algorithm/Rank";
// toolkit test
import { useSelector } from "react-redux";
import Test from "./Test";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <MainPage /> },
      { path: "login", element: <LogIn /> },
      { path: "signUp", element: <SignUp /> },
      { path: "signupresult", element: <SignUpResult /> },
      { path: "board", element: <Board /> },
      {
        path: "algorithms",
        element: <Algorithm />,
        children: [
          { path: "step", element: <Step /> },
          { path: "child", element: <Child /> },
          { path: "type", element: <Type /> },
          { path: "wrong", element: <Wrong /> },
          { path: "rank", element: <Rank /> },
        ],
      },
    ],
  },
]);

export default function App() {
  /* toolkit test(1)
  const test = useSelector((state) => {
    return state;
  });
  console.log(test);
  /**/

  return <RouterProvider router={router} />;
}
