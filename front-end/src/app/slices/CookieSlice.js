import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import instance from './Instance';

export const login = createAsyncThunk('members/login', async (payload) => {
  try {
    const response = await instance.post('/members/login', payload, { withCredentials: true });

    const { authorization, refreshtoken, membername } = response.headers;

    if (authorization != null && refreshtoken != null && membername != null) {
      const expirationTime = 1;
      const currentDate = new Date();
      const expirationDate = new Date(currentDate.getTime() + expirationTime * 24 * 60 * 60 * 1000);

      localStorage.setItem('accessToken', authorization.split('Bearer ')[1]);
      Cookies.set('refreshToken', refreshtoken, { path: '/', expires: expirationDate });
      Cookies.set('memberName', membername, { path: '/', expires: expirationDate });
      Cookies.set('isLoggedIn', true, { path: '/', expires: expirationDate });

      return { accessToken: authorization, refreshToken: refreshtoken, memberName: membername };
    } else {
      console.error('로그인 실패: 응답 헤더에 필요한 정보가 없습니다.');
      window.alert('로그인 실패');
    }
  } catch (error) {
    console.error('로그인 실패:', error);
    window.alert('로그인 실패');
  }
});

export const logout = createAsyncThunk('members/logout', async () => {
  try {
    await instance.get('/members/logout', null, { withCredentials: true });

    localStorage.removeItem('accessToken');
    Cookies.remove('refreshToken', { path: '/' });
    Cookies.remove('memberName', { path: '/' });
    Cookies.remove('isLoggedIn', false, { path: '/' });

    return null;
  } catch (error) {
    console.error('로그아웃 실패:', error);
    window.alert('로그아웃 실패');
  }
});

const initialState = {
  isLoggedIn: false,
  accessToken: localStorage.getItem('accessToken') || null,
  refreshToken: Cookies.get('refreshToken') || null,
  certify: null,
  memberName: Cookies.get('memberName') || null,
  loginResult: null,
};

const CookieSlice = createSlice({
  name: 'cookie',
  initialState,
  reducers: {},
});

export default CookieSlice.reducer;
