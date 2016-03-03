<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-tap-highlight" content="no" />
        <!-- WARNING: for iOS 7, remove the width=device-width and height=device-height attributes. See https://issues.apache.org/jira/browse/CB-4323 -->
		<meta name="viewport" content="user-scalable=yes, initial-scale=1.0, maximum-scale=3.0, minimum-scale=1.0, width=device-width, height=device-height" />
        <link rel="stylesheet" type="text/css" href="css/index.css" />
		<script src="js/index.js"></script>
    <title>Login</title>
  </head>
  <body>
  <form id="myForm" action="php/userID.php" method="post" class="form-search">
 	  <div id="innerContainer" class="center" >
         <label class="center" id="userName">Username:</label><br>
         <input class="center" id="userNameInput" name="userNameInput" type="text"><br><br>
         <label class="center" id="password">Password:</label><br>
         <input type="password" class="center" id="passwordInput" name="passwordInput" type="text"><br><br>
       	 <label class="center" id="wrongLogin"><em><kbd></kbd></em></label>

     	 <!-- <div id="submitBtn" onclick="signIn()"><image src="img/login.png" style="width:1.5em;position:relative;top:.5em;">&#32;&#32;SUBMIT</div> -->
       <div id="submitBtn" onclick="document.getElementById('myForm').submit()">&#32;&#32;SUBMIT</div>         	
 	  </div>

    <script type="text/javascript" src="cordova.js"></script>
  </form>
  </body>
</html>