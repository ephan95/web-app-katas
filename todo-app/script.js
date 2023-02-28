const state = {
  todos: [],
};

const addButton = document.getElementById("addNew");
const removeButton = document.getElementById("removeDone");
const filterRadios = document.getElementsByName("toDofilter");

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

filterRadios.forEach((radio) => {
  radio.addEventListener("change", () => {
    render();
  });
});

function renderItem(todo) {
  const newLi = document.createElement("li");
  newLi.classList.add("todoItem");

  const newCheckBox = document.createElement("input");
  newCheckBox.type = "checkbox";
  newCheckBox.checked = todo.done;

  const text = document.createTextNode(todo.description);

  newCheckBox.addEventListener("change", () => {
    todo.done = !todo.done;
    render();
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
    formInputNewTodo.value = ""; //Remove somewhere???? I cant find it
  }
}

function render() {
  const todoListUl = document.getElementById("todoList");
  todoListUl.innerHTML = "";

  const filteredArray = getFilteredArray();
  for (let todo of filteredArray) {
    const newTodoItem = renderItem(todo);
    todoListUl.append(newTodoItem);
  }
}

function removeItem() {
  state.todos = state.todos.filter((todo) => !todo.done);
}

function getFilteredArray() {
  const filterType = document.querySelector(
    'input[name="toDofilter"]:checked'
  ).value;

  switch (filterType) {
    case "all":
      return state.todos;
    case "open":
      return state.todos.filter((item) => !item.done);
    case "done":
      return state.todos.filter((item) => item.done);
    default:
      return state.todos;
  }
}
render();

//TODO: Save list locally -> prüfen ob es null ist, als funktion und dann einfügen
