<?php
require 'connect.php';

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
 
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);
     
     
    $name = $request->name;
    $phone = $request->phone;
    $address = $request->address;
    $cost = $request->cost;
    $products = $request->products; 
    $userID = $request->userID; 
  
    $sql = "INSERT INTO orders (name,phone,address,cost,products,userID) VALUES ('$name','$phone','$address','$cost','$userID','$products')";
    if(mysqli_query($db,$sql)){
        http_response_code(201);
    }
    else{
        http_response_code(422); 
    }
         
}

// function get_data(){
//     $connect = mysqli_connect("localhost", "root","","test");
//     $query = "SELECT * FROM users";
//     $result = mysqli_query($connect, $query);
//     $customer = array();
//     while($row = mysqli_fetch_array($result)){
//         $customer[] = array (
//             'key' => $row["id"],
//             'name' => $row["name"],
//             'userName'  => $row["userName"],
//             'password'   => $row["password"],
//             'email' => $row["email"],
//             'address'  => $row["address"],
//             'cart'  => $row["cart"],
//             'avatar' => $row["avatar"],
//             'login' => false
//         );
//     }
//     return json_encode($customer);
// }

// $file_name = "customerData".'.json';

// file_put_contents($file_name,get_data());
?>