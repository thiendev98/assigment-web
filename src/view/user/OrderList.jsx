import React from "react";

export default function OrderList({ user }) {
  const cartOfCustomer = user.cart;
  return (
    <div>
      {!user.cart && "Không có đơn hàng"}
      {user.cart &&
        cartOfCustomer.map((cart, index) => <div key={index}>{cart.name}</div>)}
    </div>
  );
}
