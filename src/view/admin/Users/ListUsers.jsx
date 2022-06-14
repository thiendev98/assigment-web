import { Outlet } from "react-router-dom";
import "../../styles/style.css";
function ListUsers() {
  return (
    <div id="ListUsersPage">
      <Outlet />
    </div>
  );
}

export default ListUsers;
