<?php
include('connection.php');

$query=$mysqli->prepare( "SELECT * FROM news");

$query->execute();
$query->store_result();
$num_rows = $query->num_rows();

if ($num_rows==0){
    $response['status'] ='cannot find news';
}else{
    $news=[];
    $query->bind_result($news_id,$title,$content);
    while ($query->fetch()){
        $new=[
            'news_id'=> $news_id,
            'title'=> $title,
            'content'=> $content
        ];
        $news[]= $new;
    }
    $response['status']='success';
    $response['news']=$news;

}

echo json_encode($response);