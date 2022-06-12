import React, {useState, useEffect} from "react";
import TrousersList from "../TrousersList";
import Product from "./Product";
import productData from '../../php/productData.json'
export default function Trousers({ cart, setCart, nextPage, user }) {
  const listData = productData.filter(product=>product.type === 'trousers');
  const [listProduct, setListProduct] = useState([...TrousersList, ...listData])
  useEffect(()=>{
    setListProduct([...TrousersList, ...listData])}, [])
  return (
    <div id="TrousersPage">
      <Product
        cart={cart}
        setCart={setCart}
        nextPage={nextPage}
        ProductList={listProduct}
        user={user}
        value="Quần nữ"
      />
    </div>
  );
}
