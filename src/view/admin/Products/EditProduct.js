import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function EditProduct() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getUser();
  }, []);

  function getUser() {
    axios
      .get(
        `http://localhost/assigment-web/src/php/listProducts.php/products/${id}`
      )
      .then(function (response) {
        setInputs(response.data);
      });
  }
  const handleFileChange = (event) => {
    const name = event.target.name;
    const value = event.target.files[0];
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    //formData.append('id', id);
    formData.append("type", inputs.type);
    formData.append("code", inputs.code);
    formData.append("name", inputs.name);
    formData.append("price", inputs.price);
    formData.append("link", inputs.link);
    formData.append("color", inputs.color);
    axios
      .post(
        `http://localhost/assigment-web/src/php/listProducts.php/product/${id}/edit`,
        formData
      )
      .then(function (response) {
        navigate("/admin/products/list");
      });
  };
  return (
    <div id="EditProductPage">
      <h1>Chỉnh sửa sản phẩm</h1>
      <form onSubmit={handleSubmit}>
        <table cellSpacing="15">
          <tbody>
            <tr>
              <th>
                <label>Type: </label>
              </th>
              <td>
                <div className="onchange__input--radio" onChange={handleChange}>
                  <input type="radio" name="type" value="vest" /> Vest <br></br>
                  <input
                    type="radio"
                    name="type"
                    value="trouser"
                  /> Trouser <br></br>
                  <input type="radio" name="type" value="shirt" /> Shirt{" "}
                  <br></br>
                  <input type="radio" name="type" value="tshirt" /> Tshirt{" "}
                  <br></br>
                  <input type="radio" name="type" value="skirt" /> Skirt{" "}
                  <br></br>
                </div>
              </td>
            </tr>
            <tr>
              <th>
                <label>Code: </label>
              </th>
              <td>
                <input
                  value={inputs.code}
                  type="text"
                  name="code"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>
                <label>Name: </label>
              </th>
              <td>
                <input
                  value={inputs.name}
                  type="text"
                  name="name"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>
                <label>Price: </label>
              </th>
              <td>
                <input
                  value={inputs.price}
                  type="text"
                  name="price"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>
                <label>Link: </label>
              </th>
              <td>
                <input type="file" name="link" onChange={handleFileChange} />
              </td>
            </tr>
            <tr>
              <th>
                <label>Color: </label>
              </th>
              <td>
                <input
                  value={inputs.color}
                  type="text"
                  name="color"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="save">
                <div className="button-btn">
                  <button className="btn btn-success">Save</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
