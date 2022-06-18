import axios from "axios";
import React, { useEffect, useState } from "react";
import $ from "jquery";
import { toast } from "react-toastify";
import OrderList from "./OrderList";
import Information from "./Information";
import { toastNotifySuccess } from "../components/Cart";
import "../styles/style.css";
import { FaTimes } from "react-icons/fa";
import save from "../images/save.png";
import cancel from "../images/cancel.png";
import upload from "../images/upload.png";
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
  const [userUpdate, setUserUpdate] = useState(user);
  const [isEdit, setIsEdit] = useState(false);
  const [indexEdit, setIndexEdit] = useState(99);
  const [isLoading, setIsLoading] = useState(false);
  const [avatarUpdate, setAvatarUpdate] = useState();
  const [isChangePassword, setIsChangePassword] = useState(false);
  const [changePassword, setChangePassword] = useState({
    old: "",
    new: "",
    confirm: "",
  });
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
    if (indexEdit === 0) setUserUpdate({ ...userUpdate, name: user.name });
    else if (indexEdit === 1)
      setUserUpdate({ ...userUpdate, phone: user.phone });
    else if (indexEdit === 2)
      setUserUpdate({ ...userUpdate, email: user.email });
    setIsEdit(false);
    setIndexEdit(99);
  };
  const checkedNameVietnamese = (name) => {
    if (name === null || name === undefined) return name;
    name = name.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    name = name.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    name = name.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    name = name.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    name = name.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    name = name.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    name = name.replace(/đ/g, "d");
    return name;
  };
  const checkedValueUser = () => {
    const patternName = /^[a-z A-Z!@#$%^&*)(+=._-]{6,}$/g;
    const patternEmail = /^[A-Za-z_.]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
    const patternPhone = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;
    if (!patternName.test(checkedNameVietnamese(userUpdate.name))) {
      toastNotifyError("Tên chưa hợp lệ");
      return false;
    } else if (!patternEmail.test(userUpdate.email)) {
      toastNotifyError("Email không hợp lệ");
      return false;
    } else if (!patternPhone.test(userUpdate.phone)) {
      toastNotifyError("Số điện thoại khộng hợp lệ");
      return false;
    } else return true;
  };
  const handleSaveClick = () => {
    if (checkedValueUser()) {
      setIndexEdit(99);
      setIsEdit(true);
    }
  };
  const handleAvatarFileChange = (event) => {
    setAvatarUpdate(event.target.files[0].name);
    const formData = new FormData();
    formData.append("avatar", event.target.files[0]);
    axios
      .post(
        `http://localhost/assigment-web/src/php/insert.php/${userUpdate.key}/editAvatar`,
        formData
      )
      .then(function (response) {});
    setIsLoading(true);
  };

  useEffect(() => {
    if (isLoading) setUserUpdate({ ...userUpdate, avatar: avatarUpdate });
    return () => {
      setIsLoading(false);
    };
  }, [isLoading]);
  
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
  useEffect(() => {
    if (isChangePassword)
    {
      setUser({ ...user, password: changePassword.new });
    }    return () => {
      setIsChangePassword(false);
    };
  }, [isChangePassword]);
  
  const checkedPasswordClick = () => {
    const patternPassword =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9@#$%^&*]{8,15}$/;
    if (changePassword.old !== user.password) {
      console.log(changePassword.old);
      console.log(user.password);
      toastNotifyError("Mật khẩu hiện tại không chính xác");
    } else if (!patternPassword.test(changePassword.new)) {
      toastNotifyError("Mật khẩu mới không hợp lệ");
    } else if (changePassword.confirm !== changePassword.new) {
      toastNotifyError("Xác nhận mật khẩu không chính xác");
    } else {
      const password = {
        password: changePassword.new
      }
      axios
      .post(
        `http://localhost/assigment-web/src/php/insert.php/${userUpdate.key}/editpassword`,
        password
        )
        .then(function (response) {});
        setIsChangePassword(true);
        toastNotifySuccess("Thay đổi mật khẩu thành công");
        setTimeout(() => {
          setChangePassword({ ...changePassword, old: "", new: "", confirm: "" });
          $(".users__edit--infomation").fadeOut("1000");
        }, 4000);
      }
    };
    const handleConfirmOnChange = () => {
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
            {userUpdate.avatar && (
              <img
                className="list__img--avatar"
                src={`http://localhost/assigment-web/src/php/image/${userUpdate.avatar}`}
                alt="avatar"
              />
            )}
            {userUpdate.avatar.toString().length === 0 && (
              <img
                className="list__img--avatar"
                src="https://toppng.com/uploads/preview/user-account-management-logo-user-icon-11562867145a56rus2zwu.png"
                alt="avatar_avatar"
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
            {pageInfo === "orderlist" && <OrderList cartUser={cartUser} user={user}/>}
            <div className="users__edit--infomation">
              <div className="users__edit--infomation--form">
                <FaTimes
                  onClick={() => handleHideFormEdit()}
                  className="icon"
                />
                <div className="row container-fluid">
                  <div className="col-xl-4 infomation--form__title">
                    <div className="infomation--form__title--image">
                      {userUpdate.avatar && (
                        <img
                          className="infomation--form__title--image--img"
                          alt="avatar"
                          src={`http://localhost/assigment-web/src/php/image/${userUpdate.avatar}`}
                        />
                      )}
                      {userUpdate.avatar.toString().length === 0 && (
                        <img
                          className="infomation--form__title--image--img"
                          alt="avatar"
                          src="https://toppng.com/uploads/preview/user-account-management-logo-user-icon-11562867145a56rus2zwu.png"
                        />
                      )}
                      <div className="infomation--form__title--image--input">
                        <input
                          type="file"
                          name="avatar"
                          onChange={(event) => handleAvatarFileChange(event)}
                        />
                        <img src={upload} alt="upload" />
                      </div>
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
                                  value={info.name}
                                  type="text"
                                  onChange={(event) =>
                                    handleUserUpdateChange(event)
                                  }
                                  onKeyPress={(event) =>
                                    event.key === "Enter"
                                      ? handleSaveClick()
                                      : ""
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
                            value={changePassword.old}
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
                            value={changePassword.new}
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
                            value={changePassword.confirm}
                            placeholder="Xác nhận mật khẩu"
                            onChange={(event) =>
                              setChangePassword({
                                ...changePassword,
                                confirm: event.target.value,
                              })
                            }
                            onKeyPress={(event) =>
                              event.key === "Enter"
                                ? checkedPasswordClick()
                                : ""
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
