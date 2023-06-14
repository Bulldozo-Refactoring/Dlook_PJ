import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const saveToken = createSlice({
  name: "members/saveToken",
  initialState: {
    refreshToken: localStorage.getItem("refreshToken") || null,
    accessToken: localStorage.getItem("accessToken") || null,
    user: null,
  },
  reducers: {
    clearToken: (state) => {
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("accessToken");
      return {
        refreshToken: null,
        accessToken: null,
        user: null,
      };
    },
    setToken: (state, action) => {
      state.accessToken = action.payload;
    },
    initializeToken: (state) => {
      state.refreshToken = localStorage.getItem("refreshToken") || null;
      state.accessToken = localStorage.getItem("accessToken") || null;
    },
  },
});

export const { initializeToken, setToken } = saveToken.actions;

export default saveToken.reducer;
