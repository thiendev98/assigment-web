import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import Admin from "../view/admin/Admin";
import ListProducts from "../view/admin/Products/ListProducts";
import ListProduct from "../view/admin/Products/ListProduct";
import CreateProduct from "../view/admin/Products/CreateProduct";
import EditProduct from "../view/admin/Products/EditProduct";
import ListOrders from "../view/admin/Orders/ListOrders";
import ListOrder from "../view/admin/Orders/ListOrder";
import EditOrder from "../view/admin/Orders/EditOrder";
import ListUsers from "../view/admin/Users/ListUsers";
import ListUser from "../view/admin/Users/ListUser";

import React from "react";
import Controller from "./Controller";

export default function Routers() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="admin" element={<Admin />}>
          <Route path="products" element={<ListProducts />}>
            <Route path="create" element={<CreateProduct />} />
            <Route path="list" element={<ListProduct />} />
            <Route path="list/:id" element={<EditProduct />} />
          </Route>
          <Route path="users" element={<ListUsers />}>
            <Route path="list" element={<ListUser />} />
          </Route>
          <Route path="orders" element={<ListOrders />}>
            <Route path="list" element={<ListOrder />} />
            <Route path="list/:id" element={<EditOrder />} />
          </Route>
        </Route>
        <Route path="*" element={<Controller />} />
      </Routes>
    </Router>
  );
}
