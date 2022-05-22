import React from "react";
import TShirtList from "../TShirtList";
import Product from "./Product";
export default function TShirt({ cart, setCart, nextPage, user }) {
  return (
    <div id="TrousersPage">
      <Product
        cart={cart}
        setCart={setCart}
        nextPage={nextPage}
        ProductList={TShirtList}
        user={user}
        value="Áo sơ mi nữ"
      />
    </div>
  );
}
