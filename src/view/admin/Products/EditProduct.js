import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


export default function ListUser() {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        getUser();
    }, []);

    function getUser() {
        axios.get(`http://localhost/assigment-web/src/php/listProducts.php/product/${id}`).then(function(response) {
            console.log(response.data);
            setInputs(response.data);
        });
    }
    const handleFileChange=(event) => {
        const name = event.target.name;
        const value = event.target.files[0];
        setInputs(values => ({...values, [name]: value}));
    }
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        //formData.append('id', id);
        formData.append('type',inputs.type);
        formData.append('code',inputs.code);
        formData.append('name',inputs.name);
        formData.append('price',inputs.price);
        formData.append('link',inputs.link);
        formData.append('color',inputs.color);
        axios.post(`http://localhost/assigment-web/src/php/listProducts.php/product/${id}/edit`, formData).then(function(response){
            console.log(response.data);
            console.log("inputs");
            console.log(inputs);
            navigate('/');
        });
        
    }
    return (
        <div id="EditProduct">
            <div>
                <h2>Edit product</h2>
                <form onSubmit={handleSubmit}>
                    <table cellSpacing="15" >
                        <tbody>
                            <tr>
                                <th>
                                    <label style={{position: "relative", top: "-50px"}}>Type: </label>
                                </th>
                                <td>
                                    <div onChange={handleChange}  >
                                        <input type="radio" name="type" value="Vest"/> Vest <br></br>
                                        <input type="radio" name="type"  value="Trouser"/> Trouser <br></br>
                                        <input type="radio" name="type" value="Shirt"/> Shirt <br></br>
                                        <input type="radio" name="type"  value="Tshirt"/> Tshirt <br></br>
                                        <input type="radio" name="type"  value="Skirt"/> Skirt <br></br>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <label>Code: </label>
                                </th>
                                <td> 
                                    <input value={inputs.code} type="text" name="code" onChange={handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <label>Name: </label>
                                </th>
                                <td>
                                    <input value={inputs.name} type="text" name="name" onChange={handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <label>Price: </label>
                                </th>
                                <td>
                                    <input value={inputs.price} type="text" name="price" onChange={handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <label>Link: </label>
                                </th>
                                <td>
                                    <input type="file" name="link"  onChange={handleFileChange} />
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <label>Color: </label>
                                </th>
                                <td>
                                    <input value={inputs.color} type="text" name="color" onChange={handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2" className="save">
                                    <button className="btn btn-success">Save</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    )
}