<?php
require 'connect.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
	$request = json_decode($postdata);
	$userName = $request->userName;
    $password = $request->password;
	$sql = "SELECT * FROM users WHERE userName = '$userName' AND password = '$password'";
	if(mysqli_query($db,$sql)){
        $row = mysqli_fetch_assoc(mysqli_query($db,$sql));
        echo $row['userName'];
	//echo json_encode($row);
        http_response_code(201);
    }
    else{
        http_response_code(422); 
    }
}
?>