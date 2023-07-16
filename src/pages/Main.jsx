import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();
  const products = useSelector((state) => state.products);
  return (
    <>
      {/* main */}
      <main>
        {/* 케러셀 */}
        <section
          style={{
            backgroundColor: "#4E4FEB",
            color: "white",
            height: "300px",
            lineHeight: "300px",
            textAlign: "center",
            fontSize: "24px",
          }}
        >
          케러셀
        </section>
        {/* 여름 추천템 */}
        <section
          style={{
            marginTop: "56px",
            textAlign: "center",
          }}
        >
          <h2
            onClick={() => {
              alert("진짜 이동할꺼야?");
              navigate("/products");
            }}
          >
            🔥 여름 추천템 🔥
          </h2>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "24px",
            }}
          >
            {products.map((product) => {
              return (
                <div
                  key={product.id}
                  style={{
                    width: "200px",
                    height: "240px",
                    backgroundColor: "#068FFF",
                  }}
                >
                  <p>{product.name}</p>
                  <p>{product.price}</p>
                </div>
              );
            })}
            <Link to="/products">더보기</Link>
          </div>
        </section>
        {/* 추가적인 데이터 */}
        <section
          style={{
            marginTop: "56px",
            textAlign: "center",
          }}
        >
          <h2>🔥 세일 상품 🔥</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "24px",
            }}
          >
            <div
              style={{
                width: "200px",
                height: "240px",
                backgroundColor: "#EEEEEE",
              }}
            >
              상품1
            </div>
            <div
              style={{
                width: "200px",
                height: "240px",
                backgroundColor: "#EEEEEE",
              }}
            >
              상품2
            </div>
            <div
              style={{
                width: "200px",
                height: "240px",
                backgroundColor: "#EEEEEE",
              }}
            >
              상품3
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
