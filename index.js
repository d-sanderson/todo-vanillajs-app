// 1. it should have a place to store todos
let todos = [];

  function addTodo() {
    //get value from the input text
    let input = document.getElementById('input').value;

    //append data to the todo array;
    todos.push(input);

// 2. it should have a way to display todos
// 3 .it should have a way to add new todos
    let pval = '';



    for(i = 0; i < todos.length; i++) {
      pval += `
      <span class="todo" id=${todos.indexOf(todos[i])}>✳️ ${todos[i]}</span>
      <br/>
      <input onclick="editTodo();" id="${todos.indexOf(todos[i])}" type="button"  value="✎"/>
      <input onclick="deleteTodo();" id="${todos.indexOf(todos[i])}" type="button"  value="🗑"/>
      <br/>`;
    }
    //display array data
    document.getElementById('pText').innerHTML = pval + '<br/>';
}

let addbtn = document.getElementById('add');
addbtn.addEventListener('click', addTodo);

// 4 .it should have a way to edit a todos
function editTodo() {
  for(i = 0; i < todos.length; i++) {

  }
}
// 5. it should have a way to delete a todo
function deleteTodo() {


}

// jQuery that triggers the addTodo function when user presses enter
$(document).ready(function(){
  $('#input').keypress(function(e){
    if(e.keyCode==13)
    $('#add').click();
  });
});