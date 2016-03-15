function signIn() {
	var username = document.querySelector('#userNameInput').value;
	var password = document.querySelector('#passwordInput').value;
	var form = document.querySelector('#myForm');
	if(username == "") {
 		form.reset();
 		alert("Please enter username.");
	} else if(password == "") {
		//form.reset();
		alert("Please enter password.");
	}
 	else {
 		$.ajax({
            url: "http://icarus.cs.weber.edu/~ml18995/SoftwareEngineering/Assignment3/php/GetUserPW.php?username=" + username,
            success: function (data) {
            	if(data == "") {
            		form.reset();
            		alert("Incorrect username or password.");
            	} else {
	            	var d = $.parseJSON(data);
	                if(sha256(password) == d.password) {
	                	document.location.href = "tasks.html";
	                } else {
	                	form.reset();
	                	alert("Incorrect password.");
	                }
                }
            }
        });
	}
}