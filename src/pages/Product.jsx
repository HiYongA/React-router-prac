import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function Product({ products }) {
  const { id } = useParams();

  const selectedProduct = products.find((product) => product.id === id);
  const { name, price, options, likes } = selectedProduct;
  // console.log(selectedProduct);

  const [selectedOption, setSelectedOption] = useState("");

  return (
    <>
      <div>
        <h1>상세 페이지</h1>
        <div
          style={{
            display: "flex",
            gap: "44px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "200px",
              height: "240px",
              backgroundColor: "#068FFF",
            }}
          >
            {name}
          </div>
          <div>
            <h3>가격: {price} 원</h3>
            <h3>좋아요: {likes} 개</h3>
            <h3>구매옵션</h3>
            <select
              style={{
                width: "100px",
              }}
              onChange={(e) => {
                setSelectedOption(e.target.value);
              }}
            >
              <option value="">선택하세요.</option>
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <p>구매옵션: {selectedOption}</p>
          </div>
        </div>
      </div>
    </>
  );
}
