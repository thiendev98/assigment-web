import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
//import './App.css';
import CreateProduct from './CreateProduct';
import EditProduct from './EditProduct';
import ListProduct from './ListProduct';

function App() {
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
              <Link className="btn btn-success" to="homelist/create">Create Product</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route index element={<ListProduct />} />
          <Route path="homelist/create" element={<CreateProduct />} />
          <Route path="homelist/:id/edit" element={<EditProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
