<?php

	//datebase info
	$servername = "localhost";
	$username = "W01238826";
	$password = "Jacobcs!";
	$dbname = "W01238826";

	//last game data to insert into database
	$task = $_POST['newtask'];

	//connection
	$conn = new mysqli($servername, $username, $password, $dbname);

	//check connection
	if($conn->connect_error)
	{
		die("<p>Connection failed: " . $conn->connect_error . "</p>");
	}

	//insertion query
	$sql = "INSERT INTO Tasks (UserID, TaskText) VALUES ('1', $task)";
	mysqli_query($conn,$sql);

?>