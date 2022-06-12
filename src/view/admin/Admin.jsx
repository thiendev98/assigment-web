import React from "react";
import { useState } from "react";
import $ from "jquery";
import { Link, Outlet } from "react-router-dom";
import logo from "../images/logo.png";
import down from "../images/down.png";
export default function Admin() {
  const [isDisplay, setIsDisplay] = useState(false);
  const handleDisplayProducts = () => {
    if (isDisplay) {
      $(".sidebar__list--products--list").fadeIn("1000");
      $(".sidebar__list--products--create").fadeIn("1500");
    } else {
      $(".sidebar__list--products--create").hide();
      $(".sidebar__list--products--list").hide();
    }
    setIsDisplay(!isDisplay);
  };
  return (
    <div id="AdminPage">
      <div className="sidebar">
        <div className="sidebar__logo">
          <Link to="/">
            <img alt="logo" src={logo} />
          </Link>
        </div>
        <ul className="sidebar__list">
          <li className="sidebar__list--products">
            <span>
              <Link style={{ textDecoration: "none" }} to="products/list">
                Quản lí sản phẩm
              </Link>{" "}
              <img
                onClick={() => handleDisplayProducts()}
                alt="down"
                src={down}
              />
            </span>
            <span className="sidebar__list--products--list">
              <Link style={{ textDecoration: "none" }} to="products/list">
                Danh sách sản phẩm
              </Link>
            </span>
            <span className="sidebar__list--products--create">
              <Link style={{ textDecoration: "none" }} to="products/create">
                Thêm sản phẩm
              </Link>
            </span>
          </li>
          <li className="sidebar__list--orders">
            <Link style={{ textDecoration: "none" }} to="orders/list">
              Quản lí đơn hàng
            </Link>
          </li>
          <li className="sidebar__list--users">
            <Link style={{ textDecoration: "none" }} to="users/list">
              Quản lí khách hàng
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}
