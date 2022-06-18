import SkirtList from "../../php/listProduct/SkirtList";
import Product from "./Product";
import { useEffect, useState } from "react";
import productData from "../../php/productData.json";
export default function Skirt({ cart, setCart, nextPage, user }) {
  const listData = productData.filter((product) => product.type === "skirt");
  const [listProduct, setListProduct] = useState([...SkirtList, ...listData]);
  useEffect(() => {
    setListProduct([...SkirtList, ...listData]);
  }, []);
  return (
    <div id="ShirtPage">
      <Product
        cart={cart}
        setCart={setCart}
        nextPage={nextPage}
        ProductList={listProduct}
        user={user}
        value="Váy nữ"
      />
    </div>
  );
}
