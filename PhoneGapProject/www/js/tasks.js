
function newTask()
{
	//alert("Hit function to add new task");
	window.location.assign("addTask.html");
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

        deletedTasks += checkboxes[i].value + "...\n";
     }
  }


  if(confirm("Delete the following?\n" + deletedTasks)==true) //confirm delete
  {
	  for(var i=0; i<checkboxesChecked.length;i++)
	  {
	 	 removeTask(checkboxesChecked[i].id);
	  }
  }
  else
  {
  	//location.reload();
    window.location.assign("tasks.html");
  	return;
  }

  //location.reload();
  window.location.assign("tasks.html");
  return;
} 

function removeTask(val) //deletes row matching value from database
{
    $.post("http://icarus.cs.weber.edu/~ml18995/SoftwareEngineering/Assignment3/php/deleteTasks.php",
    {
    	dataSent: val
    });
}

function checkBox(img) //changes the image of the checkbox
{
  var id = img.id;
  var element = img.previousSibling;
  var checked = element.checked;
  var images = document.querySelector("input[id*='"+id+"']"); 

  if(checked == false)
  {
    img.src = "img/checkedBox.png";
    element.checked = true;
  }
  else
  {
    img.src = "img/emptyBox.png";
    element.checked = false;
  }
}