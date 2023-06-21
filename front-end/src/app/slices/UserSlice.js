import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import instance from './Instance';

export const join = createAsyncThunk('members/join', async (payload) => {
  try {
    const response = await instance.post('members/join', payload);
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
  extraReducers: (builder) => {},
});

export const { setJoinResult } = UserSlice.actions;

export default UserSlice.reducer;
