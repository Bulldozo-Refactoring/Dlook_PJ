import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';

function PrivateRoute() {
  const isLoggedIn = Cookies.get('isLoggedIn');
  const memberName = Cookies.get('memberName');
  const refreshToken = Cookies.get('refreshToken');

  const location = useLocation();

  if (isLoggedIn && memberName != null && memberName != '' && refreshToken != null && refreshToken != '') return <Outlet />;
  else return <Navigate to="/members/login" state={{ from: location }} />;
}

export default PrivateRoute;
