
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
		document.getElementById("taskInput").value="";
		window.location.assign("tasks.html");
	}
	else
	{
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
