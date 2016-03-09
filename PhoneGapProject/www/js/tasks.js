
function newTask()
{
	//alert("Hit function to add new task");
	window.location.assign("addTask.php");
}

function checkedBoxes(chkboxName) //checks for checked boxes
{
	var checkboxes = document.getElementsByName(chkboxName);
 	var checkboxesChecked = [];

 	for (var i=0; i<checkboxes.length; i++) 
 	{
     	// Stick the checked ones onto an array...
     	if (checkboxes[i].checked) 
     	{
        	return true;
 		}
	}
	return false;
}

function deleteCheckedBoxes(chkboxName) //deletes all checked boxes
{
	if(checkedBoxes(chkboxName)==false)
	{
		alert("Please select one or more tasks to delete");
		return;
	}

  var checkboxes = document.getElementsByName(chkboxName);
  var checkboxesChecked = [];
  var deletedTasks = "";

  // loop over them all
  for (var i=0; i<checkboxes.length; i++) 
  {
     if (checkboxes[i].checked) 
     {
        checkboxesChecked.push(checkboxes[i]);

        var val = checkboxes[i].value;
        deletedTasks += checkboxes[i].value + "...\n";
     }
  }


  if(confirm("Delete the following?\n" + deletedTasks)==true) //confirm delete
  {
	  for(var i=0; i<checkboxesChecked.length;i++)
	  {
	 	 removeTask(checkboxesChecked[i].value);
	  }
  }
  else
  {
  	location.reload();
  	return;
  }

  location.reload();
  return;
} 

function removeTask(val) //deletes row matching value from database
{
    $.post("php/deleteTasks.php",
    {
    	dataSent: val
    });   
}