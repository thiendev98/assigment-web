<?php
require 'connect.php';

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
 
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);
     
     
    $name = $request->name;
    $userName = $request->userName;
    $email = $request->email;
    $phone = $request->phone;
    $password = $request->password;
    $sql = "INSERT INTO users (name,userName,email,phone,password) VALUES ('$name','$userName','$email','$phone','$password')";
    if(mysqli_query($db,$sql)){
        http_response_code(201);
    }
    else{
        http_response_code(422); 
    }
         
}

function get_data(){
    $connect = mysqli_connect("localhost", "root","","test");
    $query = "SELECT * FROM users";
    $result = mysqli_query($connect, $query);
    $customer = array();
    while($row = mysqli_fetch_array($result)){
        $customer[] = array (
            'userName'  => $row["userName"],
            'password'   => $row["password"]
        );
    }
    return json_encode($customer);
}

$file_name = "customerData".'.json';

file_put_contents($file_name,get_data());
?>