import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Layout from "./common/Layout";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Products from "./pages/Products";
import Product from "./pages/Product";

export default function App() {
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

  // 전역 상태로 관리하기 위해 App.js에 상품 정보 배열을 선언함
  const [products, setProducts] = useState(initialState);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Main products={products} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/products"
          element={<Products products={products} setProducts={setProducts} />}
        />
        <Route path="/products/:id" element={<Product products={products} />} />
      </Route>
      <Route
        path="*"
        element={
          <>
            <div>없는 페이지입니다.</div>
            <Link to="/">홈으로 이동</Link>
          </>
        }
      />
    </Routes>
  );
}
