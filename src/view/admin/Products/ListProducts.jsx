import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
//import './App.css';
import CreateProduct from "./CreateProduct";
import EditProduct from "./EditProduct";
import ListProduct from "./ListProduct";

function ListProducts() {
  return (
    <div id="ListProductsPage">
      <Outlet />
    </div>
  );
}

export default ListProducts;
