import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpen:false
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
    }
  },
});

export const { toggleCart, closeCart } = cartSlice.actions;
export default cartSlice.reducer;
