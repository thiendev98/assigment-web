import SkirtList from "../SkirtList";
import Product from "./Product";
export default function Skirt({ cart, setCart, nextPage, user }) {
  return (
    <div id="ShirtPage">
      <Product
        cart={cart}
        setCart={setCart}
        nextPage={nextPage}
        ProductList={SkirtList}
        user={user}
        value="Váy nữ"
      />
    </div>
  );
}
