import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Cart[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Cart>) {
      state.push(action.payload);
    },
    // toggleTodo(state, action: PayloadAction<Cart>) {
    //   let todo = state.find((todo) => todo.id === action.payload.id);

    //   if (todo) {
    //     todo.completed = !todo.completed;
    //   }
    // },
  },
});

export const {} = cartSlice.actions;
export default cartSlice.reducer;
