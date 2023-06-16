import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PrivateRoute() {
  // 로그인 여부 확인
  const isLoggedIn = useSelector((state) => state.members.isLoggedIn);

  //  현재 URL 확인
  const location = useLocation();

  if (!isLoggedIn) {
    // from에 현재 URL을 저장하여 리다렉트에 사용
    return <Navigate to="/members/login" state={{ from: location }} />;
  }

  return <Outlet />; //로그인 상태라면 원래 컴포넌트로 렌더링
}

export default PrivateRoute;
