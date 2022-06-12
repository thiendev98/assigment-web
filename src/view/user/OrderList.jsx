import React from "react";

export default function OrderList({ cartUser }) {
  return (
    <div id="OrderListPages">
      {cartUser.length === 0 && (
        <div className="col-xl-12 title--empty">Bạn chưa có đơn hàng</div>
      )}
      {cartUser.length !== 0 && (
        <div>
          <div className="row container-fluid title--list">
            <div className="col-xl-6 title--list__name">Tên sản phẩm</div>
            <div className="col-xl-3 title--list__quantity">Số lượng</div>
            <div className="col-xl-3 title--list__price">Số tiền</div>
          </div>
          <div className="row container-fluid">
            {cartUser.map((cart) => (
              <div className="row container-fluid product--list">
                <div className="col-xl-6 product--list__name">{cart.name}</div>
                <div className="col-xl-3 product--list__quantity">
                  {cart.quantity}
                </div>
                <div className="col-xl-3 title--list__price">
                  {cart.price} đ
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
