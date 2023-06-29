import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import instance from 'app/slices/Instance';

export const getBackUsers = createAsyncThunk('users/memberName', async (usersName) => {
  const accessToken = localStorage.getItem('accessToken');

  await instance
    .get(`/users/${usersName}`, {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    })
    .then((response) => {
      console.log('info 성공! ', response);
    })
    .catch((error) => {
      return console.log(error);
    });
});

const BackUserSlice = createSlice({
  name: 'backUser',
  initialState: {},
  reducers: {},
});

export default BackUserSlice.reducer;
