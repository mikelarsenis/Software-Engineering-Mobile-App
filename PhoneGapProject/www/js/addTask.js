
function addTask(userid)
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
    		dataSent:task,
    		userid: userid
	    },function(data,status)
	      {
		//alert("Data: " + data + " Status: " + status);
	      }); 
		document.getElementById("taskInput").value="";

		window.location.assign("tasks.html");
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
