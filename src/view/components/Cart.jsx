import React from "react";
import axios from "axios";
import { FaTrash } from "react-icons/fa";
import { loadAnimation } from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";
defineLordIconElement(loadAnimation);
export default function Cart({ cart, setCart, nextPage, onClick, user }) {
  const getTotalSum = () => {
    return cart.reduce((sum, { price, quantity }) => sum + price * quantity, 0);
  };
  const getTotalSumItem = (product) => {
    return product.price * product.quantity;
  };

  const setQuantity = (product, amount) => {
    if (amount === 0) {
      removeFromCart(product);
    } else {
      const newCart = [...cart];
      newCart.find((item) => item.name === product.name).quantity = amount;
      setCart(newCart);
    }
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };
  const handleOrderClick=()=>{
     user.login && setTimeout(()=>{
      const order = {
        name: user.name,
        phone: user.phone,
        address: user.address,
        cost: getTotalSum()
      }
      axios.post(`http://localhost/assigment-web-demo/src/php/insertOrder.php`,order)
      .then(res=> {})
      .catch(error => {
        console.log(error.response)
      });
      alert("Đặt hàng thành công. Tiếp tục mua sắm.")
      setCart([])
      nextPage('shirt')
     },1000)
  } 

  return (
    <div id="CartPage">
      {cart.length === 0 && (
        <div className="cart__empty">
          <img
            className="cart__empty--img"
            src="https://bizweb.dktcdn.net/100/438/408/themes/848101/assets/blank_cart.svg?1646575637708"
          />
          {user.login ? (
            <>
              <p>Giỏ hàng của bạn trống</p>
              <button onClick={() => nextPage("shirt")}>
                Tiếp tục mua sắm
              </button>
            </>
          ) : (
            <>
              <p>Bạn cần đăng nhập để mua hàng</p>
              <button onClick={onClick}>Đăng nhập ngay</button>
            </>
          )}
        </div>
      )}
      {cart.length > 0 && (
        <div className="cart__products">
          <div className="row container-fluid">
            <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
              <header>
                <h5>
                  Đơn hàng của bạn <span>({cart.length}) Sản phẩm</span>
                </h5>
              </header>
              <div className="cart__products--header row container-fluid ">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-7 col-6">
                  Sản phẩm
                </div>
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-0 col-0 cart__products--header__price">
                  Đơn giá{" "}
                </div>
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-3 col-3">
                  {" "}
                  Số lượng{" "}
                </div>
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-3">
                  {" "}
                  Thành tiền{" "}
                </div>
              </div>
              {cart.map((product, idx) => (
                <div
                  className="row container-fluid cart__products--item"
                  key={idx}
                >
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-7 col-6 row container-fluid">
                    <img
                      className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-0"
                      src={product.link}
                    />
                    <div className="col-xl-10 col-lg-9 col-md-9 col-sm-8 col-12">
                      <p className="cart__products--item__name">
                        {product.name}
                        <p>{product.price} đ</p>
                      </p>

                      <div className="cart__products--item__size">
                        <span>{`${product.color} / ${product.size}`}</span>
                      </div>
                      <button
                        className="btn--remove"
                        onClick={() => removeFromCart(product)}
                      >
                        <FaTrash className="icon__trash" />
                        <span>Xóa</span>
                      </button>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-0 col-0 cart__products--item__price">
                    <span> {product.price} đ</span>
                  </div>
                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-3 col-3 cart__products--item__quatity">
                    <button
                      onClick={() =>
                        setQuantity(
                          product,
                          product.quantity < 1 ? 0 : product.quantity - 1
                        )
                      }
                    >
                      -
                    </button>
                    <span>{product.quantity}</span>
                    <button
                      onClick={() => setQuantity(product, product.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-3 cart__products--item__total">
                    {getTotalSumItem(product)} đ{" "}
                  </div>
                </div>
              ))}
            </div>
            <div className="col-xl-0 col-lg-0 col-md-3 col-sm-2 col-2"></div>
            <div className="cart__products--payment col-xl-3 col-lg-3 col-md-6 col-sm-8 col-8">
              <div className="payment--title">
                <lord-icon
                  className="icon__truck--kun"
                  trigger="loop"
                  src="https://cdn.lordicon.com/uetqnvvg.json"
                ></lord-icon>
                <p>Giao hàng siêu tốc</p>
                <p>
                  {getTotalSum() >= 498000
                    ? "Miễn phí giao hàng"
                    : `Mua thêm ${
                        498000 - getTotalSum()
                      }đ để được miễn phí giao hàng`}
                </p>
              </div>
              <div className="payment--total">
                <p>Tổng tiền:</p>
                <span>{getTotalSum()} đ</span>
              </div>
              {getTotalSum() < 1000000 && ""}
              {getTotalSum() < 1750000 && getTotalSum() >= 1000000 && (
                <div className="payment--discount">
                  <span>- {50000} đ</span>
                  <p>{getTotalSum() - 50000} đ </p>
                </div>
              )}
              {getTotalSum() < 2000000 && getTotalSum() >= 1750000 && (
                <div className="payment--discount">
                  <span>- {100000} đ</span>
                  <p>{getTotalSum() - 100000} đ </p>
                </div>
              )}
              {getTotalSum() >= 2000000 && (
                <div className="payment--discount">
                  <span>- {150000} đ</span>
                  <p>{getTotalSum() - 150000} đ </p>
                </div>
              )}
              <button onClick={()=>handleOrderClick()}>Đặt hàng</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
