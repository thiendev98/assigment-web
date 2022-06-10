import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Admin from "./view/admin/Admin";
import ListProducts from "./view/admin/Products/ListProducts";
import ListUsers from "./view/admin/Users/ListUsers";
import ListUser from "./view/admin/Users/ListUser";
import ListOrders from "./view/admin/Orders/ListOrders";
import ListOrder from "./view/admin/Orders/ListOrder";
import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
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
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
