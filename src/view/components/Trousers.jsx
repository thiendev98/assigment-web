import React from "react";
import TrousersList from "../TrousersList";
import Product from "./Product";
export default function Trousers({ cart, setCart, nextPage, user }) {
  return (
    <div id="TrousersPage">
      <Product
        cart={cart}
        setCart={setCart}
        nextPage={nextPage}
        ProductList={TrousersList}
        user={user}
        value="Quần nữ"
      />
    </div>
  );
}
