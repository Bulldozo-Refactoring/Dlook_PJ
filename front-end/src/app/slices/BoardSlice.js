import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  boardNo: 1,
};

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    setBoardNo: (state, action) => {
      state.boardNo = action.payload;
    },
  },
});

export const { setBoardNo } = boardSlice.actions;
export default boardSlice.reducer;
