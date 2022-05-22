import React from "react";
import "../styles/style.css";
import HomeList from "../HomeList";
import Product from "./Product";
export default function SearchPage({
  cart,
  setCart,
  setPage,
  user,
  searchProduct,
  setSearchProduct,
}) {
  const getProducts = () => {
    return HomeList.filter((product) =>
      product.name
        .toLocaleLowerCase()
        .includes(searchProduct.toLocaleLowerCase())
    );
  };
  return (
    <div id="SearchPage">
      <div className="search__header">
        <span>
          <span className="search__header--home">Trang chủ</span>
          <span> / </span>
          <span className="search__header--search">Tìm kiếm</span>
        </span>
        <p>
          Kết quả tìm kiếm sản phẩm
          {searchProduct.length === 0 ? "" : <span>"{searchProduct}"</span>}
        </p>
      </div>
      {getProducts().length === 0 && (
        <div className="search__empty">
          <img
            className="search__empty--image"
            src="https://bizweb.dktcdn.net/100/438/408/themes/848101/assets/search-page.svg?1646731994406"
          />
          <p className="search__empty--result">
            Tìm kiếm <span>{searchProduct}</span> của bạn không có kết quả phù
            hợp
          </p>
          <p className="search__empty--again">Hãy thử lại cách khác như</p>
          <span>Sử dụng thuật ngữ chung nhiều hơn</span>
          <span>Kiểm tra chính tả của bạn</span>
        </div>
      )}
      {getProducts().length > 0 && (
        <Product
          cart={cart}
          setCart={setCart}
          setPage={setPage}
          ProductList={getProducts()}
          user={user}
          value="search"
        />
      )}
    </div>
  );
}
