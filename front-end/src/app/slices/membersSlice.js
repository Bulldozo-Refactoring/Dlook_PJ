import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from './axuisMock';
// import axios from 'axios';
import { setLoggedIn, logoutAction } from './tokenSlice';

const initialState = {
  isLoggedIn: false,
  memberName: null,
  certify: null,
  error: null,
  joinResult: null,
};

export const join = createAsyncThunk('members/join', async (payload, thunkAPI) => {
  try {
    const response = await axios.post('http://localhost:8080/members/join', payload);
    console.log('회원가입 진입');

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const membersSlice = createSlice({
  name: 'members',
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

export default membersSlice.reducer;
