import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function Products({ products, setProducts }) {
  // useSearchParams() : 주소창의 쿼리 매개변수를 읽고 변경할 수 있음!
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.get("sort"));

  useEffect(() => {
    // 가격순 정렬을 위해 URL에서 'sort' 파라미터를 가져옴
    const sortParam = searchParams.get("sort");
    // 'sort'파라미터가 price라면,
    sortParam === "price" &&
      // 새로운 products배열에 상품들을 낮은가격순으로 정렬하여 업데이트함
      setProducts([...products].sort((a, b) => a.price - b.price));
  }, [searchParams]);

  return (
    <>
      <div
        style={{
          marginTop: "56px",
          textAlign: "center",
        }}
      >
        <h2>🔥 여름 추천템 🔥</h2>

        <div>
          <button
            onClick={() => {
              // 정렬 기준 클릭 시 url이 "products?sort=price"로 바뀌게 됨!
              setSearchParams({
                // 쿼리 매개변수
                sort: "price",
              });
            }}
          >
            낮은가격순 정렬
          </button>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "24px",
            }}
          >
            {products.map((product) => {
              return (
                <div key={product.id}>
                  <Link to={`/products/${product.id}`}>
                    <div
                      style={{
                        width: "200px",
                        height: "240px",
                        backgroundColor: "#068FFF",
                      }}
                    >
                      <p>{product.name}</p>
                      <p>{product.price}</p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
