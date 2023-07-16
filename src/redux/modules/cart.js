import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    minusCount: (state, action) => {
      return state.map((product) =>
        // 1보다 작아지게 만들지 않기 위해 비교 연산자 사용
        product.id === action.payload && product.count > 1
          ? { ...product, count: product.count - 1 }
          : product
      );
    },
    plusCount: (state, action) => {
      return state.map((product) =>
        product.id === action.payload
          ? { ...product, count: product.count + 1 }
          : product
      );
    },
    deleteCart: (state, action) => {
      return state.filter((product) => product.id !== action.payload);
    },
  },
});

export const { addToCart, minusCount, plusCount, deleteCart } = cart.actions;
export default cart;
