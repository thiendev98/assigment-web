import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

export default function ListOrder() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    axios
      .get("http://localhost/assigment-web/src/php/listOrders.php/orders/")
      .then(function (response) {
        setOrders(response.data); 
      });
  }

  const deleteUser = (id) => {
    axios
      .delete(
        `http://localhost/assigment-web/src/php/listOrders.php/order/${id}/delete`
      )
      .then(function (response) {
        console.log(response.data);
        getUsers();
      });
  };
  return (
    <div id="ListOrderPage">
      <h1>DANH SÁCH ĐƠN HÀNG</h1>
      <Table striped bordered hover size="md">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Products</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Cost</th>
            <th style={{minWidth:"180px"}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, key) => (
            <tr key={key}>
              <td>{order.id}</td>
              <td>{order.name}</td>
              <td>{order.products}</td>
              <td>{`0${order.phone}`}</td>
              <td>{order.address}</td>
              <td>{order.cost}</td>
              <td>
                <Link
                  className="btn btn-primary"
                  to={order.id.toString()}
                  style={{ color: "#fff",marginRight: "10px" }}
                >
                  Edit
                </Link>
                <Button variant="danger" onClick={() => deleteUser(order.id)}>
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
