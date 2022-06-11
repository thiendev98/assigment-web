import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


export default function EditOrder() {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        getUser();
    }, []);

    function getUser() {
        axios.get(`http://localhost/assigment-web/src/php/listOrders.php/order/${id}`).then(function(response) {
            setInputs(response.data);
        });
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
        formData.append('name',inputs.name);
        formData.append('phone',inputs.phone);
        formData.append('address',inputs.address);
        formData.append('cost',inputs.cost);
        axios.post(`http://localhost/assigment-web/src/php/listOrders.php/order/${id}/edit`, formData).then(function(response){
            navigate('/admin/orders/list');
        });    
    }
    return (
        <div id="EditOrder">
            <div>
                <h2>Edit Order</h2>
                <form onSubmit={handleSubmit}>
                    <table cellSpacing="15" >
                        <tbody>
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
                                    <label>Phone: </label>
                                </th>
                                <td>
                                    <input value={inputs.phone} type="text" name="phone" onChange={handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <label>Address: </label>
                                </th>
                                <td>
                                    <input value={inputs.address} type="text" name="address" onChange={handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <label>Cost: </label>
                                </th>
                                <td>
                                    <input value={inputs.cost} type="text" name="cost" onChange={handleChange} />
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