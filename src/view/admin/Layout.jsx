import {Link, Outlet} from "react-router-dom";
const Layout = () => {
    return (
        <>
        <div className="row">
            <div className="col-md-2">
            <nav>
                <ul>
                <li>
                    <Link to="/">Trang chủ</Link>
                </li>
                <li>
                    <Link to="/listProducts">Danh sách sản phẩm</Link>
                </li>
                <li>
                    <Link to="/listUsers">Danh sách khách hàng</Link>
                </li>
                <li>
                    <Link to="/listOrders">Danh sách đơn hàng</Link>
                </li>
                </ul>
            </nav>
            </div>
            <div className="col-md-10">
            <Outlet />
            </div>
        </div>

        
        </>
    )
}

export default Layout;