import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Cart[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      state.push({ product: action.payload, quantity: 1 });
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
