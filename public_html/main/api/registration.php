<?php

include('db.php');
echo 'php';
$data = json_decode(file_get_contents("php://input"),true);

function safe($data){
   return mysql_real_escape_string($data);
} 
print_r($data);
$rcode=safe($data['code']);
$rname=safe($data['username']);
$rpass=safe($data['password']);
$remail = safe($data['email']);
$rmobile=safe($data['mobile']);
echo $rcode;
echo $rname;
echo $remail;
echo $rpass;
echo $rmobile;



$csql = "SELECT * FROM `registration` WHERE `mobile`='$rmobile'";
$res = mysql_query($csql, $conn) or die("not checked");

if (mysql_num_rows($res) == 0) {
    $rsql = "INSERT INTO `registration`(`code`,`user_name`,`password`,`mobile`,`email`) VALUES ('$rcode','$rname','$rpass','$rmobile','$remail')";
    $res = mysql_query($rsql, $conn);
    if ($res) {
     $csqll="SELECT * FROM `registration` WHERE `mobile`='$rmobile'";
     $ress = mysql_query($csqll, $conn) or die("not checked");
     $str = mysql_fetch_row($ress);
     if (mysql_num_rows($ress) == 1) {
     if($ress){
        $arr = array("msg" => 'success',"id" => $str);
        $json = json_encode($arr);
    
        print_r($json);
     }
   
     }
    } else {
        $arr = array("msg" => 'failure');
        $json = json_encode($arr);
        print_r($json);
    }
} else  {
        $arr = array("msg" => 'fail');
        $json = json_encode($arr);
        print_r($json);
    }
?>
