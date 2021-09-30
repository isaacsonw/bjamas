/** @format */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface CartState {
  toggle: boolean;
  data?: {}[];
}

const initialState: CartState = {
  toggle: false,
  data: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.toggle = !state.toggle;
    },
    cartItems: (state) => {
      return {
        ...state,
        //@ts-ignore
        data: [...state.data, state.data],
      };
    },
    clearProduts: (state) => {
      state.data = [];
    },
  },
});

export const { toggleCart, cartItems, clearProduts } = cartSlice.actions;

export const cartToggle = (state: RootState) => state.cart.toggle;
export const cartItemsData = (state: RootState) => state.cart.toggle;

export default cartSlice.reducer;
