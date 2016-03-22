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

    $userid = $_GET["userid"];
    $sql = "SELECT * FROM Tasks WHERE UserID = " . $userid;
    
    $result = $conn->query($sql);

    if($result->num_rows > 0)
    {
      while($row = $result->fetch_assoc())
      {
        echo "<input type='checkbox' name='checkboxes' class='taskCheckbox' id='".$row["TaskID"]."' style='display:none' value='".$row["TaskText"]."'>".
        "<img id='".$row["TaskID"]."img' src='img/emptyBox.png' style='height:.7em;' onclick='checkBox(this);'>".
        "<label> ".$row["TaskText"]."</label><hr>";
      }
    }
    else
    {
      echo "Nothing to do. Go play some video games!";
    }
  ?>