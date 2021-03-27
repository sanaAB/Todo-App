const form = document.getElementById("todoForm");
const itemsList = document.getElementById("todoList");
const clearAllBtn = document.querySelector("ClearAllBtn");
//let todos = [];
const ClearInputField = () => document.getElementById("todoInput").value = "";
let todos = JSON.parse(localStorage.getItem("todos")) || [];


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
				saveAndRender();
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
				  saveAndRender();
				}
			};
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
		  saveAndRender();
		}

};	


function deleteButton(targetItem){
	const clickedItemId =targetItem.parentElement.parentElement.dataset.id;
	todos = todos.filter((todo, index) => {
		return todo.id !== clickedItemId;
	  });

	  saveAndRender();
	};


function DoneTasks()
{	doneTasks = [];
	for(let i=0; i< todos.length ; i++){
		if (todos[i].isDone === true)
		doneTasks.push(todos[i]);
	} 
	// if(doneTasks.length == 0){alert("You haven't completed any task");
	// render(todos);}
	render(doneTasks);
	return doneTasks;
}

// function allTasks(){
// 	const allTodos =[];
// 	for(let i=0; i< todos.length ; i++){
// 		allTodos.push(todos[i]);
// }
// 	render(allTodos);
// 	return(allTodos);
// }

//const  allTasks = () => render(todos);

function clearAllItems()
{	
	while (itemsList.hasChildNodes()) {  
		itemsList.removeChild(itemsList.firstChild);
	  }
}

const ClearButton = () =>{
	alert("Are you sure you want to delete all of your todos?");
	clearAllItems();
	todos = [];
	saveAndRender();

} 


function render() {
	// if (newToDos){
	// 	todos = newToDos;
	// }
	clearAllItems();
	todos.forEach((todo) => {
		const template = `
		<li data-id=${todo.id}  class='${todo.isDone ? "checked-todo li_style"  : "li_style"} ' >
		<div class='buttons'>
			<input type='checkbox' ${todo.isDone ? "checked" : null}  />
		  	<p contenteditable='${!todo.isDone}' id="p"  >
			  ${todo.title}
			</p>
		</div>
		<div class="delete_Btn">
		  <button class="delete">delete</button>
		</div>
		  </li>
		`;
		itemsList.insertAdjacentHTML("beforeend", template);
	});
};

function save() {
	localStorage.setItem("todos", JSON.stringify(todos));
  }
  
  function saveAndRender() {
	save();
	render();
  }
  
  function init() {
	render();
  }
  
  init();








