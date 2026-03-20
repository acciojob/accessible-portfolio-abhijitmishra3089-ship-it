//your code here
const li = document.createElement("li");
li.setAttribute("role", "listitem");
li.textContent = "New Task";
document.getElementById("todo-list").appendChild(li);