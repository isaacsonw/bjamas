/** @format */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    clearProduts: (state) => {
      state.value = 0;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, clearProduts } =
  productsSlice.actions;

export const selectCount = (state: RootState) => state.products.value;

export default productsSlice.reducer;
