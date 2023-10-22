import { configureStore } from '@reduxjs/toolkit';
import { feedBackReducer } from './FeedbackSlice';

export const store = configureStore({
  reducer: {
    feedBack: feedBackReducer,
  },
});
