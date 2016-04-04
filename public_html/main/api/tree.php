<?php

include('db.php');
//
$userid = 1;

$sqluserdetail = "SELECT * FROM `user` WHERE `user_id`='$userid'";

$res_user = mysql_query($sqluserdetail, $conn);



if (mysql_num_rows($res_user) > 0) {
    $user = mysql_fetch_assoc($res_user);
} else {
    $arr = array("msg" => 'fail', "status" => "0");
    $json = json_encode($arr);
    print_r($json);
}

function getTree($user_id) {
    $arr = array();

    $result = mysql_query("SELECT * FROM `user` WHERE `parent_id`='$user_id'");
    while ($row = mysql_fetch_array($result)) {
        $arr[] = array(
            "user_id" => $row["user_id"],
            "display_name"=>$row["user_name"],
            "user_name" => $row["user_name"],
            "status" => $row["status"],
            "mobile" => $row["mobile"],
            "address" => $row["address"],
            "email" => $row["email"],
            "parent_id" => $row["parent_id"],
            "dob" => $row["dob"],
            "total_income" => $row["total_income"],
            "image_url" => $row["image_url"],
            "objectives" => getTree($row["user_id"])
        );
    }
    return $arr;
}

$z = getTree($userid);
$user['objectives'] = $z;
$json = json_encode($user);
print_r($json);
?>

