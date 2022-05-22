import React from "react";
import VestList from "../VestList";
import Product from "./Product";
export default function Vest({ cart, setCart, nextPage, user }) {
  return (
    <div id="TrousersPage">
      <Product
        cart={cart}
        setCart={setCart}
        nextPage={nextPage}
        ProductList={VestList}
        user={user}
        value="Vest"
      />
    </div>
  );
}
