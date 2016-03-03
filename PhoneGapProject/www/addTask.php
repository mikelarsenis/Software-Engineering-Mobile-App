<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-tap-highlight" content="no" />
        <!-- WARNING: for iOS 7, remove the width=device-width and height=device-height attributes. See https://issues.apache.org/jira/browse/CB-4323 -->
		<meta name="viewport" content="user-scalable=yes, initial-scale=1.0, maximum-scale=3.0, minimum-scale=1.0, width=device-width, height=device-height" />
        <link rel="stylesheet" type="text/css" href="css/addTask.css" />
		<script src="js/addTask.js"></script>
    <title>Add New Task</title>
  </head>
  <body>
    <div id="newTaskBanner">Add New Task</div>
  <div id="container">
    <label>Add Task:</label><br>
    <textarea id="taskInput"  rows="4" cols="25" ></textarea>
  </div>
  
  <div id="addTask" onclick="addTask()">ADD TASK</div>
  <div id="cancel" onclick="cancel()">CANCEL</div>
  </body>
</html>