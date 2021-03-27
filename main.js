const form = document.getElementById("todoForm");
const itemsList = document.getElementById("todoList");
//let isEditable = true;
const clearAllBtn = document.querySelector("ClearAllBtn");
let todos = [];
const ClearInputField = () => document.getElementById("todoInput").value = "";



form.addEventListener("submit", (event)=> {
	event.preventDefault();
	addItem();
	ClearInputField();
});


itemsList.addEventListener("click", (event) => {
	const clickedEl = event.target;
	if (clickedEl.classList.contains("delete")) {
		deleteButton(clickedEl);
	}
	else if (clickedEl.tagName.toLowerCase() === "input"){
		const checkedBox = clickedEl;
		const checkedBoxId = clickedEl.parentElement.parentElement.dataset.id;
		const currTodo = todos.find((todo) => checkedBoxId === todo.id);
				if(clickedEl.checked){
					currTodo.isDone = true;
					//currTodo.isEditable = false;
					console.log(`"checkbox is checked" ${currTodo}`);
				}
				else 
				{
					currTodo.isDone = false;
					//currTodo.isEditable = true;
					console.log("checkbox is unchecked");
				}
				render();
	}

		else if (clickedEl.tagName.toLowerCase() === "p") {
		clickedEl.onkeydown = (event) => {
			if (event.key === "Enter") {
				event.preventDefault(); // prevents line breaks
				const newText = clickedEl.textContent;
				if (clickedEl.textContent.trim().length < 2) {
					return alert("Todo item cannot be empty or less then two chars.");
				  }
				  const clickedItemId = clickedEl.parentElement.parentElement.dataset.id;
				  const currTodo = todos.find((todo) => clickedItemId === todo.id);
				  currTodo.title = newText;
				  //currTodo.isEditable = false;
				  render();	
				}
			};
	}
	else if (clickedEl.classList.contains("edit")){
		editButton();
	}
});


function addItem() {
	const item = document.getElementById("todoInput").value;
	if (item.value === "")
	{
		alert("Please enter a valid input");
	}
	else
	{	
		const newTodo = {
			id: (Date.now() + Math.random()).toString(),
			title: item,
			isEditable: true,
			isDone: false
		  };
		  todos.push(newTodo);
		  render();
	 }

};	


function deleteButton(targetItem){
	const clickedItemId =targetItem.parentElement.parentElement.dataset.id;
	todos = todos.filter((todo, index) => {
		return todo.id !== clickedItemId;
	  });

	render();
};


function editButton()
{	doneTasks = [];
	console.log("inside edit func")
	for(todo in todos){
		if (todo.isDone === true)
		doneTasks.push(todo);
	} 
	render();
	console.log(doneTasks);
	return doneTasks;


	// const editBtn = document.createElement("button");
	// listElement.appendChild(editBtn);
	// editBtn.innerHTML = "Edit";
}


function clearAllItems()
{	
	//alert("Are you sure you want to delete all of your tasks?")
	console.log(itemsList)
	while (itemsList.hasChildNodes()) {  
		itemsList.removeChild(itemsList.firstChild);
	  }
}

const ClearButton = () =>{
	clearAllItems();
	todos = [];
} 


function render() {
	clearAllItems();
	todos.forEach((todo) => {
		const template = `
		<li data-id=${todo.id} class='${todo.isDone ? "checked-todo" : ""}' >
		<div class='buttons'>
			<input type='checkbox' ${todo.isDone ? "checked" : null}  />
		  	<p contenteditable='${!todo.isDone}' id="p"  >
			  ${todo.title}
			</p>
		</div>
		<div class="delete_Btn">
		  <button class="delete">delete</button>
		  <button class="edit">edit</button>
		</div>
		  </li>
		`;
		itemsList.insertAdjacentHTML("beforeend", template);
	});
};








