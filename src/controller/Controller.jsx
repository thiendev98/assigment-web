import { useState } from "react";
import $ from "jquery";
import Home from "../view/components/Home";
import TShirt from "../view/components/TShirt";
import Shirt from "../view/components/Shirt";
import Skirt from "../view/components/Skirt";
import Vest from "../view/components/Vest";
import Cart from "../view/components/Cart";
import Trousers from "../view/components/Trousers";
import Login from "./Login";
import User from "../view/user/User";
import Search from "../view/components/Search";
import { loadAnimation } from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";
import {
  FaFacebook,
  FaTiktok,
  FaInstagram,
  FaTwitter,
  FaBars,
} from "react-icons/fa";
import "./styles/style.css";
import logo from "./images/logo.png";
import shirt from "./images/shirt.jpg";
import skirt from "./images/skirt.jpg";
import trousers from "./images/trousers.jpg";
import vest from "./images/vest.jpg";
import tshirt from "./images/tshirt.jpg";
defineLordIconElement(loadAnimation);
const PAGE_HOME = "home";
const PAGE_VEST = "vest";
const PAGE_SHIRT = "shirt";
const PAGE_TSHIRT = "tshirt";
const PAGE_SKIRT = "skirt";
const PAGE_TROUSERS = "trousers";
const PAGE_CART = "cart";
export default function Controller({ setAdmin }) {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_HOME);
  const [user, setUser] = useState({
    key: "",
    login: false,
    name: "",
    userName: "",
    phone: "",
    email: "",
    password: "",
    avatar: null,
    cart: Object,
    address: "",
  });
  const [userCustomer, setUserCustomer] = useState([]);
  const [searchProduct, setSearchProduct] = useState("");
  //

  //
  const nextPage = (pages) => {
    setSearchProduct("");
    setPage(pages);
  };
  const nextPageSideBar = (pages) => {
    hideSideBars();
    setSearchProduct("");
    setPage(pages);
  };
  const handleLogin = () => {
    user.login
      ? nextPage("userInformation")
      : $("#LoginPage").css("display", "block") &&
        $(".form--warning").css("display", "none");
  };
  const searchProductFunction = () => {
    if (searchProduct === "") {
      setPage(PAGE_HOME);
    } else {
      setPage("searchPage");
      $(".search__header").css("display", "flex");
      $(".product__header").css("display", "none");
    }
  };
  const showSideBars = () => {
    $(".background__sidebars").css("display", "block");
    $(".sidebar__list").css("transform", "translateX(0)");
  };
  const hideSideBars = () => {
    $(".background__sidebars").css("display", "none");
    $(".sidebar__list").css("transform", "translateX(-100%)");
  };
  const sideBarList = [
    {
      key: 1,
      name: "Áo phông",
      type: "shirt",
      img: shirt,
    },
    {
      key: 2,
      name: "Áo sơ mi",
      type: "tshirt",
      img: tshirt,
    },
    {
      key: 3,
      name: "Quần nữ",
      type: "trousers",
      img: trousers,
    },
    {
      key: 4,
      name: "Chân váy",
      type: "skirt",
      img: skirt,
    },
    {
      key: 5,
      name: "Vest",
      type: "vest",
      img: vest,
    },
  ];
  const aboutLoza = [
    {
      title: "Introduce",
      content: "Giới thiệu",
    },
    {
      title: "sales",
      content: "Tin khuyến mãi",
    },
    {
      title: "notification",
      content: "Thông báo",
    },
  ];
  const supportCustomer = [
    {
      title: "size",
      content: "Hướng dẫn chọn size",
    },
    {
      title: "returnPolicy",
      content: "Chính sách đổi trả",
    },
    {
      title: "delivery",
      content: "Thanh toán và giao nhận",
    },
    {
      title: "security",
      content: "Chính sách bảo mật",
    },
    {
      title: "terms",
      content: "Điều khoản website",
    },
  ];
  const infoContact = [
    {
      logo: "https://bizweb.dktcdn.net/100/438/408/themes/848101/assets/map.svg?1645868209648",
      info: "Khu TMDV Trung Văn 1 - Nam Từ Liêm - Hà Nội ",
    },
    {
      logo: "https://bizweb.dktcdn.net/100/438/408/themes/848101/assets/phone.svg?1645868209648",
      info: "Hotline: 0981.475.666 ",
    },
    {
      logo: "https://bizweb.dktcdn.net/100/438/408/themes/848101/assets/email.svg?1645868209648",
      info: "sale@loza.vn",
    },
  ];
  return (
    <div id="Controller">
      <div id="header">
        <div className="navbar row container-fluid">
          <div
            className="navbar__logo col-xl-1 col-lg-2 col-md-2 col-sm-2 col-3"
            onClick={() => {
              nextPage(PAGE_HOME);
            }}
          >
            <img className="logo--img" src={logo} />
          </div>
          <ul className="navbar__list col-xl-5 col-lg-0 col-md-0 col-sm-0 col-0">
            {sideBarList.map((list, index) => (
              <li
                key={index}
                className="navbar__link"
                onClick={() => nextPage(`${list.type}`)}
              >
                {list.name}
              </li>
            ))}
          </ul>
          <div className="col-xl-1 col-lg-0 col-md-0 col-sm-0 col-0"></div>
          <div className="navbar__search col-xl-4 col-lg-8 col-md-8 col-sm-7 col-6">
            <input
              className="search__in"
              type="text"
              placeholder="Tìm sản phẩm"
              onChange={(event) => {
                $(".search__header").css("display", "flex");
                setSearchProduct(event.target.value);
              }}
              value={searchProduct}
              onKeyPress={(event) =>
                event.key === "Enter" ? searchProductFunction() : ""
              }
            />
            <button
              className="btn btn--search"
              onClick={() => searchProductFunction()}
            >
              <img src="https://bizweb.dktcdn.net/100/438/408/themes/848101/assets/search.svg" />
            </button>
          </div>
          <ul className="navbar__user col-xl-1 col-lg-1 col-md-1 col-sm-2 col-2">
            <li className="user--customer">
              <lord-icon
                onClick={() => handleLogin()}
                trigger=""
                src="https://cdn.lordicon.com/dxjqoygy.json"
              ></lord-icon>
              <Login
                user={user}
                setUser={setUser}
                userCustomer={userCustomer}
                setUserCustomer={setUserCustomer}
                nextPage={nextPage}
                setAdmin={setAdmin}
              />
            </li>
            <li className="user--cart">
              <lord-icon
                src="https://cdn.lordicon.com/slkvcfos.json"
                trigger="hover"
                onClick={() => nextPage(PAGE_CART)}
              ></lord-icon>
              <span>{cart.length}</span>
            </li>
          </ul>
          <div className="col-xl-0 col-lg-1 col-md-1 col-sm-1 col-1 bars__list--product">
            <FaBars className="icon__bars" onClick={() => showSideBars()} />
            <div
              className="background__sidebars"
              onClick={() => hideSideBars()}
            ></div>
            <div className="sidebar__list">
              <div className="sidebar__logo">
                <img
                  className="sidebar__logo--img"
                  src={logo}
                  onClick={() => nextPageSideBar("home")}
                />
              </div>
              <ul className="sidebar__link">
                {sideBarList.map((list, index) => (
                  <li key={index} className="sidebar__link--item">
                    <img className="sidebar__link--item__img" src={list.img} />
                    <span
                      onClick={() => {
                        nextPageSideBar(`${list.type}`);
                      }}
                    >
                      {list.name}
                    </span>
                  </li>
                ))}
                <li className="sidebar__link--item item__icon">
                  <img
                    className="sidebar__link--item__img"
                    src="https://thumbs.dreamstime.com/b/user-icon-trendy-flat-style-isolated-grey-background-user-symbol-user-icon-trendy-flat-style-isolated-grey-background-123663211.jpg"
                  />
                  <span>{user.login ? "Tài khoản" : "Đăng nhập"}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div id="content--controller">
        {page === PAGE_HOME && <Home nextPage={nextPage} />}
        {page === PAGE_SKIRT && (
          <Skirt
            cart={cart}
            setCart={setCart}
            nextPage={nextPage}
            user={user}
          />
        )}
        {page === PAGE_SHIRT && (
          <Shirt
            cart={cart}
            setCart={setCart}
            nextPage={nextPage}
            user={user}
          />
        )}
        {page === PAGE_TROUSERS && (
          <Trousers
            cart={cart}
            setCart={setCart}
            nextPage={nextPage}
            user={user}
          />
        )}
        {page === PAGE_VEST && (
          <Vest cart={cart} setCart={setCart} nextPage={nextPage} user={user} />
        )}
        {page === PAGE_TSHIRT && (
          <TShirt
            cart={cart}
            setCart={setCart}
            nextPage={nextPage}
            user={user}
          />
        )}
        {page === PAGE_CART && (
          <Cart
            cart={cart}
            setCart={setCart}
            nextPage={nextPage}
            onClick={handleLogin}
            user={user}
          />
        )}
        {page === "searchPage" && (
          <Search
            cart={cart}
            setCart={setCart}
            setPage={setPage}
            user={user}
            searchProduct={searchProduct}
            setSearchProduct={setSearchProduct}
          />
        )}
        {page === "userInformation" && (
          <User
            user={user}
            setUser={setUser}
            nextPage={nextPage}
            cart={cart}
            setCart={setCart}
          />
        )}
      </div>
      {/*  */}
      <div id="footer">
        <div className="footer row container-fluid">
          <div className="col-xl-4 col-lg-4 col-md-12 footer__logo">
            <p>
              “Website đang trong quá trình vận hành thử nghiệm. Quý khách gặp
              sự cố cần phản ánh có thể gọi/zalo tới 0981.475.666 để được hỗ
              trợ. Rất mong nhận được sự thông cảm. Trân trọng!”
            </p>
            <ul className="footer__list row container-fluid col-xl-8">
              <li className="footer__link col-xl-1 col-lg-1">
                <FaFacebook className="icon" />
              </li>
              <li className="footer__link col-xl-1 col-lg-1">
                <FaInstagram className="icon" />
              </li>
              <li className="footer__link col-xl-1 col-lg-1">
                <FaTwitter className="icon" />
              </li>
              <li className="footer__link col-xl-1 col-lg-1">
                <FaTiktok className="icon" />
              </li>
            </ul>
          </div>
          <ul className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-5 footer__about">
            <li style={{ textTransform: "uppercase", fontWeight: "600" }}>
              Về Loza
            </li>
            {aboutLoza.map((about) => (
              <li key={about.key} className="about--item">
                {about.content}
              </li>
            ))}
          </ul>
          <ul className="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6 footer__support">
            <li style={{ textTransform: "uppercase", fontWeight: "600" }}>
              Hỗ trợ khách hàng
            </li>
            {supportCustomer.map((support, index) => (
              <li key={index} className="support--item">
                {support.content}
              </li>
            ))}
          </ul>
          <ul className="col-xl-4 col-lg-4 col-md-6 col-sm-10 col-12 footer__info">
            {infoContact.map((info, index) => (
              <li key={index} className="info--item">
                <img className="info--item__img" src={info.logo} />
                {info.info}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
