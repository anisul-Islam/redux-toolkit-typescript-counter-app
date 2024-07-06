import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { initialStateType } from './counterTypes';

const initialState: initialStateType = {
  count: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
  },
});

export const { increment, reset, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
