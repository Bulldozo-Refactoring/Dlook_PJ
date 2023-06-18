// CookieSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import instance from './Instance';

export const login = createAsyncThunk('members/login', async (payload, thunkAPI) => {
  try {
    const response = await instance.post('/members/login', payload, { withCredentials: true });
    console.log('로그인 진입확인:', response);

    // 받아오는 값이 없음
    const { refreshToken, memberName } = response.headers;
    const { Authorization } = response.config.headers;

    console.log(response.headers);

    if (Authorization && refreshToken && memberName) {
      localStorage.setItem('accessToken', Authorization);
      Cookies.set('refreshToken', refreshToken, { path: '/' });
      Cookies.set('memberName', memberName, { path: '/' });
      Cookies.set('isLoggedIn', true, { path: '/' });

      thunkAPI.dispatch(setLoggedIn({ memberName }));
      thunkAPI.dispatch(setTokens({ Authorization, refreshToken }));

      return { Authorization, refreshToken, memberName };
    } else {
      console.error('로그인 실패: 응답 헤더에 필요한 정보가 없습니다.');
    }
  } catch (error) {
    console.error('로그인 실패:', error);
  }
});

export const logout = createAsyncThunk('members/logout', async (payload, thunkAPI) => {
  try {
    await instance.get('/members/logout', null, {
      withCredentials: true,
    });

    // 변경
    thunkAPI.dispatch(logoutAction());

    // 토큰 삭제
    localStorage.removeItem('accessToken');
    Cookies.remove('refreshToken', { path: '/' });
    // Cookies.remove('memberName', { path: '/' });
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
};

const CookieSlice = createSlice({
  name: 'cookie',
  initialState,
  reducers: {
    setLoggedIn: (state, action) => {
      state.memberName = action.payload.memberName;
    },
    setTokens: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    logoutAction: (state) => {
      state.memberName = null;
    },
  },
});

export const { setLoggedIn, setTokens, logoutAction } = CookieSlice.actions;

export default CookieSlice.reducer;
