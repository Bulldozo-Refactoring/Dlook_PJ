import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const join = createAsyncThunk(
  "member/join",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/member/register",
        payload
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const login = createAsyncThunk(
  "member/login",
  async (payload, thunkAPI) => {
    console.log(payload);
    console.log(thunkAPI);
    try {
      const response = await axios.post(
        "http://localhost:8080/member/login",
        payload
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const logout = createAsyncThunk("member/logout", async () => {});

const initialState = {
  isLoggedIn: false,
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.status = "success";
      state.isLoggedIn = true;
      state.user = payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.status = "failed";
      if (action.payload) {
        state.error = action.payload;
      } else {
        state.error = action.error.message;
      }
    });
  },
});

export default authSlice.reducer;
