import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
//import './App.css';
import EditOrder from "./EditOrder";
import ListOrder from "./ListOrder";

function ListOrders() {
  return (
    <div className="App" style={{ textAlign: "center" }}>
      <h1 style={{ marginTop: "20px" }}>DANH SÁCH ĐƠN HÀNG</h1>

      {/* <BrowserRouter> */}
      <nav>
        <ul>
          <li style={{ display: "inline-block", padding: "10px" }}>
            <Link className="btn btn-primary" to="list">
              List Orders
            </Link>
          </li>
        </ul>
      </nav>
      {/* <Routes>
          <Route index element={<ListOrder />} />
          <Route path="order/:id/edit" element={<EditOrder />} />
        </Routes>
      </BrowserRouter> */}
      <Outlet />
    </div>
  );
}

export default ListOrders;
