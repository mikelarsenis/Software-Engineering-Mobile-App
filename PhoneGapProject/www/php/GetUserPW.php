<?php
	$server = "localhost";
	$username = "W01238826";
	$password = "Jacobcs!";
	$dbname = "W01238826";
	
	$conn = new mysqli($server, $username, $password, $dbname);
	if ($conn->connect_error) {
		echo ("unable to connect to database");
	}

	$Username = $_GET["username"];
	//$UserID = $_POST["UserID"];
	//$sql = "SELECT * FROM Guest WHERE UserID = " . $UserID;
	$sql = "SELECT * FROM Guest WHERE Username = '" . $Username . "'";
	$result = $conn->query($sql) or die("Can't fetch data");

	while($row = $result->fetch_assoc()) {
		//returns User's ID and password as JSON
		echo '{"username":"' . $row['UserID'] . '", "password":"' . $row['PWDKey'] . '"}';
	}
?>