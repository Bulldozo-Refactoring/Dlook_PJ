import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from "axios";
// import axios from "./axuisMock";

export const join = createAsyncThunk(
  "members/join",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const response = await axios.post(
        "http://localhost:8080/members/join",
        payload
      );
      console.log("회원가입 진입");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const login = createAsyncThunk(
  "members/login",
  async (payload, thunkAPI) => {
    console.log(payload);
    console.log(thunkAPI);
    try {
      const response = await axios.post(
        "http://localhost:8080/members/login",
        payload,
        { withCredentials: true }
      );
      console.log("진입확인");
      const { refreshToken, accessToken } = response.data;
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
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("accessToken");
      return null;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const joinSuccess = createAction("members/joinsuccess");

const initialState = {
  isLoggedIn: false,
  user: null,
  error: null,
  joinResult: null,
};

const membersSlice = createSlice({
  name: "members",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => (state.status = "loading"));
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.status = "success";
      state.isLoggedIn = true;
      state.user = payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.status = "failed";
      if (action.payload) state.error = action.payload;
      else state.error = action.error.message;
    });
    builder.addCase(logout.pending, (state) => (state.status = "loading"));
    builder.addCase(logout.fulfilled, (state) => {
      state.status = "success";
      state.isLoggedIn = false;
      state.user = null;
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.status = "failed";
      if (action.payload) state.error = action.payload;
      else state.error = action.error.message;
    });
    builder.addCase(join.fulfilled, (state, action) => {
      if (action.payload === "join success") {
        state.joinResult = "/members/joinresult";
      }
    });
    builder.addCase(joinSuccess, (state, action) => {
      if (action.payload === "join success") {
        state.joinResult = "/members/joinresult";
      }
    });
  },
});

export default membersSlice.reducer;
