'use client'
import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      const existingItem = state.find((item) => item.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart(state, action) {
      const index = state.findIndex((item) => item.id === action.payload);
      if (index !== -1) state.splice(index, 1);
    },
    reduceFromCart(state, action) {
      const existingItem = state.find((item) => item.id === action.payload);

      if (existingItem.quantity === 1) {
        const index = state.findIndex((item) => item.id === action.payload);
        if (index !== -1) state.splice(index, 1);
      } else {
        existingItem.quantity -= 1;
      }
    },
  },
});

export const cartActions = cartSlice.actions;