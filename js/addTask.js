
function addTask(userid)
{
	var task = document.getElementById("taskInput").value;
	if(task == "")
	{
		alert("Please enter task details");
	}
	else
	{
		//$.post("http://icarus.cs.weber.edu/~ml18995/SoftwareEngineering/Assignment3/php/insertTask.php",
		$.post("http://icarus.cs.weber.edu/~gk55597/CS%203750/Assignment%203/Assignment%203%20Repo/Software-Engineering-Mobile-App/PhoneGapProject/www/php/insertTask.php",
		{
    		dataSent:task,
    		userid: userid
	    }).done(function() {
	    	alert("Success!");
	    	document.getElementById("taskInput").value="";
			window.location.assign("tasks.html");
	    });
	}
}

function cancel()
{
	if(document.getElementById("taskInput").value != "")
	{
		if(confirm("Are you sure you want to cancel?")==true)
		{
			document.getElementById("taskInput").value="";
			window.location.assign("tasks.html");
		}
	}	
	else
	{
		document.getElementById("taskInput").value="";
		window.location.assign("tasks.html");
	}
}
