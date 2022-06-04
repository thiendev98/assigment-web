import React, { useState } from "react";
import Address from "./Address";
import OrderList from "./OrderList";
import Information from "./Information";
import "../styles/style.css";
export default function User({ user, setUser, nextPage, cart, setCart }) {
  const [pageInfo, setPageInfo] = useState("information");
  const [nameInfo, setnameInfo] = useState("Thông tin cá nhân");
  const handleClickInfo = (index) => {
    if (index === 0) {
      setnameInfo("Thông tin cá nhân");
      setPageInfo("information");
    } else if (index === 1) {
      setnameInfo("Đơn hàng của bạn");
      setPageInfo("orderlist");
    } else if (index === 2) {
      setnameInfo("Địa chỉ của bạn");
      setPageInfo("address");
    } else {
    }
  };
  const listInfo = [
    {
      key: 1,
      img: "https://bizweb.dktcdn.net/100/438/408/themes/848101/assets/acc_user_1_hover.svg",
      info: "Thông tin cá nhân",
    },
    {
      key: 2,
      img: "https://bizweb.dktcdn.net/100/438/408/themes/848101/assets/acc_user_2_hover.svg",
      info: "Danh sách đơn hàng",
    },
    {
      key: 3,
      img: "https://bizweb.dktcdn.net/100/438/408/themes/848101/assets/acc_user_4_hover.svg",
      info: "Địa chỉ",
    },
  ];
  return (
    <div id="UserPage">
      <div className="user__header">
        <span>Thông tin tài khoản</span>
      </div>
      <div className="user__content row container-fluid">
        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12 user__content--list">
          <div className="user__content--list__img">
            <img
              className="list__img--avatar"
              src="https://i.pinimg.com/236x/a8/3f/c7/a83fc7871e75ca709d3107e0115af253.jpg"
              alt="avatar"
            />
            <p>{user.name}</p>
            <button
              onClick={() => {
                user.login = false;
                nextPage("home");
              }}
            >
              Đăng xuất
            </button>
          </div>
          <ul className="user__content--list__info">
            {listInfo.map((info, index) => (
              <li>
                <img src={info.img} />
                <span onClick={() => handleClickInfo(index)}>{info.info}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-xl-8 col-lg-8 col-md-7 col-sm-12 col-12 user__content--detail">
          <div className="user__content--detail__title">
            <span>{nameInfo}</span>
          </div>
          <div className="user__content--detail__content">
            {pageInfo === "information" && <Information user={user} />}
            {pageInfo === "orderlist" && <OrderList user={user} />}
            {pageInfo === "address" && <Address user={user} />}
          </div>
        </div>
      </div>
    </div>
  );
}
