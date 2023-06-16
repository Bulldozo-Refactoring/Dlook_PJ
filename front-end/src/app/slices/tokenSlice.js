import { createSlice, createAction } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import axios from './axuisMock';
// import axios from 'axios';

const initialState = {
  isLoggedIn: false,
  accessToken: null,
  refreshToken: Cookies.get('refreshToken') || null,
  certify: null,
  memberName: null,
};

export const login = (payload) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:8080/members/login', payload, { withCredentials: true });
    console.log('로그인 진입확인');
    const { accessToken, refreshToken, memberName } = response.data;
    localStorage.setItem('accessToken', accessToken);
    Cookies.set('refreshToken', refreshToken, { path: '/' });
    Cookies.set('memberName', memberName, { path: '/' });

    dispatch(setLoggedIn({ memberName }));

    dispatch(setTokens({ accessToken, refreshToken }));

    return { accessToken, refreshToken, memberName };
  } catch (error) {
    console.error('로그인 실패:', error);
    throw error;
  }
};

export const logout = () => async (dispatch) => {
  try {
    await axios.get('http://localhost:8080/members/logout', null, {
      withCredentials: true,
    });

    // localStorage.removeItem('accessToken');
    // Cookies.remove('refreshToken', { path: '/' });

    dispatch(logoutAction());

    return null;
  } catch (error) {
    console.error('로그아웃 실패:', error);
    throw error;
  }
};

const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setLoggedIn: (state, action) => {
      state.isLoggedIn = true;
      state.memberName = action.payload.memberName;
    },
    setTokens: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    logoutAction: (state) => {
      state.isLoggedIn = false;
      // state.accessToken = null;
      // state.refreshToken = null;
      state.memberName = null;
    },
  },
});

export const { setLoggedIn, setTokens, logoutAction } = tokenSlice.actions;

export default tokenSlice.reducer;
