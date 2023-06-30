import Cookies from 'js-cookie';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import instance from 'app/slices/Instance';

const initialState = {
  userInfo: '',
};

// export const getUserInfo = createAsyncThunk('users/{memberName}', async (memberName) => {
//   await instance.get(`/users/${memberName}`, {});
// });

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
