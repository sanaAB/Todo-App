const form = document.getElementById("todoForm");
form.addEventListener("submit", (event)=> {
	event.preventDefault();
	addItem();
})

function addItem() {
	var item = document.getElementById("todoInput").value;
	if (item === "")
	{
		alert("Please enter a valid input");
	}
	else
	{	var text = document.createTextNode(item);
		var newItem = document.createElement("li");
		newItem.appendChild(text);
		document.getElementById("todoList").appendChild(newItem);
		const deleteBtn =  document.createElement("button");
		newItem.appendChild(deleteBtn);
		deleteBtn.innerHTML = "delete item";
		deleteBtn.addEventListener("click", deleteButton);
		editButton(newItem);
		ClearInputField();
	}
}	

function deleteButton(){
	this.parentNode.remove();
}

function editButton(listElement)
{
	var editBtn = document.createElement("button");
	listElement.appendChild(editBtn);
	editBtn.innerHTML = "Edit item";
}


function clearAllItems()
{	
	var itemsList = document.getElementById("todoList");
	console.log(itemsList)
	while (itemsList.hasChildNodes()) {  
		itemsList.removeChild(itemsList.firstChild);
	  }
}

const ClearInputField = () => document.getElementById("todoInput").value = "";

