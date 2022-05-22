import React from "react";
import { Link } from "react-router-dom";
export default function Admin({ setAdmin }) {
  return (
    <div id="AdminPage">
      <h1>Admin Page</h1>
      <button onClick={() => setAdmin(false)}>Đăng xuất khỏi trái đất</button>
    </div>
  );
}
