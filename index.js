// 1. it should have a place to store todos
// 2. it should have a way to display todos
// 3 .it should have a way to add new todos
let todos = [];
let list  = document.querySelector('.list');

function addTodo() {
  //  get value from the input text
  let todo = document.getElementById('input').value;
  //  append data to the todo array;
  todos.push(todo);
}

function removeTodos() {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}
function displayTodos() {
  for(i = 0; i < todos.length; i++) {

    let todo = document.createElement('div');
    todo.className = `todo-${i}`
    todo.id = i;

    let content = document.createElement('div');
    content.className = 'content';
    content.innerText = todos[i];
    todo.appendChild(content)

    let edit = document.createElement('button');
    edit.className = 'edit';
    edit.innerText = "✎"
    todo.appendChild(edit);

    let del = document.createElement('button');
    del.className = 'delete'
    del.innerText = '🗑'
    todo.appendChild(del)
    list.appendChild(todo)
  }
}

// 4 .it should have a way to edit a todos
function editTodo(e) {
  let todoItem = e.target.parentNode;
  let todotext = e.target.parentNode.firstChild.innerText
  //remove the content div and replace it with the edit input
  e.target.parentNode.firstChild.remove();
  let editInput = document.createElement('input');
  editInput.className = 'editing'
  editInput.value = todotext;
  todoItem.insertBefore(editInput, e.target.parentNode.firstChild)
}

// 5. it should have a way to delete a todo
function deleteTodo(e) {
 // delete the todo item from DOM
e.target.parentNode.remove();

 // delete the todo element from todos array
 console.log(e.target.parentNode.id)
 let index = e.target.parentNode.id
 todos.splice(index, 1)
 console.log(todos)
}

let addbtn = document.getElementById('add');
addbtn.addEventListener('click', function(e) {
  addTodo();
  removeTodos(e);
  displayTodos();
});

$(document).on('click', '.delete', deleteTodo)

$(document).on('click', '.edit', editTodo)

$(document).on('keypress', '.editing', function(e) {
  var key = e.which || e.keyCode;
    if (key === 13) { // 13 is enter
      let updatedTodo = e.target.value
      let index = e.target.parentNode.id
      todos.splice(index, 1, updatedTodo)
      console.log(todos)

      e.target.parentNode.firstChild.remove();
      let content = document.createElement('div')
      content.className = 'content'
      content.textContent = updatedTodo;
      $(".todo-" + index).prepend(content);

    }
})
