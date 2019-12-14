var models = createModelsModule();
var views = createViewsModule();
function createControllerModule() {
  function addTodo(description) {
    if (!description) {return;}
    var todoItemIndex = models.addItem(description);
    views.renderAllTodoItems(models.getAll());
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
  
  function removeTodo(todo) {
    models.removeItem(todo[1]);
    views.renderAllTodoItems(models.getAll());
  }
  function makeTodoEditable(todo) {
    todo[3] = true;
    views.renderAllTodoItems(models.getAll());
  }
  function applyEdit(textNode, todoItem) {
    todoItem[0] = textNode.innerText;
    todoItem[3] = false;
    views.renderAllTodoItems(models.getAll());
  }
  function markAsDone(todo) {
    todo[4] = true;
    views.renderAllTodoItems(models.getAll());
  }
  function markAsNotDone(todo) {
    todo[4] = false;
    views.renderAllTodoItems(models.getAll());
  }
  return {
    removeTodo: removeTodo,
    addTodo: addTodo,
    makeTodoEditable: makeTodoEditable,
    applyEdit: applyEdit,
    markAsDone: markAsDone,
    markAsNotDone: markAsNotDone,
    makeVisibleElementsWithClass: makeVisibleElementsWithClass,
    hideElementsWithClass: hideElementsWithClass
  }
}
