/** @format */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface ProductState {
  productsData?: {}[];
  filtersData: string[];
}

const initialState: ProductState = {
  productsData: [],
  filtersData: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProducts: (state, { payload }): ProductState => {
      return {
        ...state,
        //@ts-ignore,
        productsData: [...state.productsData, ...payload],
      };
    },
    productFilter: (state, { payload }): ProductState => {
      return {
        ...state,
        //@ts-ignore,
        filtersData: [...payload],
      };
    },
  },
});

export const { getProducts, productFilter } = productsSlice.actions;

export const filterData = (state: RootState) => state.products.filtersData;
export const allProducts = (state: RootState) => state.products.productsData;

// allProducts.map((e) => )

export default productsSlice.reducer;
