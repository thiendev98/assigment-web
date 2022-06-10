// import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
// import Home from '../components/Home'
// import ListProducts from './Products/ListProducts';
// import ListUsers from './Users/ListUsers';
// import ListOrders from './Orders/ListOrders';
// import Layout from './Layout';

// function Admin() {
//   return (
//     // <div className="container row">
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             <Route index element={<Home />} />
//             <Route path="listProducts" element={<ListProducts />} />
//             <Route path="listUsers" element={<ListUsers />} />
//             <Route path="listOrders" element={<ListOrders />} />
//           </Route>   
//         </Routes>
//       </BrowserRouter>
//     // </div>
  
//     // <div className="App" style={{textAlign: "center"}}>
//     //   <h1 style={{marginTop: "20px"}}>DANH SÁCH KHÁCH HÀNG</h1>

//     //   <BrowserRouter>
//     //     <nav>
//     //       <ul>
//     //         <li style={{display: "inline-block", padding: "10px"}}>
//     //           <Link className="btn btn-primary" to="/">List Users</Link>
//     //         </li>
//     //       </ul>
//     //     </nav>
//     //     <Routes>
//     //       <Route index element={<ListUser />} />
//     //     </Routes>
//     //   </BrowserRouter>
//     // </div>
//   );
// }

// export default Admin;

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
//import './App.css';
import CreateProduct from './Products/CreateProduct';
import EditProduct from './Products/EditProduct';
import ListProduct from './Products/ListProduct';

function ListProducts() {
  return (
    <div className="App" style={{textAlign: "center"}}>
      <h1 style={{marginTop: "20px"}}>List Products</h1>

      <BrowserRouter>
        <nav>
          <ul>
            <li style={{display: "inline-block", padding: "10px"}}>
              <Link className="btn btn-primary" to="/">List Products</Link>
            </li>
            <li style={{display: "inline-block", padding: "10px"}}>
              <Link className="btn btn-success" to="product/create">Create Product</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route index element={<ListProduct />} />
          <Route path="product/create" element={<CreateProduct />} />
          <Route path="product/:id/edit" element={<EditProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default ListProducts;



