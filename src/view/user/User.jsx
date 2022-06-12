import React, { useState } from "react";
import $ from "jquery";
import OrderList from "./OrderList";
import Information from "./Information";
import "../styles/style.css";
import { FaTimes } from "react-icons/fa";
import save from "../images/save.png";
import cancel from "../images/cancel.png";
export default function User({ user, setUser, nextPage, cart, setCart }) {
  const [pageInfo, setPageInfo] = useState("information");
  const [editInfo, setEditInfo] = useState("information");
  const [nameInfo, setnameInfo] = useState("Thông tin cá nhân");
  const [isEdit, setIsEdit] = useState(false);
  const [indexEdit, setIndexEdit] = useState(99);
  const handleClickInfo = (index) => {
    if (index === 0) {
      setnameInfo("Thông tin cá nhân");
      setPageInfo("information");
    } else if (index === 1) {
      setnameInfo("Đơn hàng của bạn");
      setPageInfo("orderlist");
    }
  };
  const handleEditClick = (index) => {
    if (index === 0) setEditInfo("information");
    else if (index === 1) setEditInfo("password");
  };
  const handleEditInfomation = () => {
    $(".users__edit--infomation").fadeIn("1500");
  };
  const handleHideFormEdit = () => {
    $(".users__edit--infomation").fadeOut("1000");
  };
  const handleEditChange = (index) => {
    setIsEdit(true);
    setIndexEdit(index);
  };
  const handleCancelEdit = () => {
    setIsEdit(false);
    setIndexEdit(99);
  };
  const listInfomation = [
    {
      title: "Họ và tên:",
      name: user.name,
    },
    {
      title: "Số điện thoại:",
      name: `0${user.phone}`,
    },
    {
      title: "Địa chỉ email:",
      name: user.email,
    },

    {
      title: "Địa chỉ giao hàng:",
      name: user.address,
    },
  ];
  const listInfo = [
    {
      key: 1,
      img: "https://bizweb.dktcdn.net/100/438/408/themes/848101/assets/acc_user_1_hover.svg",
      info: "Thông tin cá nhân",
      edit: "Chỉnh sửa",
    },
    {
      key: 2,
      img: "https://bizweb.dktcdn.net/100/438/408/themes/848101/assets/acc_user_2_hover.svg",
      info: "Danh sách đơn hàng",
    },
  ];
  const listTiltte = [
    {
      key: "1",
      title: "Thông tin cá nhân",
    },
    {
      key: "2",
      title: "Đổi mật khẩu",
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
                setTimeout(() => {
                  setUser({});
                  nextPage("home");
                  setCart([]);
                }, 1000);
              }}
            >
              Đăng xuất
            </button>
          </div>
          <ul className="user__content--list__info">
            {listInfo.map((info, index) => (
              <li key={index}>
                <img src={info.img} alt="avatar" />
                <span onClick={() => handleClickInfo(index)}>{info.info}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-xl-8 col-lg-8 col-md-7 col-sm-12 col-12 user__content--detail">
          <div className="user__content--detail__title">
            <span>{nameInfo}</span>
            {nameInfo === "Thông tin cá nhân" ? (
              <button onClick={() => handleEditInfomation()}>Chỉnh sửa</button>
            ) : (
              ""
            )}
          </div>
          <div className="user__content--detail__content">
            {pageInfo === "information" && (
              <Information user={user} listInfomation={listInfomation} />
            )}
            {pageInfo === "orderlist" && <OrderList user={user} />}
            <div className="users__edit--infomation">
              <div className="users__edit--infomation--form">
                <FaTimes
                  onClick={() => handleHideFormEdit()}
                  className="icon"
                />
                <div className="row container-fluid">
                  <div className="col-xl-4 infomation--form__title">
                    <div className="infomation--form__title--image">
                      <img
                        alt="avatar"
                        src="https://i.pinimg.com/236x/a8/3f/c7/a83fc7871e75ca709d3107e0115af253.jpg"
                      />
                    </div>
                    <div className="infomation--form__title--title">
                      {listTiltte.map((titile, index) => (
                        <p
                          onClick={() => handleEditClick(index)}
                          key={titile.key}
                        >
                          {titile.title}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="col-xl-8 infomation--form__content">
                    {editInfo === "information" && (
                      <div className="infomation--form__content--info">
                        {listInfomation.map((info, index) => (
                          <div key={index}>
                            <span
                              onDoubleClick={() => handleEditChange(index)}
                              className="infomation--form__content--info--title"
                            >
                              {info.title}
                            </span>
                            {isEdit && index === indexEdit && (
                              <p className="infomation--form__content--info--edit">
                                <input
                                  autoFocus
                                  type="text"
                                  value={info.name}
                                />
                                <img alt="img" src={save} />
                                <img
                                  onClick={() => handleCancelEdit()}
                                  alt="img"
                                  src={cancel}
                                />
                              </p>
                            )}
                            {index !== indexEdit && (
                              <p
                                className="infomation--form__content--info--name"
                                onDoubleClick={() => handleEditChange(index)}
                              >
                                {info.name}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                    {editInfo === "password" && (
                      <div className="infomation--form__content--password">
                        <span>Mật khẩu hiện tại:</span>
                        <p>
                          <input type="password" />
                        </p>
                        <span>Mật khẩu thay đổi:</span>
                        <p>
                          <input type="password" />
                        </p>
                        <span>Xác nhận mật khẩu:</span>
                        <p>
                          <input type="password" />
                        </p>
                        <button>Xác nhận</button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
