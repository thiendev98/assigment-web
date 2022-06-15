import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { useNavigate, useParams } from "react-router-dom";
export default function OrderList({ cartUser, user }) {

  const [orders, setOrders] = useState([]);
  useEffect(() => {
    getOrders();
  }, []);

  function getOrders() {
    axios
      .post(`http://localhost/assigment-web/src/php/selectOrder.php/orders/${user.key}`)
      .then(function (response) {
        setOrders(response.data); 
        console.log(response.data);
      });
  }

  return (
    <div id="OrderListPages">
      {cartUser.length === 0 && (
        <div className="col-xl-12 title--empty">Bạn chưa có đơn hàng nào</div>
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
