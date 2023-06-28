import { configureStore } from '@reduxjs/toolkit';
import BoardReducer from 'app/slices/BoardSlice';
import cookieReducer from 'app/slices/CookieSlice';
import userReducer from 'app/slices/UserSlice';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';

const reducer = {
  user: userReducer,
  cookie: cookieReducer,
  board: BoardReducer,
};

export const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export const setMemberName = () => {
  const token = localStorage.getItem('accessToken');
  let memberName = null;
  if (token !== null && token !== undefined) memberName = jwt_decode('Bearer ' + token).sub;
  return memberName;
};

export const checkAuthentication = () => {
  const isLoggedIn = Cookies.get('isLoggedIn');
  const memberName = Cookies.get('memberName');
  const refreshToken = Cookies.get('refreshToken');

  return (
    isLoggedIn !== null &&
    memberName !== null &&
    memberName !== '' &&
    memberName !== undefined &&
    refreshToken !== null &&
    refreshToken !== '' &&
    refreshToken !== undefined
  );
};

export default store;
