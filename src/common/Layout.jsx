import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        paddingBottom: "90px",
        boxSizing: "border-box",
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "24px",
          backgroundColor: "#000000",
          color: "white",
        }}
      >
        <Link
          style={{
            textDecoration: "none",
            color: "white",
          }}
          to="/"
        >
          로고
        </Link>
        <div
          style={{
            display: "flex",
            gap: "12px",
          }}
        >
          <Link
            style={{
              textDecoration: "none",
              color: "white",
            }}
            to="/login"
          >
            로그인
          </Link>
          <Link
            style={{
              textDecoration: "none",
              color: "white",
            }}
            to="/signup"
          >
            회원가입
          </Link>
        </div>
      </header>
      <Outlet />
      <footer
        style={{
          marginTop: "24px",
          display: "flex",
          justifyContent: "space-between",
          padding: "24px",
          backgroundColor: "#EEEEEE",
          color: "black",
          position: "absolute",
          bottom: 0,
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <div>문의하기</div>
        <div>SNS 채널들</div>
      </footer>
    </div>
  );
}
