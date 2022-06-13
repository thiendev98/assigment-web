<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
    case "GET":
        $sql = "SELECT * FROM users";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        if(isset($path[6]) && is_numeric($path[6])) {
            $sql .= " WHERE id = :id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $path[6]);
            $stmt->execute();
            $order = $stmt->fetch(PDO::FETCH_ASSOC);
        } else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $order = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }

        echo json_encode($order);
        break;
    case "POST":
        $path = explode('/', $_SERVER['REQUEST_URI']);
        $product = json_decode( file_get_contents('php://input') );     
        $name = $product->name;
        $email=$product->email;
        $phone=$product->phone;
        switch($path[6]) {
            case "edit":
                $address=$product->address;
                $sql = "UPDATE users SET name ='$name', phone ='$phone', email ='$email', address ='$address', updated_at =:updated_at WHERE id = :id";
                $stmt = $conn->prepare($sql);
                $stmt->bindParam(':id', $path[5]);
                $updated_at = date('Y-m-d');
                $stmt->bindParam(':updated_at', $updated_at);
                break;
            case "save":
                $password=$product->password;
                $userName = $product->userName;
                $sql = "INSERT INTO users (name,userName,email,phone,password,created_at) VALUES ('$name', '$userName', '$email', '$phone', '$password', :created_at)";
                $stmt = $conn->prepare($sql);
                $created_at = date('Y-m-d');
                $stmt->bindParam(':created_at', $created_at);
                break;
            case "editpassword":
                $password=$product->password;
                $sql = "UPDATE users SET password ='$password', updated_at =:updated_at WHERE id = :id";
                $stmt = $conn->prepare($sql);
                $stmt->bindParam(':id', $path[5]);
                $updated_at = date('Y-m-d');
                $stmt->bindParam(':updated_at', $updated_at);
                break;
        }
        
        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record updated successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to update record.'];
        }
        echo json_encode($response);
        function get_data(){
            $connect = mysqli_connect("localhost", "root","","test");
            $query = "SELECT * FROM users";
            $result = mysqli_query($connect, $query);
            $customer = array();
            while($row = mysqli_fetch_array($result)){
                $customer[] = array (
                    'key' => $row["id"],
                    'name' => $row["name"],
                    'userName'  => $row["userName"],
                    'password'   => $row["password"],
                    'email' => $row["email"],
                    'phone' => $row["phone"],
                    'address'  => $row["address"],
                    'cart'  => $row["cart"],
                    'avatar' => $row["avatar"],
                    'login' => false
                );
            }
            return json_encode($customer);
        }
        
        $file_name = "customerData".'.json';
        
        file_put_contents($file_name,get_data());
        break;
}
// <?php
// require 'connect.php';

// header("Access-Control-Allow-Origin: *");
// header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
// header("Access-Control-Allow-Headers: Content-Type, Authorization");
 
// $postdata = file_get_contents("php://input");
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
//             'phone' => $row["phone"],
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
// ?>