<?php
/*$path = explode('/', $_SERVER['REQUEST_URI']);
$userID=$path[6];
$connect = mysqli_connect("localhost", "root","","test");
$query = "SELECT * FROM orders";
$result = mysqli_query($connect, $query);
$orders = array();
while($row = mysqli_fetch_array($result)){
    $orders[] = array (
        'products' => $row["products"],
        'cost' => $row["cost"],
        
    );
}
echo json_encode($orders );*/



error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];
    
$sql = "SELECT products, cost, created_at FROM orders";
$path = explode('/', $_SERVER['REQUEST_URI']);
if(isset($path[6]) && is_numeric($path[6])) {
    $sql .= " WHERE userID = :userID";
    $stmt = $conn->prepare($sql);
    //while( $order = $stmt->fetch(PDO::FETCH_ASSOC)){
    $stmt->bindParam(':userID', $path[6]);
    $stmt->execute();
    //$order = $stmt->fetch(PDO::FETCH_ASSOC);
    //}
    $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);
    $order = $stmt->fetchAll();
 
} else {
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $order = $stmt->fetchAll(PDO::FETCH_ASSOC);
}

echo json_encode($order);
?>