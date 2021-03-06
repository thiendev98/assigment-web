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
        $sql = "SELECT * FROM orders";
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
        $sql = "UPDATE orders SET name =:name, phone =:phone, address =:address, cost =:cost, updated_at =:updated_at WHERE id = :id";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':id', $path[6]);
        $updated_at = date('Y-m-d');
        $stmt->bindParam(':updated_at', $updated_at);
        $stmt->bindParam(':name', $_POST['name']);
        $stmt->bindParam(':phone', $_POST['phone']);
        $stmt->bindParam(':address', $_POST['address']);
        $stmt->bindParam(':cost', $_POST['cost']);
            
        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record updated successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to update record.'];
        }
        echo json_encode($response);
        break;

    case "DELETE":
        $sql = "DELETE FROM orders WHERE id = :id";
        $path = explode('/', $_SERVER['REQUEST_URI']);

        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':id', $path[6]);

        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to delete record.'];
        }
        echo json_encode($response);
        break;
}