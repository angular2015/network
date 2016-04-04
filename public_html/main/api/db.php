<?php
 header('Access-Control-Allow-Origin: *');  

$conn = mysql_connect("localhost", "root", "root") or die("server not available");

mysql_select_db("networking", $conn) or die("error in selecting database");
?>
