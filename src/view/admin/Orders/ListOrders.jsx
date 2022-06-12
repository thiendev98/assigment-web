import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
//import './App.css';
import EditOrder from "./EditOrder";
import ListOrder from "./ListOrder";

function ListOrders() {
  return (
    <div id="ListOrdersPage" style={{ textAlign: "center" }}>
      <Outlet />
    </div>
  );
}

export default ListOrders;
