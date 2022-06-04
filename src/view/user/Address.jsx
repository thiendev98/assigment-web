import React from "react";

export default function Address({ user }) {
  return (
    <div>
      <h1>Địa chỉ: {user.address}</h1>
    </div>
  );
}
