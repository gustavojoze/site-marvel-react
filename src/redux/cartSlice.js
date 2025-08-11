// src/redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  products: [],
  productTotalPrice: 0,
  coupon: null
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },
    closeCart: (state) => {
      state.isOpen = false;
    },
    addProductToCart: (state, action) => {
      const existingProduct = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
    increaseQuantity: (state, action) => {
      const product = state.products.find(
        (p) => p.id === action.payload
      );
      if (product) {
        product.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const product = state.products.find(
        (p) => p.id === action.payload
      );
      if (product) {
        if (product.quantity > 1) {
          product.quantity -= 1;
        } else {
          state.products = state.products.filter(p => p.id !== action.payload);
        }
      }
    },
    applyCoupon: (state, action) => {
      state.coupon = action.payload;
    }
  },
});

export const { 
  toggleCart, closeCart, addProductToCart, 
  increaseQuantity, decreaseQuantity, applyCoupon 
} = cartSlice.actions;
export default cartSlice.reducer;
