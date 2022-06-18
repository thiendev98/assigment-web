import { Outlet } from "react-router-dom";

function ListOrders() {
  return (
    <div id="ListOrdersPage" style={{ textAlign: "center" }}>
      <Outlet />
    </div>
  );
}

export default ListOrders;
