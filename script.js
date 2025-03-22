var addButton = document.getElementById("addTodo");
var ul = document.getElementById("todoList");
var input = document.getElementById("todoInput");

function addTodoAfterClick (){
if (input.value.length > 0 ) {
  var li = document.createElement("li");
  var button = document.createElement("button");
  button.appendChild(document.createTextNode("Delete"));
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  li.appendChild(button);
  li.addEventListener("click", function () {
    li.classList.toggle("done");
  });
  button.addEventListener("click", function(){
    li.remove();
  });
  input.value="";
}
}

function addTodoAfterKeypress(event){
  if (input.value.length > 0 && event.key === "Enter") {
  var li = document.createElement("li");
  var button = document.createElement("button");
  button.appendChild(document.createTextNode("Delete"));
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  li.appendChild(button);
  li.addEventListener("click", function () {
    li.classList.toggle("done");
  });
  button.addEventListener("click", function(){
    li.remove();
  });
  input.value="";
}
}


addButton.addEventListener ("click", addTodoAfterClick);
input.addEventListener("keydown", addTodoAfterKeypress);
