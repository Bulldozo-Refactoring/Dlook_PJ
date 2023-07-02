import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const initialState = {
  userInfo: '',
};

const BackUserSlice = createSlice({
  name: 'backUser',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = {
        tier: action.payload.tier,
        maxStreak: action.payload.maxStreak,
        rating: action.payload.rating,
        user: action.payload.user,
        solvedCount: action.payload.solvedCount,
      };
      const serializedUserInfo = JSON.stringify(state.userInfo);
      Cookies.set('userInfo', serializedUserInfo, { path: '/', expires: 1 });
    },
  },
});

export const { setUserInfo } = BackUserSlice.actions;
export default BackUserSlice.reducer;
