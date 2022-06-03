import React, { useState } from "react";
import "./styles/style.css";
import $ from "jquery";
import axios from "axios";
import { FaGooglePlusG, FaTimes } from "react-icons/fa";
import  handleForgot  from "./Forgot";
import GoogleLogin from 'react-google-login';
import { useGoogleLogin } from 'react-google-login';
import customerData from './customerData.json';

export default function Login({ user, setUser, nextPage, setAdmin }) {
  const handleFailure = (result) => {
    alert(result);
  };
  const handleLogin = (googleData) => {
    console.log(googleData);
   
  };
 
  const handleForgot=()=>{
    return (
        <div id="LoginPage">
        <div className="row container-fluid">
          <div className="form--register">
          <FaTimes
              className="icon__cancel"
              onClick={() => {
                $("#LoginPage").css("display", "none");
               
              }}
            />
           <h1 style={{color: "green"}}>GeeksForGeeks</h1>
            </div>
        </div>
        </div>
    );
};
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
  var customerUser = customerData;
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
   
    const obj ={
      name: registerAccount.name,
      userName:registerAccount.userName,
      email:registerAccount.email,
      phone:registerAccount.phone,
      password:registerAccount.password,
      
    };
    
    axios.post(`http://localhost/src/controller/insert.php`,obj)
    .then(res=> console.log(res.data))
    .catch(error => {
      console.log(error.response)
    });
    setRegisterAccount({
      name: '',
      userName: '',
      email:'',
      phone:'',
      password:'',
   
    })
    customerUser=customerData;
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

    /*const obj ={
      userName:loginAccount.userName,
      password:loginAccount.password,
      
    };
    axios.post(`http://localhost/src/controller/read.php`,obj)
    .then(
      (res) => {
        customerUser.forEach((customer) => {
          
          if (
            customer.userName === loginAccount.userName &&
            customer.password === loginAccount.password
          ) {
            console.log(customer);
            $("#LoginPage").css("display", "none");
            setUser(true);
            nextPage("home");
          } else {
            
            $(".form--warning").css("display", "flex");
          }
        });

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
      
    })
    .catch((error) => console.log(error.data))*/
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
              
            {/*<GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              buttonText="Đăng nhập bằng google"
              onSuccess={handleLogin}
              onFailure={handleFailure}
              cookiePolicy={'single_host_origin'}
              className='button--login__gg'
              />*/}
              
            
            <ul className="row container-fluid">
              <li className="col-6">
                <span onClick={() => setLogin(false)}>
                  Đăng ký tài khoản mới
                </span>
              </li>
              <li className="col-6">
                <span style={{ float: "right" }} onClick={() => handleForgot()}>Quên mật khẩu?</span>
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
