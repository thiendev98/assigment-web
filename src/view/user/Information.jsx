import React from "react";

export default function Information({ user }) {
  return (
    <div>
      <h1>Thông tin cá nhân</h1>
      <p>Số điện thoại: {user.phone}</p>
    </div>
  );
}
