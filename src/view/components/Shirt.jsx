import ShirtList from "../ShirtList";
import Product from "./Product";
import productData from '../../php/productData.json'
import { useEffect, useState } from "react";
export default function Shirt({ cart, setCart, nextPage, user }) {
  const listData = productData.filter(product=>product.type === 'shirt');
  const [listProduct, setListProduct] = useState([...ShirtList, ...listData])
  useEffect(()=>{
    setListProduct([...ShirtList, ...listData])}, [])
  return (
    <div id="ShirtPage">
      <Product
        cart={cart}
        setCart={setCart}
        nextPage={nextPage}
        ProductList={listProduct}
        user={user}
        value="Áo phông nữ"
      />
    </div>
  );
}
