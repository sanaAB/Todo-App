const form = document.getElementById("todoForm");
const itemsList = document.getElementById("todoList");

form.addEventListener("submit", (event)=> {
	event.preventDefault();
	addItem();
	ClearInputField();
})

function addItem() {
	const item = document.getElementById("todoInput").value;
	if (item === "")
	{
		alert("Please enter a valid input");
	}
	else
	{	const text = document.createTextNode(item);
		const newItem = document.createElement("li");
		newItem.appendChild(text);
		newItem.className ="li_style";
		document.getElementById("todoList").appendChild(newItem);
		const deleteBtn =  document.createElement("button");
		newItem.appendChild(deleteBtn);
		deleteBtn.innerHTML = "Delete";
		deleteBtn.addEventListener("click", deleteButton);
		editButton(newItem);

	}
}	

function deleteButton(){
	this.parentNode.remove();
}

function editButton(listElement)
{
	const editBtn = document.createElement("button");
	listElement.appendChild(editBtn);
	editBtn.innerHTML = "Edit";
	// const checkBox_btn = document.createElement("checkbox");
	// listElement.appendChild(checkBox_btn);
	// checkBox_btn.innerHTML = "active";
}


function clearAllItems()
{	
	alert("Are you sure you want to delete all of your tasks?")
	console.log(itemsList)
	while (itemsList.hasChildNodes()) {  
		itemsList.removeChild(itemsList.firstChild);
	  }
}

const ClearInputField = () => document.getElementById("todoInput").value = "";





  
