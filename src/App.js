import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Layout from "./common/Layout";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Products from "./pages/Products";
import Product from "./pages/Product";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
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
