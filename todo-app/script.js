const state = {
  todos: [],
};

const addButton = document.getElementById("addNew");
const removeButton = document.getElementById("removeDone");

addButton.addEventListener("click", (event) => {
  event.preventDefault();

  addNewTodo();
  render();
});

removeButton.addEventListener("click", (event) => {
  event.preventDefault();

  removeItem();
  render();
});

function renderItem(todo) {
  const newLi = document.createElement("li");
  newLi.classList.add("todoItem");

  const newCheckBox = document.createElement("input");
  newCheckBox.type = "checkbox";
  newCheckBox.checked = todo.done;

  const text = document.createTextNode(todo.description);

  newCheckBox.addEventListener("change", () => {
    todo.done = newCheckBox.checked;
    newLi.classList.add("strike-through");
  });

  if (todo.done) {
    newLi.classList.add("strike-through");
  }

  newLi.append(newCheckBox, text);
  return newLi;
}

function addNewTodo() {
  const formInputNewTodo = document.getElementById("newTodo");
  const description = formInputNewTodo.value;

  if (
    state.todos.find(
      (todo) => todo.description.toLowerCase() === description.toLowerCase()
    )
  ) {
    alert("Todo with the same description already exists!");
    return;
  }

  if (description !== "") {
    state.todos.push({
      id: +new Date(),
      description: description,
      done: false,
    });
    formInputNewTodo.value = "";
  }
}

function render() {
  const todoListUl = document.getElementById("todoList");
  todoListUl.innerHTML = "";

  for (let todo of state.todos) {
    const newTodoItem = renderItem(todo);
    todoListUl.append(newTodoItem);
  }
}

function removeItem() {
  state.todos = state.todos.filter((todo) => !todo.done);
}

render();

//TODO: Save list locally
