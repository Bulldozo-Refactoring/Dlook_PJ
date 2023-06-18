// CookieSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import instance from './Instance';

export const login = createAsyncThunk('members/login', async (payload) => {
  try {
    const response = await instance.post('/members/login', payload, { withCredentials: true });
    console.log('로그인 진입확인:', response);

    const { refreshtoken, membername } = response.headers;
    const accessToken = response.headers.authorization.split('Bearer ')[1];

    // cookie -> 시간 세팅 필요 1일..?
    if (accessToken && refreshtoken && membername) {
      localStorage.setItem('accessToken', accessToken);
      Cookies.set('refreshToken', refreshtoken, { path: '/' });
      Cookies.set('memberName', membername);
      Cookies.set('isLoggedIn', true);

      return { accessToken, refreshtoken, membername };
    } else {
      console.error('로그인 실패: 응답 헤더에 필요한 정보가 없습니다.');
    }
  } catch (error) {
    console.error('로그인 실패:', error);
  }
});

export const logout = createAsyncThunk('members/logout', async () => {
  try {
    const response = await instance.get('/members/logout', null, { withCredentials: true });
    console.log('로그아웃 진입확인:', response);

    const { refreshtoken, membername } = response.headers;
    const accessToken = response.headers.authorization.split('Bearer ')[1];

    // 변경
    if (accessToken && refreshtoken && membername) {
      localStorage.removeItem('accessToken');
      Cookies.remove('refreshtoken', { path: '/' });
      Cookies.remove('membername', { path: '/' });
      Cookies.set('isLoggedIn', false, { path: '/' });

      return null;
    }
  } catch (error) {
    console.error('로그아웃 실패:', error);
  }
});

const initialState = {
  isLoggedIn: false,
  accessToken: localStorage.getItem('accessToken') || null,
  refreshToken: Cookies.get('refreshtoken') || null,
  certify: null,
  memberName: Cookies.get('membername') || null,
  loginResult: null,
};

const CookieSlice = createSlice({
  name: 'cookie',
  initialState,
  reducers: {},
});

export default CookieSlice.reducer;
