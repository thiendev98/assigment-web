import { useEffect, useState } from "react";
import axios from "axios"
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
// import { useParams } from "react-router-dom";

export default function ListProduct() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
      getProducts();
  }, []);

  const getProducts = () => {
      axios.get('http://localhost/assigment-web/src/php/listProducts.php/products/').then(function(response) {
          setProducts(response.data);
      });
  }

  const deleteProduct = (id) => {
      axios.delete(`http://localhost/assigment-web/src/php/listProducts.php/product/${id}/delete`).then(function(response){
          getProducts();
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
                            <Link className="btn btn-primary" to={product.id.toString()} style={{marginRight: "10px"}}>Edit</Link>
                            <Button variant="danger" onClick={() => deleteProduct(product.id)}>Delete</Button>
                        </td>
                    </tr>
                )}
                
            </tbody>
        </Table>
    </div>
  );
}
