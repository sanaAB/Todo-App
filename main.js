const ulList = document.getElementById("todoList");

function addItem()
{
	var item = document.getElementById("todoInput").value;
	if (item == "")
	{
		alert("Please enter a valid input");
	}
	else
	{
		const template = `<li class="todo-item">${item}
		 <button id="delete">Delete item</button>
		 <button id="Edit">Edit item</button></li>`;
		//ulList.appendChild = template;
		ulList.innerHTML += template;
		console.log(ulList)
		const deleteBtn =  document.getElementById("delete");
		deleteBtn.addEventListener("click", deleteButton)
	}
}
const form = document.getElementById("todoForm");
form.addEventListener("submit", (event)=> {
	event.preventDefault();
	addItem();
	ClearInputField();

})

function deleteButton(event){
	event.currentTarget = removeChild();
	//deleteBtn.onclick =  deleteButton;
	//console.log(event);
	
	//const listItem = event.currentTarget;
-/	//console.log(listItem);

	//listItem.innerHTML = "";
	//ulList.removeChild(listItem);
	//deleteBtn.onclick =  del = () =>{listElement.innerHTML ="" ;}
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


















// function addItem() {
// 	// store user value
// 	var item = document.getElementById("todoInput").value;
// 	if (item === "")
// 	{
// 		alert("Please enter a valid input");
// 	}
// 	else
// 	{	var text = document.createTextNode(item);
// 		var newItem = document.createElement("li");
// 		newItem.appendChild(text);
// 		document.getElementById("todoList").appendChild(newItem);
// 		deleteButton(newItem);
// 		editButton(newItem);
// 		ClearInputField();
// 	}
// }