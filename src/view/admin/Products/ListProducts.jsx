import {BrowserRouter, Routes, Route, Link, Outlet} from 'react-router-dom';
//import './App.css';
import CreateProduct from './CreateProduct';
import EditProduct from './EditProduct';
import ListProduct from './ListProduct';

function ListProducts() {
  return (
    <div className="App" style={{textAlign: "center"}}>
      <h1 style={{marginTop: "20px"}}>List Products</h1>

      {/* <BrowserRouter> */}
        <nav>
          <ul>
            <li style={{display: "inline-block", padding: "10px"}}>
              <Link className="btn btn-primary" to="list">List Products</Link>
            </li>
            <li style={{display: "inline-block", padding: "10px"}}>
              <Link className="btn btn-success" to="create">Create Product</Link>
            </li>
          </ul>
        </nav>
        {/* <Routes>
          <Route index element={<ListProduct />} />
          <Route path="product/create" element={<CreateProduct />} />
          <Route path="product/:id/edit" element={<EditProduct />} />
        </Routes>
      </BrowserRouter> */}
      <Outlet />
    </div>
  );
}

export default ListProducts;

