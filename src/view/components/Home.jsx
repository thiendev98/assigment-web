import "../styles/style.css";
import Slider from "react-slick";
import background1 from "../images/background1.jpeg";
import background2 from "../images/background2.jpeg";
import HomeList from "../HomeList";
export default function Home({ nextPage }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 1500,
    cssEase: "linear",
  };
  const backgroundList = [background1, background2];
  return (
    <div id="HomePage">
      <div className="wrapper">
        <Slider {...settings}>
          {backgroundList.map((background) => (
            <img className="wapper__img" src={background} />
          ))}
        </Slider>
      </div>
      <div className="sales__list row container-fluid">
        <div className="sales__list--item item--border--right--1 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6 c-12">
          <p>
            <span className="item--decrease">Giảm</span>{" "}
            <span className="item--price">50K</span>
          </p>
          <p className="item--order">Đơn hàng từ 1000K</p>
        </div>
        <div className="sales__list--item item--border--right--2 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6 c-12">
          <p>
            <span className="item--decrease">Giảm</span>{" "}
            <span className="item--price">100K</span>
          </p>
          <p className="item--order">Đơn hàng từ 1750K</p>
        </div>
        <div className="sales__list--item item--border--right--3 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6 c-12">
          <p>
            <span className="item--decrease">Giảm</span>{" "}
            <span className="item--price">150K</span>
          </p>
          <p className="item--order">Đơn hàng từ 2000K</p>
        </div>
        <div className="sales__list--discount col-xl-3 col-lg-3 col-md-12 col-sm-12 col-6 c-12">
          <div className="item--discount">
            <p>Mã giảm giá</p>
            <span>Tự động theo hóa đơn</span>
          </div>
        </div>
      </div>
      <div className="container">
        <h3>Mua gì hôm nay?</h3>
        <ul className="home__content row container-fluid">
          {HomeList.map((product, i) => (
            <li className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6 c-12 home__content--item">
              <div className="item__list">
                <img
                  className="list__img"
                  src={product.link[0]}
                  onClick={() => nextPage(product.type)}
                />
                <img
                  className="list__img--hover"
                  src={product.link[1]}
                  onClick={() => nextPage(product.type)}
                />
              </div>
              <p onClick={() => nextPage(product.type)}>{product.name}</p>
              <span onClick={() => nextPage(product.type)}>
                {product.price} đ
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
