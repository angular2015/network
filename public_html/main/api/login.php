<?php

include('db.php');

$data = json_decode(file_get_contents("php://input"),true);
function safe($data){
   return mysql_real_escape_string($data);
} 
$name =safe($data['username']);

$pass =safe($data['password']);

$sql = "SELECT * FROM `registration` WHERE `user_name`='$name' && `password`='$pass'";

$res = mysql_query($sql, $conn);
$str = mysql_fetch_row($res);
if (mysql_num_rows($res) == 1) {

    if ($res) {
        $arr = array("msg" => 'success',"id" => $str);
        $json = json_encode($arr);
        print_r($json);
    } else {
        $arr = array("msg" => 'failure');
        $json = json_encode($arr);
        print_r($json);
    }
} else {
   $arr = array("msg" => 'fail');
        $json = json_encode($arr);
        print_r($json);
}
?>