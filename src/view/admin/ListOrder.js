import { useEffect, useState } from "react";
import axios from "axios"
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'


export default function Admin({ setAdmin }) {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
      getUsers();
  }, []);

  function getUsers() {
      axios.get('http://localhost/assigment-web/src/php/orders/').then(function(response) {
          setOrders(response.data);
      });
  }

  const deleteUser = (id) => {
      axios.delete(`http://localhost/assigment-web/src/php/order/${id}/delete`).then(function(response){
          console.log(response.data);
          getUsers();
      });
  }
  return (
    <div style={{width: "80%", margin: "0 auto"}}>
        <Table striped bordered hover size="md">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Cost</th>
                </tr>
            </thead>
            <tbody>
                {orders.map((order, key) =>
                    <tr key={key}>
                        <td>{order.id}</td>
                        <td>{order.name}</td>
                        <td>{order.phone}</td>
                        <td>{order.address}</td>
                        <td>{order.cost}</td>
                        <td>
                            <Link className="btn btn-primary" to={`order/${order.id}/edit`} style={{marginRight: "10px"}}>Edit</Link>
                            <Button variant="danger" onClick={() => deleteUser(order.id)}>Delete</Button>
                        </td>
                    </tr>
                )}
                
            </tbody>
        </Table>
    </div>
  );
}
