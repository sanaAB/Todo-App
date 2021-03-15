const form = document.getElementById("todoForm");
const itemsList = document.getElementById("todoList");
let isEditable =

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
	{	
		const template = `<li class="li_style"><div class='buttons'><p contenteditable = ${isEditable}>${item}</p><button type="submit" id="deleteBtn" class="delete">delete</button><button type="submit">edit</button></div></li>`;
		itemsList.innerHTML += template;
	 }
}	

itemsList.addEventListener("click", (event) => {
	const clickedEl = event.target;

	if (clickedEl.classList.contains("delete")) {
		deleteButton(clickedEl);
	}
});


function deleteButton(targetItem){
	itemsList.removeChild(targetItem.parentElement.parentElement);	
}

function editButton(listElement)
{
	const editBtn = document.createElement("button");
	listElement.appendChild(editBtn);
	editBtn.innerHTML = "Edit";
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



// const text = document.createTextNode(item);
// 		const newItem = document.createElement("li");
// 		newItem.appendChild(text);
// 		newItem.className ="li_style";
// 		document.getElementById("todoList").appendChild(newItem);
// 		const deleteBtn =  document.createElement("button");
// 		newItem.appendChild(deleteBtn);
// 		deleteBtn.innerHTML = "Delete";
// 		deleteBtn.addEventListener("click", deleteButton);
// 		editButton(newItem);

		//deleteBtn = document.getElementById("deleteBtn");
		//console.log(deleteBtn);
		//deleteBtn.addEventListener("click", deleteButton);
		// deleteBtn.addEventListener("click", (event) => {
		// 	const clickedEl = event.target;
		// 	console.log(clickedEl.parentNode.parentNode);
		// 	console.log(clickedEl.parentElement.parentElement);
		// 	if (clickedEl.classList.contains("delete")) {
		// 		deleteButton(clickedEl);
		// 	}
		//deleteButton(clickedEl);
	// 	}
	// 	);  

	
	// console.log(targetItem); 
	// targetItem.parentElement.parentElement.remove();
	//this.parentNode.parentNode.remove();

		// const checkBox_btn = document.createElement("checkbox");
	// listElement.appendChild(checkBox_btn);
	// checkBox_btn.innerHTML = "active";	