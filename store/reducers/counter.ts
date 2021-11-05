import { createSlice } from '@reduxjs/toolkit';
import { AppState } from '../';

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const { actions, reducer } = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = actions;

export const selectCount = (state: AppState) => state.counter.value;

export default reducer;
