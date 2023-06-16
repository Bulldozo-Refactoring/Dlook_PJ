import { configureStore } from '@reduxjs/toolkit';
import membersReducer from 'app/slices/membersSlice';
import saveTokenReducer from 'app/slices/tokenSlice';

const reducer = {
  members: membersReducer,
  saveToken: saveTokenReducer,
};

export const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;
