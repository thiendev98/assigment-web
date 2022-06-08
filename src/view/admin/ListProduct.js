import { useEffect, useState } from "react";
import axios from "axios"
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'


export default function Admin({ setAdmin }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
      getUsers();
  }, []);

  function getUsers() {
      axios.get('http://localhost/src/php/products/').then(function(response) {
          console.log(response.data);
          setProducts(response.data);
      });
  }

  const deleteUser = (id) => {
      axios.delete(`http://localhost/src/php/product/${id}/delete`).then(function(response){
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
                    <th>Type</th>
                    <th>Code</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Color</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product, key) =>
                    <tr key={key}>
                        <td>{product.id}</td>
                        <td>{product.type}</td>
                        <td>{product.code}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.color}</td>
                        <td>
                            <Link className="btn btn-primary" to={`product/${product.id}/edit`} style={{marginRight: "10px"}}>Edit</Link>
                            <Button variant="danger" onClick={() => deleteUser(product.id)}>Delete</Button>
                        </td>
                    </tr>
                )}
                
            </tbody>
        </Table>
    </div>
  );
}
