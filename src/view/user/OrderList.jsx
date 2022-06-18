import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
export default function OrderList({ user }) {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    getOrders();
    return () => {};
  }, []);
  const getOrders = async () => {
    try {
      const response = await axios.post(
        `http://localhost/assigment-web/src/php/selectOrder.php/orders/${user.key}`
      );
      setOrders(response.data);
    } catch (error) {}
  };
  // function getOrders() {
  //   axios
  //     .post(
  //       `http://localhost/assigment-web/src/php/selectOrder.php/orders/${user.key}`
  //     )
  //     .then(function (response) {
  //       setOrders(response.data);
  //     });
  // }

  return (
    <div id="OrderListPages">
      {orders.length === 0 && (
        <div className="col-xl-12 title--empty">Bạn chưa có đơn hàng nào</div>
      )}
      {orders.length !== 0 && (
        <div>
          <div className="row container-fluid title--list">
            <div className="col-xl-6 title--list__name">Thông tin sản phẩm</div>
            <div className="col-xl-3 title--list__quantity">Số tiền</div>
            <div className="col-xl-3 title--list__price">Ngày mua</div>
          </div>
          <div className="row container-fluid order_product">
            {orders.map((order, index) => (
              <div className="row container-fluid product--list" key={index}>
                <div className="col-xl-6 product--list__name">
                  {order.products}
                </div>
                <div className="col-xl-3 product--list__quantity">
                  {order.cost} đ
                </div>
                <div className="col-xl-3 title--list__price">
                  {order.created_at}
                  {}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
