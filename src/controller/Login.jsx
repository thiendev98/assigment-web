import React, { useEffect, useState } from "react";
import "./styles/style.css";
import $ from "jquery";
import axios from "axios";
import {v4 as uuidv4} from 'uuid'
import { FaGooglePlusG, FaTimes } from "react-icons/fa";
// import  handleForgot  from "./Forgot";
// import GoogleLogin from 'react-google-login';
// import { useGoogleLogin } from 'react-google-login';
import customerData from '../php/customerData.json';

export default function Login({ user, setUser, userCustomer, setUserCustomer, nextPage, setAdmin }) {
  const handleFailure = (result) => {
    alert(result);
  };
  const handleLogin = (googleData) => {
  //  console.log(googleData);
   
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
  useEffect(()=>{setUserCustomer(customerData)},[login])
  //var customerUser = customerData;
  
  const [loginAccount, setLoginAccount] = useState({
    userName: "",
    password: "",
  });
  const [registerAccount, setRegisterAccount] = useState({
    key: uuidv4(),
    login: Boolean,
    name: "",
    userName: "",
    phone: "",
    email: "",
    password: "",
    avatar: null,
    cart: null,
    address: "",
  });
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
  const checkErrorInForm = () => {
    const patternName = /^[a-z A-Z!@#\$%\^\&*\)\(+=._-]{6,}$/g;
    const patternUserName = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/;
    const patternEmail = /^[A-Za-z_.]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
    const patternPhone = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;
    const patternPassword =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9@#$%^&*]{8,15}$/;
    if (!patternName.test(checkedNameVietnamese(registerAccount.name))) {
      alert("Tên chưa hợp lệ");
      return false;
    } else if (!patternUserName.test(registerAccount.userName)) {
      alert("Tên đăng nhập chưa hợp lệ");
      return false;
    } else if (!patternPhone.test(registerAccount.phone)) {
      alert("Số điện thoại khộng hợp lệ");
      return false;
    } else if (!patternEmail.test(registerAccount.email)) {
      alert("Email không hợp lệ");
      return false;
    } else if (!patternPassword.test(registerAccount.password)) {
      alert("Mật khẩu không hợp lệ");
      return false;
    } else {
      alert("Đăng ký tài khoản thành công");
      return true;
    }
  };
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
    checkErrorInForm() &&
      setTimeout(() => {
       //
       const obj ={
        name: registerAccount.name,
        userName:registerAccount.userName,
        email:registerAccount.email,
        phone:registerAccount.phone,
        password:registerAccount.password,
        
      };
      
      axios.post(`http://localhost/assigment-web-demo/src/php/insert.php`,obj)
      .then(res=> {})
      .catch(error => {
        console.log(error.response)
      });
     
      setUserCustomer(customerData);

       //
        setRegisterAccount({});
        setLogin(true);
      }, 1500);
   
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
    userCustomer.forEach((customer) => {
      if (
        customer.userName === loginAccount.userName &&
        customer.password === loginAccount.password
      ) {
        $("#LoginPage").css("display", "none");
        customer.login = true;
        setUser(customer);
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
              Tên đăng nhập hoặc mật khẩu không chính xác
            </span>
            <div className="form--item">
              <label>Tên đăng nhập</label>
              <input
                type="text"
                name="userName"
                placeholder="Tên đăng nhập"
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
                placeholder="Từ 8-15 ký tự, ít nhất 1 chữ số và 1 ký tự đặc biệt."
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
                placeholder="Trên 6 ký tự"
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
                placeholder="Ít nhất 1 chữ số"
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
