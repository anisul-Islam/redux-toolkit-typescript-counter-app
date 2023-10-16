import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './components/counterSlice';

export type RootState = {
  counterR: ReturnType<typeof counterSlice>;
};

const store = configureStore({
  reducer: {
    counterR: counterSlice,
  },
});

export default store;
