
function addTask()
{
	var task = document.getElementById("taskInput").value;
	if(task == "")
	{
		alert("Please enter task details");
		return;
	}

	if(confirm("Added task: " + task.substring(0,13) +"... \n\nAdd another task?")==false)
	{
		$.ajax({url: "http://icarus.cs.weber.edu/~jd38826/CS3750/Software-Engineering-Mobile-App/PhoneGapProject/www/php/insertTask.php?dataSent=" + task
	    }); 
		document.getElementById("taskInput").value="";
		window.location.assign("tasks.html");
	}
	else
	{
		$.post("http://icarus.cs.weber.edu/~jd38826/CS3750/Software-Engineering-Mobile-App/PhoneGapProject/www/php/insertTask.php",
	    {
	    	dataSent: task
	    }); 
		document.getElementById("taskInput").value="";
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
