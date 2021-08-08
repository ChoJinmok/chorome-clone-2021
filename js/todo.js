const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoLists = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const parent = event.target.parentElement;
    parent.remove();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    li.innerHTML = `<span>${newTodo.text}</span>`;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(button);
    toDoLists.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        id: Date.now(),
        text: newTodo
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = JSON.parse(localStorage.getItem(TODOS_KEY));

if (savedToDos) {
    toDos = savedToDos;
    savedToDos.forEach(paintToDo);
}