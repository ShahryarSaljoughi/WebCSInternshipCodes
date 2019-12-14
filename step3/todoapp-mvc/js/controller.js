var models = createModelsModule();
var views = createViewsModule();
function createControllerModule() {
  function addTodo(description) {
    if (!description) {return;}
    var todoItemIndex = modelsAccessMethods.addItem(description);
    views.renderAllTodoItems(modelsAccessMethods.getAll());
  }
  
  
  
  function removeTodo(todo) {
    modelsAccessMethods.removeItem(todo[1]);
    views.renderAllTodoItems(modelsAccessMethods.getAll());
  }
  function makeTodoEditable(todo) {
    todo[3] = true;
    views.renderAllTodoItems(modelsAccessMethods.getAll());
  }
  function applyEdit(textNode, todoItem) {
    todoItem[0] = textNode.innerText;
    todoItem[3] = false;
    views.renderAllTodoItems(modelsAccessMethods.getAll());
  }
  function markAsDone(todo) {
    todo[4] = true;
    views.renderAllTodoItems(modelsAccessMethods.getAll());
  }
  function markAsNotDone(todo) {
    todo[4] = false;
    views.renderAllTodoItems(modelsAccessMethods.getAll());
  }
  return {
    removeTodo: removeTodo,
    addTodo: addTodo,
    makeTodoEditable: makeTodoEditable,
    applyEdit: applyEdit,
    markAsDone: markAsDone,
    markAsNotDone: markAsNotDone,
  }
}

var modelsAccessMethods = {
  addItem: function(todoDescription, visible=true, editable=false, done=false) {
    if (!todoDescription) {
      return;
    }
    models.items.push([todoDescription, models.items.length, visible, editable, done]);
    return models.items.length -1 ; 
  },
  removeItem: function (todoIndex) {
    models.items.splice(todoIndex, 1) ;
  },
  getLastItem: function() {
    return models.items[items.length - 1];
  },
  getAll: function() {
    return models.items;
  }
}
