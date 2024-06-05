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
        <p class="title">${todo.plan}</p>
        <button>Edit</button>
        <button class="deleteBtn">Delete</button>
    </div> 
    
    
    `;
  });

  // deleteBtn

  const deleteBtns = document.querySelectorAll(".deleteBtn");

  deleteBtns.forEach((dbtn) => {
    dbtn.addEventListener("click", (e) => {
      const todo = e.target.parentElement;

      const tag = todo.querySelector(".title").innerHTML;

      todos = todos.filter((p) => {
        return p.plan !== tag;
      });

      todo.remove();
    });
  });
});












//     allCart.innerHTML = listProduct.map(
//       (product) =>
//         `

//      `
//     );
