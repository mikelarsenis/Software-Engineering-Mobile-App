<?php
	
	$task = $_POST['dataSent'];
	$userid = $_POST['userid'];
	
	//datebase info
	$servername = "localhost";
	$username = "W01238826";
	$password = "Jacobcs!";
	$dbname = "W01238826";

	//connection
	$conn = new mysqli($servername, $username, $password, $dbname);

	//check connection
	if($conn->connect_error)
	{
		die("<p>Connection failed: " . $conn->connect_error . "</p>");
	}

	$escTask = $conn->real_escape_string($task);

	//insertion query
	$sql = "INSERT INTO Tasks (UserID, TaskText) VALUES (" . $userid . ",'" . $escTask . "');";

	if($conn->query($sql)===TRUE)
	{
		echo $task;
	}
	else
	{
		echo 'alert("Error inserting task: ' . $conn->error . '")';
	}

?>