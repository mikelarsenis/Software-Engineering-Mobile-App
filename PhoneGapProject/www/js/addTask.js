
function addTask()
{
	var task = document.getElementById("taskInput").value;
	if(task == "")
	{
		alert("Please enter task details");
	}
	else
	{
		$.post("http://icarus.cs.weber.edu/~ml18995/SoftwareEngineering/Assignment3/php/insertTask.php",
		{
    		dataSent:task
	    }); 
		document.getElementById("taskInput").value="";

		window.location.assign("tasks.html");

		// if(confirm("Added task: " + task.substring(0,13) +"... \n\nAdd another task?")==false)
		// {
		// 	window.location.assign("tasks.html");
		// }
		// else
		// {
		// 	window.location.assign("addTask.html");
		// }
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
