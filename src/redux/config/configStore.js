import { configureStore } from "@reduxjs/toolkit";
import products from "../modules/products";
import cart from "../modules/cart";

const store = configureStore({
  reducer: {
    products: products.reducer,
    cart: cart.reducer,
  },
});

export default store;
