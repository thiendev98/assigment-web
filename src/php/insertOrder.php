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
  
    $sql = "INSERT INTO orders (name,phone,address,cost,userID,products) VALUES ('$name','$phone','$address','$cost','$userID','$products')";
    if(mysqli_query($db,$sql)){
        http_response_code(201);
    }
    else{
        http_response_code(422); 
    }         
}
?>