import ShirtList from "../ShirtList";
import Product from "./Product";
export default function Shirt({ cart, setCart, nextPage, user }) {
  return (
    <div id="ShirtPage">
      <Product
        cart={cart}
        setCart={setCart}
        nextPage={nextPage}
        ProductList={ShirtList}
        user={user}
        value="Áo phông nữ"
      />
    </div>
  );
}
