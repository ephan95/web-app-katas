const state = {
  todos: [],
  filter: [],
};

const addButton = document.getElementById("addNew");
const removeButton = document.getElementById("removeDone");
const filterRadios = document.getElementsByName("toDofilter");
const formInputNewTodo = document.getElementById("newTodo");

// Event Listeners

addButton.addEventListener("click", (event) => {
  event.preventDefault();
  //reset here doesn't work
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
    getFilter();
    render();
  });
});

formInputNewTodo.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addNewTodo();
    render();
  }
});

//local storage

function updateLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(state.todos));
  localStorage.setItem("filter", JSON.stringify(state.filter));
}

const todosFromLocaleStorageToObject = JSON.parse(
  localStorage.getItem("todos")
);

const filterFromLocaleStorageToObject = JSON.parse(
  localStorage.getItem("filter")
);

if (Array.isArray(todosFromLocaleStorageToObject)) {
  state.todos = todosFromLocaleStorageToObject;
}

if (Array.isArray(filterFromLocaleStorageToObject)) {
  state.filter = filterFromLocaleStorageToObject;
}

initFilter();

// Render Item

function renderItem(todo) {
  const newLi = document.createElement("li");
  newLi.classList.add("todoItem");

  const { done, id } = todo;

  newLi.addEventListener("click", (event) => {
    todo.done = !todo.done;
    render();
  });

  const newCheckBox = document.createElement("input");
  newCheckBox.type = "checkbox";
  newCheckBox.checked = done;
  newCheckBox.id = `todo-${id}`;
  newCheckBox.classList.add("todoCheckbox");

  const newLabel = document.createElement("label");
  newLabel.htmlFor = `todo-${todo.id}`;
  newLabel.innerText = todo.description;
  newLabel.classList.add("todoLabel");

  if (todo.done) {
    newLi.classList.add("strike-through");
  }

  newLi.append(newCheckBox, newLabel);
  return newLi;
}

//Add new Todo

function addNewTodo() {
  const description = formInputNewTodo.value;

  if (
    state.todos.find(
      (todo) => todo.description.toLowerCase() === description.toLowerCase()
    )
  ) {
    alert("Todo with the same description already exists!");
    return;
  }

  if (description !== "" && description.length >= 5) {
    state.todos.push({
      id: +new Date(),
      description: description,
      done: false,
    });
    formInputNewTodo.value = ""; //Reset somewhere???? I cant find it
  }
}

//render list

function render() {
  const todoListUl = document.getElementById("todoList");
  todoListUl.innerHTML = "";

  updateLocalStorage();

  const filteredArray = getFilteredArray();
  for (let todo of filteredArray) {
    const newTodoItem = renderItem(todo);
    todoListUl.append(newTodoItem);
  }
}

// remove done items

function removeItem() {
  state.todos = state.todos.filter((todo) => !todo.done);
}

// update filter

function getFilter() {
  const filter = document.querySelector(
    'input[name="toDofilter"]:checked'
  ).value;
  state.filter = [filter];
}

// initialize filter

function initFilter() {
  const filterValue = state.filter.toString();
  const radio = document.querySelector(`input[value="${filterValue}"]`);
  if (radio) {
    radio.checked = true;
  }
}

// filter result

function getFilteredArray() {
  switch (state.filter.toString()) {
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

//filter im state abspeichern
//filter initialize
