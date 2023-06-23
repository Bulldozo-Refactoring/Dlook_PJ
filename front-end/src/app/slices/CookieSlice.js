import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
import instance from 'app/slices/Instance';

/**
 * @brief 로그인 처리 함수(post)
 * @detail  header에서 token 꺼내서 localStorage/Cookie에 token저장
 * @param async (payload)
 * @return  accessToken: authorization, refreshToken: refreshtoken, memberName: memberName }
 */
export const postLogin = createAsyncThunk('members/login', async (payload) => {
  const response = await instance.post('/members/login', payload, { withCredentials: true });
  const { authorization, refreshtoken } = response.headers;
  const memberName = jwt_decode(authorization.split('Bearer ')[1]).sub;

  if (authorization != null && refreshtoken != null && memberName != null) {
    const expirationTime = 1;
    const expirationDate = new Date(Date.now() + expirationTime * 24 * 60 * 60 * 1000);

    localStorage.setItem('accessToken', authorization.split('Bearer ')[1]);
    Cookies.set('refreshToken', refreshtoken, { path: '/', expires: expirationDate });
    Cookies.set('memberName', memberName, { path: '/', expires: expirationDate });
    Cookies.set('isLoggedIn', true, { path: '/', expires: expirationDate });

    return { accessToken: authorization, refreshToken: refreshtoken };
  }
});

/**
 * @brief 로그아웃 처리 함수(get)
 * @detail localStorage/Cookie에 있는 정보 삭제
 * @param async ()
 * @return  null
 */
export const getLogout = createAsyncThunk('members/logout', async () => {
  try {
    await instance.get('/members/logout', null, { withCredentials: true });

    localStorage.removeItem('accessToken');
    Cookies.remove('refreshToken', { path: '/' });
    Cookies.remove('memberName', { path: '/' });
    Cookies.remove('isLoggedIn', false, { path: '/' });

    console.log('로그아웃 성공');
    return null;
  } catch (error) {
    console.error('로그아웃 실패:', error);
  }
});

/**
 * @brief cookieSlice
 * @detail 함수, 리듀서 사용
 * @return loading, isLoggenIn
 */
const CookieSlice = createSlice({
  name: 'cookie',
  initialState: {
    memberName: null,
  },
  reducers: {},
  extraReducers: {
    [postLogin.fulfilled]: (state, action) => {
      const token = action.payload.accessToken.split('Bearer ')[1];
      state.memberName = jwt_decode(token).sub;
    },
  },
});

export const { setCookieTime, setLogin, setLogout } = CookieSlice.actions;
export default CookieSlice.reducer;
