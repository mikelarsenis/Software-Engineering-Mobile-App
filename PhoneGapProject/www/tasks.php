<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-tap-highlight" content="no" />
        <!-- WARNING: for iOS 7, remove the width=device-width and height=device-height attributes. See https://issues.apache.org/jira/browse/CB-4323 -->
		<meta name="viewport" content="user-scalable=yes, initial-scale=1.0, maximum-scale=3.0, minimum-scale=1.0, width=device-width, height=device-height" />
        <link rel="stylesheet" type="text/css" href="css/tasks.css" />
		<script src="js/tasks.js"></script>
    <title>Tasks</title>
    
  </head>
  <body>
  <input type="hidden" id="userID">
  <div id="tasksBanner">Honey-Do List</div>
  <div id="container">
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

  </div>
  <div id="test"></div>
  <div id="deleteTask" onclick="deleteTask()"><img src="img/delete.png" id="trashIcon" style="width:1em;">&#32;Delete</div>
  <div id="newTask" onclick="newTask()"><img src="img/newTask.png" id="trashIcon" style="width:1em;">&#32;Task</div>
  
   <script type="text/javascript" src="cordova.js"></script>
   
  </body>
