import React, { useState, useEffect } from "react";
import TShirtList from "../../php/listProduct/TShirtList";
import Product from "./Product";
import productData from "../../php/productData.json";
export default function TShirt({ cart, setCart, nextPage, user }) {
  const listData = productData.filter((product) => product.type === "shirt");
  const [listProduct, setListProduct] = useState([...TShirtList, ...listData]);
  useEffect(() => {
    setListProduct([...TShirtList, ...listData]);
  }, []);
  return (
    <div id="TrousersPage">
      <Product
        cart={cart}
        setCart={setCart}
        nextPage={nextPage}
        ProductList={listProduct}
        user={user}
        value="Áo sơ mi nữ"
      />
    </div>
  );
}
