import { configureStore } from "@reduxjs/toolkit";
import membersReducer from "app/slices/membersSlice";
import saveTokenReducer, { initializeToken } from "app/slices/tokenSlice";

const reducer = {
  members: membersReducer,
  saveToken: saveTokenReducer,
};

export const store = configureStore({
  reducer: reducer,
  devTools: true,
});

// 새로고침 해도 로그인 유지 - 토큰 불러오기 - 제발 성공해주세요..
store.dispatch(initializeToken());

export default store;
