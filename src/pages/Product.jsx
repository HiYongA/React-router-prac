import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  addToCart,
  deleteCart,
  minusCount,
  plusCount,
} from "../redux/modules/cart";

export default function Product() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);

  const selectedProduct = products.find((product) => product.id === id);
  const { name, price, options, likes } = selectedProduct;
  // console.log(selectedProduct);

  const [selectedOption, setSelectedOption] = useState("");
  const [count, setCount] = useState(1);

  const handleAddToCart = () => {
    if (!selectedOption) {
      alert("옵션을 선택하세요!");
      return;
    }
    const cartProduct = {
      id: selectedProduct.id,
      name: selectedProduct.name,
      price: selectedProduct.price,
      option: selectedOption,
      count: count,
    };
    dispatch(addToCart(cartProduct));
  };

  const handleMinusCount = (id) => {
    dispatch(minusCount(id));
  };

  const handlePlusCount = (id) => {
    dispatch(plusCount(id));
  };

  const handleDeleteCart = (id) => {
    dispatch(deleteCart(id));
  };

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
            {/* 옵션 선택할 때 보이기 */}
            {selectedOption ? (
              <>
                <p>
                  개수: {count} 개
                  <button onClick={() => setCount(count + 1)}>+</button>
                </p>
                <p>총 금액: {count * price}원</p>
              </>
            ) : (
              <p>총 금액: </p>
            )}

            <button onClick={handleAddToCart}>장바구니 추가하기</button>
          </div>
        </div>
        <h1>장바구니</h1>
        {cart.map((product) => {
          return (
            <div
              key={product.id}
              style={{
                border: "1px solid gray",
                paddingLeft: "10px",
                margin: "10px",
              }}
            >
              <h3>{product.name}</h3>
              <h3>가격: {product.price}원</h3>
              <h3>옵션: {product.option}</h3>
              <h3>
                개수:
                {/* 장바구니에는 여러 상품이 들어갈 수 있어 특정 상품의 개수를 증가, 감소시키기 위해 해당 상품 id가 필요함 */}
                <button onClick={() => handleMinusCount(product.id)}>-</button>
                {product.count}
                <button onClick={() => handlePlusCount(product.id)}>+</button>개
              </h3>
              <h3>총 비용: {product.count * product.price}원</h3>
              <button onClick={() => handleDeleteCart(product.id)}>
                장바구니서 삭제
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
