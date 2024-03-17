<?php
include('connection.php');



$title = $_POST["title"]; 
$content=$_POST["content"];

$query = $mysqli->prepare("insert into news (title,content) VALUES (?,?)");
$query->bind_param('ss', $title, $content); 
$query->execute();

if ($query) {
    $response['status'] = 'success';
    $response['message'] = 'news created successfully';
} else {
    $response['status'] = 'error';
    $response['message'] = 'Failed to create news';
}

echo json_encode($response);