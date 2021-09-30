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
    openCart: (state) => {
      state.toggle = true;
    },
    closeCart: (state) => {
      state.toggle = false;
    },
    cartItems: (state): CartState => {
      //@ts-ignore
      return [...state.data];
    },
    addToCart: (state, { payload }): CartState => {
      return {
        toggle: true,
        //@ts-ignore
        data: [...state.data, payload],
      };
    },
    clearCart: (state) => {
      state.data = [];
    },
  },
});

export const { cartItems, clearCart, openCart, closeCart, addToCart } =
  cartSlice.actions;

export const cartToggle = (state: RootState) => state.cart.toggle;
export const cartItemsData = (state: RootState) => state.cart.data;

export default cartSlice.reducer;
