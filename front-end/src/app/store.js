import { configureStore } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import userReducer from 'app/slices/UserSlice';
import cookieReducer from 'app/slices/CookieSlice';
import BoardReducer from 'app/slices/BoardSlice';

const reducer = {
  user: userReducer,
  cookie: cookieReducer,
  board: BoardReducer,
};

export const store = configureStore({
  reducer: reducer,
  devTools: true,
});

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
