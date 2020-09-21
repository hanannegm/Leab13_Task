<?php 

    // Enable us to use Headers
    ob_start();

    // Set sessions
    if(!isset($_SESSION)) {
        session_start();
    }

    $hostname = "localhost";
    $username = "leap13";
    $password = "leap13pass";
    $dbname = "dm";
    
    $connection = mysqli_connect($hostname, $username, $password, $dbname) or die("Database connection not established.")


$message="";
if(count($_POST)>0) {
	$conn = mysqli_connect("localhost","root","","dm");
	$result = mysqli_query($conn,"SELECT * FROM user WHERE user_name='" . $_POST["userName"] . "' and password = '". $_POST["password"]."'");
	$count  = mysqli_num_rows($result);
	if($count==0) {
		$message = "Invalid Username or Password!";
	} else {
		$message = "You are successfully authenticated!";
	}
}
?>