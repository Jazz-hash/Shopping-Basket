import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Cart[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      let id = Math.random().toString(36).substring(3);

      state.push({ id: id, quantity: 1, products: [action.payload] });
    },
    incrementProduct(state, action: PayloadAction<Product>) {
      state.find((items) =>
        items.products.find((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: items.quantity++ }
            : item
        )
      );
    },
    decrementProduct(state, action: PayloadAction<Product>) {
      state.find((items) =>
        items.products.find((item) =>
          item.id === action.payload.id && items.quantity !== 0
            ? { ...item, quantity: items.quantity-- }
            : item
        )
      );
    },
    removeFromCart(state, action: PayloadAction<String>) {
      const index = state.findIndex((item) => item.id === action.payload);

      if (index >= 0) state.splice(index, 1);
    },
    emptyCart(state) {
      while (state.length) state.pop();
    },
  },
});

export const {
  addToCart,
  incrementProduct,
  decrementProduct,
  removeFromCart,
  emptyCart,
} = cartSlice.actions;
export default cartSlice.reducer;
