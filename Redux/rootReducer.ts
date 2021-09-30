/** @format */

import { combineReducers } from '@reduxjs/toolkit';
import productsSlice from './features/productsSlice';
import cartSlice from './features/cartSlice';

const rootReducer = combineReducers({
  products: productsSlice,
  cart: cartSlice,
});

export default rootReducer;
