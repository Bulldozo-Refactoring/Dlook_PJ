import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import instance from 'app/slices/Instance';

/**
 * @brief userSlice
 * @detail 함수, 리듀서 사용
 */
const UserSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    // rejected, fulfilled
    builder
      .addCase(postJoin.rejected, (_, { error }) => {
        console.error('회원가입 실패: ', error);
      })
      .addCase(postJoin.fulfilled, (_, { payload }) => {})
      .addCase(postMail.rejected, (_, { error }) => {
        console.error('이메일 인증 실패: ', error);
      })
      .addCase(postMail.fulfilled, (_, { payload }) => {});
  },
});

/**
 * @brief 회원가입 처리(post)
 * @param async (payload)
 * @return  response.data
 */
export const postJoin = createAsyncThunk('members/join', async (payload) => {
  const response = await instance.post('members/join', payload);
  return response.data;
});

export const postMail = createAsyncThunk('members/sendMail', async (payload) => {
  const response = await instance.post('members/sendMail', payload);
  return response.data;
});

export default UserSlice.reducer;
