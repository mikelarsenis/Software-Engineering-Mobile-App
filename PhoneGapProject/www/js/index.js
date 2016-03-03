function signIn()
{

	if(document.getElementById("userNameInput").value == "" || document.getElementById("passwordInput").value=="")
	{
 		alert("Please enter username and password");
 		document.getElementById("userNameInput").value = "";
 		document.getElementById("passwordInput").value = "";
	}
 	else
 	{
 		document.getElementById("userNameInput").value = "";
 		document.getElementById("passwordInput").value = "";
 		window.location.assign("tasks.php");
	}
 
 
}