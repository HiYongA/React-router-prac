import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    name: "멋진 바지",
    price: 20000,
    options: [28, 30, 32],
    likes: 100,
  },
  {
    id: "2",
    name: "멋진 셔츠",
    price: 10000,
    options: ["small", "medium", "large"],
    likes: 200,
  },
  {
    id: "3",
    name: "멋진 신발",
    price: 30000,
    options: [230, 240, 250, 260, 270],
    likes: 300,
  },
];

const products = createSlice({
  name: "products",
  initialState,
  reducers: {
    // immer 내장, 복사본 사용할 필요 없음
    sortByPrice: (state) => state.sort((a, b) => a.price - b.price),
    reset: () => initialState,
  },
});

export const { sortByPrice, reset } = products.actions;
export default products;
