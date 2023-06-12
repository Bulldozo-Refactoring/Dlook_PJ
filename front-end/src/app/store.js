import { configureStore } from "@reduxjs/toolkit";
import memberReducer from "./slices/member";

const reducer = {
  auth: memberReducer,
};

export const store = configureStore({
  reducer: reducer,
  devTools: true,
});
