import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Cart[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      const item = state.find((items) =>
        items.products.map((item) => item.product.id === action.payload.id)
      );
      const cartItem: CartItem[] = [{ product: action.payload, quantity: 1 }];
      if (!item) state.push({ products: cartItem });
      console.log(state, cartItem, item);
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
