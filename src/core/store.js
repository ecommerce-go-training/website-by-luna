import { configureStore } from '@reduxjs/toolkit';
import counterReducer from 'pages/Redux/counterSlide';

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});
