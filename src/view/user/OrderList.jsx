import React from "react";

export default function OrderList({ user }) {
  return <div>{user.cart.length === 0 ? user.cart : "Không có đơn hàng"}</div>;
}
