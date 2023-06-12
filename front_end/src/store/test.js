import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '김선우', // state 초기값
};

const personSlice = createSlice({
  name: 'person', // slice 식별 이름 작명
  initialState, // 초기값
});

const testSlice = createSlice({
  name: 'test',
  initialState: ['💙', '💜', '💛'],
})

const heart = createSlice({
  name: 'heart',
  initialState: ['♡', '♡', '♡'],
  reducers: {
    addHeartColor(prevState) {
      return [...prevState, '💝', '❤️‍🩹', '💗']; // 기존 값 뒤에 추가
    },
    changeHeartColor() {
      return ['💙', '❤️‍🩹', '💛'];
    }
  }
})

export const { addHeartColor, changeHeartColor } = heart.actions;

export default configureStore({
  reducer: {
    person: personSlice.reducer,
    test: testSlice.reducer,
    heart: heart.reducer,
  },
});