
import { configureStore } from '@reduxjs/toolkit';
import studentReducer from './action';

const store = configureStore({
  reducer: {
    student: studentReducer,
  },
});

export default store;