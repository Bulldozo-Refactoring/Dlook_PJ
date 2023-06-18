import { configureStore } from '@reduxjs/toolkit';
import userReducer from 'app/slices/UserSlice';
import cookieReducer from 'app/slices/CookieSlice';

const reducer = {
  user: userReducer,
  cookie: cookieReducer,
};

export const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;
