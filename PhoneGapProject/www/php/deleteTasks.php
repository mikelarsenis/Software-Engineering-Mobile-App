<?php
    $data = $_POST['dataSent'];
    echo 'alert("we posted!")';

    $servername = "localhost";
	$username = "W01238826";
	$password = "Jacobcs!";
	$dbname = "W01238826";

	$conn = new mysqli($servername, $username, $password, $dbname);

	if($conn->connect_error)
	{
		die("<p>Connection failed: " . $conn->connect_error . "</p>");
	}

	$escData = $conn->real_escape_string($data);
    $sql = "DELETE FROM Tasks WHERE TaskText LIKE " . $escData . "%;";
    
	if($conn->query($sql)===TRUE)
	{
		echo 'alert("task deleted successfully");';
	}
	else
	{
		echo 'alert("Error deleting record: ' . $conn->error . '");';
	}
?>