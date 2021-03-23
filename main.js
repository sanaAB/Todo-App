const form = document.getElementById("todoForm");
const itemsList = document.getElementById("todoList");
let isEditable = true;
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
	else if (clickedEl.tagName.toLowerCase() === "input"){
		const checkedBox = clickedEl;
		//checkedBox.checked =true;
		console.log("you clicked now   "+ clickedEl);
		const checkedBoxId = clickedEl.parentElement.parentElement.dataset.id;
		console.log("The id of the clicked element is   "+ checkedBoxId);
		const currTodo = todos.find((todo) => checkedBoxId === todo.id);
		console.log("current todo is Not checked so it's editable " + currTodo.isEditable);
				if(checkedBox.checked){
					currTodo.isDone = true;
					currTodo.isEditable = false;
					console.log(currTodo);
					//event.target.classList.toggle("checked");
					//this.getElementById("p").isEditable = false;
				}
				else 
				{
					currTodo.isDone = false;
					currTodo.isEditable = true;
					console.log(currTodo);
				}
				render();
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


function editButton(listElement)
{
	const editBtn = document.createElement("button");
	listElement.appendChild(editBtn);
	editBtn.innerHTML = "Edit";
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
		// if (todo.isDone=true)
		//  {icontenteditable = false;}
    	// else {icontenteditable = true;}
		const template = `
		<li data-id=${todo.id} class="li_style">
		<div class='buttons'>
			<input type='checkbox' checkbox=${todo.isDone}  />
		  	<p contenteditable=${todo.isEditable} id="p">
			  ${todo.title}
			</p>
		</div>
		<div>
		  <button class="delete">delete</button>
		  <button type="submit">edit</button>
		</div>
		  </li>
		`;
		itemsList.insertAdjacentHTML("beforeend", template);
	});
};

	// const template = `<li class="li_style">
	// 	<div class='buttons'>
	// 		<p contenteditable = ${isEditable}>${item}</p>
	// 		<button type="submit" id="deleteBtn" class="delete">
	// 			delete</button>
	// 		<button type="submit">edit</button>
	// 		</div>
	// 		</li>`;


		// itemsList.innerHTML += template;


	// const template = `
	//   <li>
	// 	<p contenteditable=${isEditable}>${newText}</p>
	// 	<button class="delete">delete</button>
	// 	</li>
	//   `;



	// if(checkedBox.checked)
	// {	
	// 	console.log("inside if checked == true     "+currTodo.isDone);
	// 	currTodo.parentElement.parentElement	.isEditable =false;
	// 	currTodo.isDone = true;
	// 	console.log(currTodo.isDone);
	// }
	

			// }
			// else {
			// 	console.log(checkedBox.checked);

			// 	currTodo.isDone =false;
			// 	currTodo.isEditable = true;
			// }




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