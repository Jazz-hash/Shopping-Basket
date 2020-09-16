import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Cart[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      const cartItem: CartItem[] = [{ product: action.payload, quantity: 1 }];
      state.push({ products: cartItem });
    },
    incrementProduct(state, action: PayloadAction<Product>) {
      state.map((items) => items.products.find((item) => item.quantity++));
    },
    decrementProduct(state, action: PayloadAction<Product>) {
      state.map((items) => items.products.find((item) => item.quantity--));
    },
  },
});

export const { addToCart, incrementProduct, decrementProduct } = cartSlice.actions;
export default cartSlice.reducer;
