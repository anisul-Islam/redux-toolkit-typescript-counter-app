import { createSlice } from '@reduxjs/toolkit';

type CounterStateType = {
  count: number;
};

const initialState: CounterStateType = {
  count: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    incrementBy5: (state, action) => {
      console.log(action);
      state.count = state.count + action.payload;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

export const { increment, decrement, reset, incrementBy5 } =
  counterSlice.actions;

export default counterSlice.reducer;
