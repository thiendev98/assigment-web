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
        $sql = "SELECT * FROM products";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        if(isset($path[6]) && is_numeric($path[6])) {
            $sql .= " WHERE id = :id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $path[6]);
            $stmt->execute();
            $product = $stmt->fetch(PDO::FETCH_ASSOC);
        } else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $product = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }

        echo json_encode($product);
        break;
    /*case "POST":

        $product = json_decode( file_get_contents('php://input') );
        $link=$_FILES["link"]["name"];
        $tempname = $_FILES["link"]["tmp_name"];
        $folder = "./image/" . $link;
        $sql = "INSERT INTO products (id,type,code,name,price,link,color, created_at) VALUES (NULL,:type,:code,:name,:price,'$link',:color, :created_at)";
        $stmt = $conn->prepare($sql);
        $created_at = date('Y-m-d');

        $stmt->bindParam(':type', $_POST['type']);
        $stmt->bindParam(':code', $_POST['code']);
        $stmt->bindParam(':name', $_POST['name']);
        $stmt->bindParam(':price', $_POST['price']);
        //$stmt->bindParam(':link', $_POST['link']);
        $stmt->bindParam(':color', $_POST['color']);
       // $stmt->bindParam(':size', $_POST['size']);
        $stmt->bindParam(':created_at', $created_at);
        if (move_uploaded_file($tempname, $folder)) {
            
            echo "<h3>  Image uploaded successfully!</h3>";
        } else {
            echo "<h3>  Failed to upload image!</h3>";
        }
        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record created successfully.'];
        
        } else {
            $response = ['status' => 0, 'message' => 'Failed to create record.'];
        }
        echo json_encode($response);
        break;
*/
    case "POST":
        $path = explode('/', $_SERVER['REQUEST_URI']);
        $product = json_decode( file_get_contents('php://input') );
        $link=$_FILES["link"]["name"];
        $tempname = $_FILES["link"]["tmp_name"];
        $folder = "./image/" . $link;
        
        if($path[6] != 'save'){
            $sql = "UPDATE products SET type =:type, code =:code, name =:name, price =:price, color =:color, link='$link', updated_at =:updated_at WHERE id = :id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $path[6]);
            $updated_at = date('Y-m-d');
            $stmt->bindParam(':updated_at', $updated_at);
        }
        else{
            $sql = "INSERT INTO products (id,type,code,name,price,link,color, created_at) VALUES (NULL,:type,:code,:name,:price,'$link',:color, :created_at)";
            $stmt = $conn->prepare($sql);
            $created_at = date('Y-m-d');
            $stmt->bindParam(':created_at', $created_at);
        }
            $stmt->bindParam(':type', $_POST['type']);
            $stmt->bindParam(':code', $_POST['code']);
            $stmt->bindParam(':name', $_POST['name']);
            $stmt->bindParam(':price', $_POST['price']);
            //$stmt->bindParam(':link', $_POST['link']);
            $stmt->bindParam(':color', $_POST['color']);
            // $stmt->bindParam(':size', $_POST['size']);
            
            if (move_uploaded_file($tempname, $folder)) {
                echo "<h3>  Image uploaded successfully!</h3>";
            } else {
                echo "<h3>  Failed to upload image!</h3>";
            }
            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record updated successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to update record.'];
            }
            echo json_encode($response);
            break;

    case "DELETE":
        $sql = "DELETE FROM products WHERE id = :id";
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