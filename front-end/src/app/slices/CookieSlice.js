// CookieSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import instance from './Instance';

export const login = createAsyncThunk('members/login', async (payload) => {
  try {
    const response = await instance.post('/members/login', payload, { withCredentials: true });
    console.log('로그인 진입확인:', response);

    const refreshToken = response.headers.refreshtoken;
    const memberName = response.headers.membername;
    const accessToken = response.headers.authorization.split('Bearer ')[1];
    console.log('로그인 진입 이후 받은 값 가져오기');
    console.log(refreshToken);
    console.log(memberName);
    console.log(accessToken);

    const expirationTime = 1; // 쿠키의 만료 시간(단위: 일)
    const currentDate = new Date();
    const expirationDate = new Date(currentDate.getTime() + expirationTime * 24 * 60 * 60 * 1000); // 현재 시간에 만료 시간을 더한 일자

    if (accessToken != null && refreshToken != null && memberName != null) {
      localStorage.setItem('accessToken', accessToken);
      Cookies.set('refreshToken', refreshToken, { path: '/', expires: expirationDate });
      Cookies.set('memberName', memberName, { expires: expirationDate });
      Cookies.set('isLoggedIn', true, { expires: expirationDate });

      return { accessToken, refreshToken, memberName };
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
    console.log('로그아웃 진입 이후');
    console.log(refreshtoken);
    console.log(membername);
    console.log(accessToken);

    localStorage.removeItem('accessToken');
    Cookies.remove('refreshToken', { path: '/' });
    Cookies.remove('memberName', { path: '/' });
    Cookies.set('isLoggedIn', false, { path: '/' });

    return null;
  } catch (error) {
    console.error('로그아웃 실패:', error);
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
