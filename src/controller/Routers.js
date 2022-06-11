import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import Admin from "../view/admin/Admin";
import ListProducts from "../view/admin/Products/ListProducts";
import ListOrders from "../view/admin/Orders/ListOrders";
import ListUsers from "../view/admin/Users/ListUsers";
import ListUser from "../view/admin/Orders/EditOrder";
import ListOrder from "../view/admin/Orders/ListOrder";

import React from "react";

export default function Routers() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="admin" element={<Admin />}>
          <Route path="products" element={<ListProducts />} />
          <Route path="users" element={<ListUsers />}>
            <Route path="personal" element={<ListUser />} />
          </Route>
          <Route path="orders" element={<ListOrders />}>
            <Route path="oderlist" element={<ListOrder />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}
