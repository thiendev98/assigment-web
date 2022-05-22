import React, { useState } from "react";
import "./styles/style.css";
import $ from "jquery";
import axios from "axios";
import { FaGooglePlusG, FaTimes } from "react-icons/fa";
export default function Login({ user, setUser, nextPage, setAdmin }) {
  const [login, setLogin] = useState(true);
  const adminUser = [
    {
      userName: "admin",
      password: "123456",
    },
    {
      userName: "lozashop",
      password: "123456",
    },
  ];
  const customerUser = [
    {
      userName: "customer",
      password: "123456",
    },
    {
      userName: "client",
      password: "123456",
    },
  ];
  const [loginAccount, setLoginAccount] = useState({
    userName: "",
    password: "",
  });
  const [registerAccount, setRegisterAccount] = useState({
    name: "",
    userName: "",
    phone: "",
    email: "",
    password: "",
  });

  const buttonRegister = () => {
    // const registerData = new FormData();
    // registerData.append("name", registerAccount.name);
    // registerData.append("userName", registerAccount.userName);
    // registerData.append("phone", registerAccount.phone);
    // registerData.append("email", registerAccount.email);
    // registerData.append("password", registerAccount.password);
    // let url = "http://127.0.0.1:8000/";
    // axios
    //   .post(url, registerData, {
    //     headers: {
    //       "content-type": "multipart/form-data",
    //     },
    //   })
    //   .then((response) => console.log(response.data))
    //   .catch((err) => console.log(err));
  };
  const buttonLogin = () => {
    adminUser.forEach((admin) => {
      if (
        admin.userName === loginAccount.userName &&
        admin.password === loginAccount.password
      ) {
        $("#LoginPage").css("display", "none");
        setAdmin(true);
      } else {
        $(".form--warning").css("display", "flex");
      }
    });
    customerUser.forEach((customer) => {
      console.log(customer);
      if (
        customer.userName === loginAccount.userName &&
        customer.password === loginAccount.password
      ) {
        $("#LoginPage").css("display", "none");
        setUser(true);
        nextPage("home");
      } else {
        $(".form--warning").css("display", "flex");
      }
    });
  };
  return (
    <div id="LoginPage">
      {login === true && (
        <div className="row container-fluid">
          <div className="form--login">
            <FaTimes
              className="icon__cancel"
              onClick={() => {
                $("#LoginPage").css("display", "none");
                setLogin(true);
              }}
            />
            <h4>Đăng nhập</h4>
            <span className="form--warning">
              Email hoặc mật khẩu không chính xác
            </span>
            <div className="form--item">
              <label>Tên đăng nhập</label>
              <input
                type="text"
                name="userName"
                placeholder="Nhập email hoặc số điện thoại"
                onChange={(event) =>
                  setLoginAccount({
                    ...loginAccount,
                    userName: event.target.value,
                  })
                }
                value={loginAccount.userName}
              />
            </div>
            <div className="form--item">
              <label>Mật khẩu</label>
              <input
                type="password"
                name="password"
                placeholder="Mật khẩu"
                onChange={(event) =>
                  setLoginAccount({
                    ...loginAccount,
                    password: event.target.value,
                  })
                }
                value={loginAccount.password}
                required
                onKeyPress={(event) =>
                  event.key === "Enter" ? buttonLogin() : ""
                }
              />
            </div>
            <button className="button--login" onClick={() => buttonLogin()}>
              Đăng nhập
            </button>
            <div className="form--login__select">
              <span>Hoặc</span>
            </div>
            <button className="button--login__gg">
              <FaGooglePlusG className="icon__gg" />
              <span> Đăng nhập bằng google</span>
            </button>
            <ul className="row container-fluid">
              <li className="col-6">
                <span onClick={() => setLogin(false)}>
                  Đăng ký tài khoản mới
                </span>
              </li>
              <li className="col-6">
                <span style={{ float: "right" }}>Quên mật khẩu?</span>
              </li>
            </ul>
          </div>
        </div>
      )}
      {login === false && (
        <div className="row container-fluid">
          <div className="form--register">
            <FaTimes
              className="icon__cancel"
              onClick={() => {
                $("#LoginPage").css("display", "none");
                setLogin(true);
              }}
            />
            <h4>Đăng ký</h4>
            <div className="form--item">
              <label>Họ tên</label>
              <input
                type="text"
                placeholder="Họ tên..."
                onChange={(event) =>
                  setRegisterAccount({
                    ...registerAccount,
                    name: event.target.value,
                  })
                }
                value={registerAccount.name}
                required
              />
            </div>
            <div className="form--item">
              <label>Tên đăng nhập</label>
              <input
                type="text"
                placeholder="Tên đăng nhập..."
                onChange={(event) =>
                  setRegisterAccount({
                    ...registerAccount,
                    userName: event.target.value,
                  })
                }
                value={registerAccount.userName}
                required
              />
            </div>
            <div className="form--item">
              <label>Số điện thoại</label>
              <input
                type="text"
                placeholder="Số điện thoại..."
                onChange={(event) =>
                  setRegisterAccount({
                    ...registerAccount,
                    phone: event.target.value,
                  })
                }
                value={registerAccount.phone}
                required
              />
            </div>
            <div className="form--item">
              <label>Email</label>
              <input
                type="text"
                placeholder="Email..."
                onChange={(event) =>
                  setRegisterAccount({
                    ...registerAccount,
                    email: event.target.value,
                  })
                }
                value={registerAccount.email}
                required
              />
            </div>
            <div className="form--item">
              <label>Mật khẩu</label>
              <input
                type="password"
                placeholder="Mật khẩu..."
                onChange={(event) =>
                  setRegisterAccount({
                    ...registerAccount,
                    password: event.target.value,
                  })
                }
                value={registerAccount.password}
                required
              />
            </div>
            <button
              className="button--register"
              onClick={() => buttonRegister()}
            >
              Đăng ký
            </button>
            <p>
              {`Bạn đã có tài khoản? `}
              <span onClick={() => setLogin(true)}>Đăng nhập ngay</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
