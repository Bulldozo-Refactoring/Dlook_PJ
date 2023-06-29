import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import instance from 'app/slices/Instance';

/**
 * @brief 회원가입 처리(post)
 * @param async (payload)
 * @return  response.data
 */
export const postJoin = createAsyncThunk('members/join', async (payload) => {
  try {
    const response = await instance.post('members/join', payload);
    return response.data;
  } catch (error) {
    console.error('회원가입 실패: ', error);
    throw error;
  }
});

/**
 * @brief userSlice
 * @detail 함수, 리듀서 사용
 */
const UserSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {},
});

export default UserSlice.reducer;
