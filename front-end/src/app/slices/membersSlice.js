import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
import axios from "./axuisMock";

export const join = createAsyncThunk(
  "members/join",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/members/join",
        payload
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const login = createAsyncThunk(
  "members/login",
  async (payload, thunkAPI) => {
    // console.log(payload);
    try {
      const response = await axios.post(
        "http://localhost:8080/members/login",
        payload,
        { withCredentials: true }
      );
      const { refreshToken, accessToken } = response.data;
      // local storage - token save
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("accessToken", accessToken);

      return response.data;
    } catch (e) {
      let error = e;
      if (!error.response) {
        throw e;
      }
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const logout = createAsyncThunk(
  "members/logout",
  async (_, thunkAPI) => {
    try {
      await axios.post("http://localhost:8080/members/logout", null, {
        withCredentials: true,
      });
      // local storage 토큰 초기화
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("accessToken");
      // 로그아웃 성공 시 반환값은 null
      return null;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  isLoggedIn: false,
  user: null,
  error: null,
};

const membersSlice = createSlice({
  name: "members",
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
    builder.addCase(logout.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.status = "success";
      state.isLoggedIn = false;
      state.user = null;
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.status = "failed";
      if (action.payload) {
        state.error = action.payload;
      } else {
        state.error = action.error.message;
      }
    });
  },
});

export default membersSlice.reducer;
