// 1. it should have a place to store todos
let todos = [];

  function addTodo() {
    //get value from the input text
    let input = document.getElementById('input').value;

    //append data to the todo array;
    todos.push(input);

// 2. it should have a way to display todos
    let pval = '';

    for(i = 0; i < todos.length; i++) {
      pval += `<input value='${todos[i]}' type="text" /> <input onclick="editTodo();" id="edit" type="button"  value="Edit Todo"/> <br/>`;
    }
    //display array data
    document.getElementById('pText').innerHTML = pval + '<br/>';

  }

// 3 .it should have a way to add new todos
// 4 .it should have a way to edit a todos
function editTodo() {

}
// 5. it should have a way to delete a todo

