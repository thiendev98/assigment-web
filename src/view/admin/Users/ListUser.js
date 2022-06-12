import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

export default function ListUser() {
  const [users, setOrders] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    axios
      .get("http://localhost/assigment-web/src/php/listUsers.php/orders/")
      .then(function (response) {
        setOrders(response.data);
      });
  }

  const deleteUser = (id) => {
    axios
      .delete(
        `http://localhost/assigment-web/src/php/listUsers.php/order/${id}/delete`
      )
      .then(function (response) {
        console.log(response.data);
        getUsers();
      });
  };
  return (
    <div id="ListUserPage">
      <h1>DANH SÁCH KHÁCH HÀNG</h1>
      <Table striped bordered hover size="md">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>User name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, key) => (
            <tr key={key}>
              <td>{user.id}</td>
              <td>{user.userName}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>0{user.phone}</td>
              <td>{user.address}</td>
              <td>
                {/* <Link className="btn btn-primary" to={`order/${user.id}/edit`} style={{marginRight: "10px"}}>Edit</Link> */}
                <Button variant="danger" onClick={() => deleteUser(user.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
