import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
// import { login } from "app/slices/auth";

function PrivateRoute() {
  // 로그인 여부 확인
  const isLogin = true;

  //  현재 URL 확인
  const location = useLocation();

  if (!isLogin) {
    return <Navigate to="/member/login" state={{ from: location }} />; // from에 현재 URL을 저장하여 리다렉트에 사용
  }

  return <Outlet />; //로그인 상태라면 원래 컴포넌트로 렌더링
}

export default PrivateRoute;
