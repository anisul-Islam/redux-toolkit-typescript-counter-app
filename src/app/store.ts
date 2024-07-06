import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counterR: counterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
