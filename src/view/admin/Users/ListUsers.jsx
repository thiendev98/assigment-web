import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import ListUser from './ListUser';

function ListUsers() {
  return (
    <div className="App" style={{textAlign: "center"}}>
      <h1 style={{marginTop: "20px"}}>DANH SÁCH KHÁCH HÀNG</h1>

      <BrowserRouter>
        <nav>
          <ul>
            <li style={{display: "inline-block", padding: "10px"}}>
              <Link className="btn btn-primary" to="/">List Users</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route index element={<ListUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default ListUsers;
