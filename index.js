const addTaskBtn = document.querySelector(".addTaskBtn");
const todoInput = document.querySelector(".todoInput");
let todosContainer = document.querySelector(".todos");

let todos = [];

addTaskBtn.addEventListener("click", () => {
  const inputValue = todoInput.value;
  const todo = { plan: inputValue };

  if (inputValue == "") {
    alert("Please Enter todo");
  } else {
    todos.push(todo);
    todoInput.value = "";
  }

  todosContainer.innerHTML = "";

  todos.forEach((todo) => {
    todosContainer.innerHTML += `
     <div class="todo">
        <input class="title" type="text" value="${todo.plan}" readonly>
        <button class="editBtn">Edit</button>
        <button class="deleteBtn">Delete</button>
    </div> 
    
    
    `;
  });





  // deleteBtn

  const deleteBtns = document.querySelectorAll(".deleteBtn");

  deleteBtns.forEach((dbtn) => {
    dbtn.addEventListener("click", (e) => {
      const todo = e.target.parentElement;

      const tag = todo.querySelector(".title").value;

      todos = todos.filter((p) => p.plan !== tag);

      console.log(todos);

      todo.remove();
    });
  });


  // editbtn

  const editBtns = document.querySelectorAll(".editBtn")

  editBtns.forEach((ebtn)=>{
    ebtn.addEventListener("click", (e)=>{
       const parentElement = e.target.parentElement;
       const tag = parentElement.querySelector(".title")

       if(ebtn.innerText == "Edit"){
        tag.removeAttribute("readonly")
        tag.focus()
        ebtn.innerText = "Save"
       } else{
        tag.setAttribute("readonly", "readonly");
        ebtn.innerText = "Edit";
       }

    })
  })





});









//     allCart.innerHTML = listProduct.map(
//       (product) =>
//         `

//      `
//     );
