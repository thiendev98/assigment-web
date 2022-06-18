import React from "react";
import { useState, useEffect } from "react";
import VestList from "../../php/listProduct/VestList";
import Product from "./Product";
import productData from "../../php/productData.json";
export default function Vest({ cart, setCart, nextPage, user }) {
  const listData = productData.filter((product) => product.type === "vest");
  const [listProduct, setListProduct] = useState([...VestList, ...listData]);
  useEffect(() => {
    setListProduct([...VestList, ...listData]);
  }, []);
  return (
    <div id="TrousersPage">
      <Product
        cart={cart}
        setCart={setCart}
        nextPage={nextPage}
        ProductList={listProduct}
        user={user}
        value="Vest"
      />
    </div>
  );
}
