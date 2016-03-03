<?php
    $servername = "localhost";
    $username = "W01238826";
    $password = "Jacobcs!";
    $dbname = "W01238826";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if($conn->connect_error)
    {
      die("<p>Connection failed: " . $conn->connect_error . "</p>");
    }

    //$sql = "SELECT TaskText FROM Tasks WHERE UserID =" + $userID;
    $sql = "SELECT * FROM Tasks";
    $result = $conn->query($sql);

    if($result->num_rows > 0)
    {
      while($row = $result->fetch_assoc())
      {
        echo "<input type='checkbox' id='task".$row["TaskID"]."'><label>".$row["TaskText"]."</label><br>";
      }
    }
    else
    {
      echo "No current tasks...";
    }
  ?>