import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import instance from './Instance';
import { setLoggedIn, logoutAction } from './CookieSlice';

export const join = createAsyncThunk('members/join', async (payload) => {
  try {
    const response = await instance.post('members/join', payload);
    console.log('회원가입 진입', response);

    return response.data;
  } catch (error) {
    console.error('회원가입 실패: ', error);
    throw error;
  }
});

const initialState = {
  isLoggedIn: false,
  memberName: null,
  certify: null,
  error: null,
  joinResult: null,
};

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(join.fulfilled, (state, action) => {
      if (action.payload === 'join success') {
        state.joinResult = '/members/joinresult';
      }
    });
    builder.addCase(join.rejected, (state, action) => {
      state.error = action.payload ? action.payload : action.error.message;
    });
    builder.addCase(setLoggedIn, (state, action) => {
      state.isLoggedIn = true;
      state.memberName = action.payload.memberName;
    });
    builder.addCase(logoutAction, (state) => {
      state.isLoggedIn = false;
      state.memberName = null;
    });
  },
});

export const { setJoinResult } = UserSlice.actions;

export default UserSlice.reducer;
