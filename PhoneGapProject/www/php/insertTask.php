<?php
	
	$task = $_POST['dataSent'];
	echo 'alert("PING")';
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

	//insertion query
	$sql = "INSERT INTO Tasks (UserID, TaskText) VALUES ('8'," . $task . ")";

	if($conn->query($sql)===TRUE)
	{
		echo 'alert("Task inserted correctly!")';
	}
	else
	{
		echo 'alert("Error inserting task: ' . $conn->error . '")';
	}

?>