import { combineReducers } from "@reduxjs/toolkit";
import cart from "./cartReducer";
import product from "./productReducer";

const rootReducer = combineReducers({
  cart,
  product,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
