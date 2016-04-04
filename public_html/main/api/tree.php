<?php

include('db.php');

$userid = 1;

$sqluserdetail = "SELECT * FROM `user` WHERE `user_id`='$userid'";

$res_user = mysql_query($sqluserdetail, $conn);



if (mysql_num_rows($res_user) > 0) {
    $user = mysql_fetch_assoc($res_user);
    extract($user);
    nodeCreate($user, $conn);
} else {
    $arr = array("msg" => 'fail', "status" => "0");
    $json = json_encode($arr);
    print_r($json);
}

function nodeCreate($user, $conn, $parent_id) {
    extract($user);
    $GLOBALS['z'][]=$user;
//    $json = json_encode($user);
//    print_r($json);
//    echo "<br><br>";

    $sqlchilddetail = "SELECT * FROM `user` WHERE `parent_id`='$user_id'";
    $res_child = mysql_query($sqlchilddetail, $conn);
    if (mysql_num_rows($res_child) > 0) {
//        echo mysql_num_rows($res_child);
        while ($i < mysql_num_rows($res_child)) {
            $child = mysql_fetch_assoc($res_child);
            extract($child);
//            $user['objectives'][] = $child;
            nodeCreate($child, $conn, $parent_id);
//            return $child;
//              print_r($child);
            $i++;
        }
    }
}

// $json = json_encode($user);
//    print_r($json);
//    echo "<br><br>";
$json = json_encode($z);
print_r($json);
?>

