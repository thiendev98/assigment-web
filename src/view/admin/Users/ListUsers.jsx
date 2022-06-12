import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import ListUser from "./ListUser";
import "../../styles/style.css";
function ListUsers() {
  return (
    <div id="ListUsersPage">
      <Outlet />
    </div>
  );
}

export default ListUsers;
