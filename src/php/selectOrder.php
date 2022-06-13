<?php
require 'connect.php';

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// if(isset($postdata) && !empty($postdata)){
//     $request = json_decode($postdata);
     
     
//     $name = $request->name;
//     $userName = $request->userName;
//     $email = $request->email;
//     $phone = $request->phone;
//     $password = $request->password;
//     $sql = "INSERT INTO users (name,userName,email,phone,password) VALUES ('$name','$userName','$email','$phone','$password')";
//     if(mysqli_query($db,$sql)){
//         http_response_code(201);
//     }
//     else{
//         http_response_code(422); 
//     }
         
// }
$path = explode('/', $_SERVER['REQUEST_URI']);
$userID=$path[6];
$sql = "SELECT * FROM orders WHERE userName='$userID'";
$result = $db->query($sql);
$orders = array();
while($row = mysqli_fetch_array($result)){
    $orders[] = array (
        'products' => $row["products"],
        'cost' => $row["cost"],
    );
}
echo json_encode($order);


?>