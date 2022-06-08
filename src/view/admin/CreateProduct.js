import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function ListUser() {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState([]);
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
        formData.append('type',inputs.type);
        formData.append('code',inputs.code);
        formData.append('name',inputs.name);
        formData.append('price',inputs.price);
        formData.append('link',inputs.link);
        formData.append('color',inputs.color);
        //formData.append('size',inputs.size);
        axios.post('http://localhost/assigment-web/src/php/product/save', formData).then(function(response){
        console.log(inputs.type);
        console.log(response.data);
            navigate('/');
        });
        
    }
    return (
        <div id="CreateProduct">
            <div>
                <h2>Create product</h2>
                <form onSubmit={handleSubmit} method="POST" encType="multipart/form-data">
                    <table cellSpacing="10">
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
                                    <input type="text" name="code" onChange={handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <label>Name: </label>
                                </th>
                                <td>
                                    <input type="text" name="name" onChange={handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <label>Price: </label>
                                </th>
                                <td>
                                    <input type="text" name="price" onChange={handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <label>Link: </label>
                                </th>
                                <td>
                                    <input type="file" name="link" accept="image/*" onChange={handleFileChange} />
                                    
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <label>Color: </label>
                                </th>
                                <td>
                                    <input type="text" name="color" onChange={handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2" align ="right" className="save">
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
