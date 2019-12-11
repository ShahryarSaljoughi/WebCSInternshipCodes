var models = createModelsModule();
var views = createViewsModule();

function addTodo() {
  description = document.getElementById("descriptionInput").value;
  if (!description) {return;}
  var todoItemIndex = models.addItem(description);
  document.getElementById("descriptionInput").value = "";
  var todoView = views.createTodoView(models.getLastItem());
  
  todoView.removeButton.addEventListener("click", () => {
    todoView.removeTodo();
    models.removeItem(todoItemIndex);
  });
  
  todoView.completionCheckBox.onchange = () => {
    if (todoView.completionCheckBox.checked) {
      todoView.applyCompletedTodoStyle();
    } else {
      todoView.applyNotCompletedTodoStyle();
    }
  }
}

/**
 * @param  {string} className
 */
function hideElementsWithClass(className) {
  elements = document.getElementsByClassName(className);
  
  for(var elem of elements) {
    elem.classList.add("hidden");
  }
}

function makeVisibleElementsWithClass(className) {
  if(!className) { className = "todo";}
  var elements = document.getElementsByClassName(className);
  for(var elem of elements) {
    elem.classList.remove("hidden");
  }
}