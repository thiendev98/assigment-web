import axios from "axios";
import React, { useState } from "react";
import $ from "jquery";
import { toast } from "react-toastify";
import OrderList from "./OrderList";
import Information from "./Information";
import "../styles/style.css";
import { FaTimes } from "react-icons/fa";
import save from "../images/save.png";
import cancel from "../images/cancel.png";
import { toastNotifySuccess } from "../components/Cart";
export default function User({
  user,
  setUser,
  nextPage,
  cartUser,
  setCartUser,
}) {
  const [pageInfo, setPageInfo] = useState("information");
  const [editInfo, setEditInfo] = useState("information");
  const [nameInfo, setnameInfo] = useState("Thông tin cá nhân");
  const [isEdit, setIsEdit] = useState(false);
  const [userUpdate, setUserUpdate] = useState(user);
  const [indexEdit, setIndexEdit] = useState(99);
  const [avatarUpdate, setAvatarUpdate] = useState(userUpdate.avatar);
  const [changePassword, setChangePassword] = useState({
    old: "",
    new: "",
    confirm: "",
  });
  const toastNotifyError = (value) => {
    toast.info(value, {
      autoClose: 2000,
      type: "error",
      position: "top-center",
    });
  };
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
  const handleSaveClick = () => {
    setIndexEdit(99);
    setIsEdit(true);
  };
  const listInfomation = [
    {
      title: "Họ và tên:",
      name: userUpdate.name,
    },
    {
      title: "Số điện thoại:",
      name: userUpdate.phone,
    },
    {
      title: "Địa chỉ email:",
      name: userUpdate.email,
    },

    {
      title: "Địa chỉ giao hàng:",
      name: userUpdate.address,
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
  const handleUserUpdateChange = (event) => {
    if (indexEdit === 0) {
      setUserUpdate({ ...userUpdate, name: event.target.value });
    } else if (indexEdit === 1)
      setUserUpdate({ ...userUpdate, phone: event.target.value });
    else if (indexEdit === 2)
      setUserUpdate({ ...userUpdate, email: event.target.value });
    else if (indexEdit === 3)
      setUserUpdate({ ...userUpdate, address: event.target.value });
  };
  const checkedPasswordClick = () => {
    const patternPassword =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9@#$%^&*]{8,15}$/;
    if (changePassword.old !== user.password) {
      toastNotifyError("Mật khẩu hiện tại không chính xác");
    } else if (!patternPassword.test(changePassword.new)) {
      toastNotifyError("Mật khẩu mới không hợp lệ");
    } else if (changePassword.confirm !== changePassword.new) {
      toastNotifyError("Xác nhận mật khẩu không chính xác");
    } else {
      setUserUpdate({ ...userUpdate, password: changePassword.new });
      ///
      axios
        .post(
          `http://localhost/assigment-web/src/php/insert.php/${userUpdate.key}/editpassword`,
          userUpdate
        )
        .then(function (response) {
          console.log(response);
        });
      toastNotifySuccess("Thay đổi mật khẩu thành công");
    }
  };
  const handleConfirmOnChange = () => {
    // console.log(userUpdate.key);
    // console.log(userUpdate);
    axios
      .post(
        `http://localhost/assigment-web/src/php/insert.php/${userUpdate.key}/edit`,
        userUpdate
      )
      .then(function (response) {});
    setUser(userUpdate);
    setTimeout(() => {
      handleHideFormEdit();
    }, 500);
  };
  return (
    <div id="UserPage">
      <div className="user__header">
        <span>Thông tin tài khoản</span>
      </div>
      <div className="user__content row container-fluid">
        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12 user__content--list">
          <div className="user__content--list__img">
            {!user.avatar ? (
              <img
                className="list__img--avatar"
                src="https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png"
                alt="avatar"
              />
            ) : (
              <img
                className="list__img--avatar"
                src={user.avatar}
                alt="avatar"
              />
            )}
            <p>{user.name}</p>
            <button
              onClick={() => {
                setTimeout(() => {
                  setUser({});
                  nextPage("home");
                  setCartUser([]);
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
              <Information listInfomation={listInfomation} />
            )}
            {pageInfo === "orderlist" && <OrderList cartUser={cartUser} />}
            <div className="users__edit--infomation">
              <div className="users__edit--infomation--form">
                <FaTimes
                  onClick={() => handleHideFormEdit()}
                  className="icon"
                />
                <div className="row container-fluid">
                  <div className="col-xl-4 infomation--form__title">
                    <div className="infomation--form__title--image">
                      {avatarUpdate.length === 0 ? (
                        <img
                          alt="avatar"
                          src="https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png"
                        />
                      ) : (
                        <img alt="avatarUpdate" src={avatarUpdate} />
                      )}
                      <input
                        type="file"
                        onChange={(event) => {
                          console.log(event.target.value);
                          console.log(typeof event.target.value);
                          setAvatarUpdate(event.target.value);
                        }}
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
                                  onChange={(event) =>
                                    handleUserUpdateChange(event)
                                  }
                                />
                                <img
                                  alt="img"
                                  src={save}
                                  onClick={() => handleSaveClick()}
                                />
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
                        <button onClick={() => handleConfirmOnChange()}>
                          Xác nhận
                        </button>
                      </div>
                    )}
                    {editInfo === "password" && (
                      <div className="infomation--form__content--password">
                        <span>Mật khẩu hiện tại:</span>
                        <p>
                          <input
                            type="password"
                            placeholder="Nhập mật khẩu hiện tại"
                            onChange={(event) =>
                              setChangePassword({
                                ...changePassword,
                                old: event.target.value,
                              })
                            }
                          />
                        </p>
                        <span>Mật khẩu thay đổi:</span>
                        <p>
                          <input
                            type="password"
                            placeholder="Nhập mật khẩu muốn thay đổi"
                            onChange={(event) =>
                              setChangePassword({
                                ...changePassword,
                                new: event.target.value,
                              })
                            }
                          />
                        </p>
                        <span>Xác nhận mật khẩu:</span>
                        <p>
                          <input
                            type="password"
                            placeholder="Xác nhận mật khẩu"
                            onChange={(event) =>
                              setChangePassword({
                                ...changePassword,
                                confirm: event.target.value,
                              })
                            }
                          />
                        </p>
                        <button onClick={() => checkedPasswordClick()}>
                          Xác nhận
                        </button>
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
