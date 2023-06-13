import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
import axios from "./axuisMock";

export const join = createAsyncThunk(
  "member/join",
  async (payload, thunkAPI) => {
    console.log(payload);
    console.log(thunkAPI);
    try {
      const response = await axios.post(
        "http://localhost:8080/member/join",
        payload
      );
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
        payload,
        { withCredentials: true }
      );
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

export const logout = createAsyncThunk("member/logout", async (_, thunkAPI) => {
  try {
    await axios.post("http://localhost:8080/member/logout", null, {
      withCredentials: true,
    });
    // 로그아웃 성공 시 반환값은 null
    return null;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const initialState = {
  isLoggedIn: false,
  user: null,
  error: null,
};

const memberSlice = createSlice({
  name: "member",
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

export default memberSlice.reducer;
