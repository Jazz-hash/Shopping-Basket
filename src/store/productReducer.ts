import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Product[] = [];

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export const {} = productSlice.actions;
export default productSlice.reducer;
