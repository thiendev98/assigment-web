import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import ListUser from "./ListUser";

function ListUsers() {
  return (
    <div className="App" style={{ textAlign: "center" }}>
      <h1 style={{ marginTop: "20px" }}>DANH SÁCH KHÁCH HÀNG</h1>

      <nav>
        <ul>
          <li style={{ display: "inline-block", padding: "10px" }}>
            <Link className="btn btn-primary" to="list">
              List Users
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default ListUsers;
