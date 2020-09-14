import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Product[] = [
  {
    id: 1,
    name: "Shoe 1",
    price: 10.09,
    image: "/1.png",
    details: "dsada",
  },
  {
    id: 2,
    name: "Shoe 2",
    price: 10.09,
    image: "/2.png",
    details: "dsada",
  },
  {
    id: 3,
    name: "Shoe 3",
    price: 10.09,
    image: "/3.png",
    details: "dsada",
  },
  {
    id: 4,
    name: "Shoe 4",
    price: 10.09,
    image: "/4.png",
    details: "dsada",
  },
];

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export const {} = productSlice.actions;
export default productSlice.reducer;
