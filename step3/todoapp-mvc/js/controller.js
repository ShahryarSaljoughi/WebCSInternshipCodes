

var Controller = (function createControllerModule() {

  var me;
  //constructor
  function ControllerModule(view) {
    this.view = view;
    this.models = createModelsModule();
    this.view.init(this.api)
    me = this;
  }
  ControllerModule.prototype.api = {
    removeTodo: removeTodo.bind(this),
    addTodo: addTodo.bind(this),
    makeTodoEditable: makeTodoEditable.bind(this),
    applyEdit: applyEdit.bind(this),
    markAsDone: markAsDone.bind(this),
    markAsNotDone: markAsNotDone.bind(this),
  }
  var modelsAccessMethods = {
    addItem: function (todoDescription, visible = true, editable = false, done = false) {
      if (!todoDescription) {
        return;
      }
      me.models.items.push([todoDescription, me.models.items.length, visible, editable, done]);
      return me.models.items.length - 1;
    },
    removeItem: function (todoIndex) {
      me.models.items.splice(todoIndex, 1);
    },
    getLastItem: function () {
      return me.models.items[items.length - 1];
    },
    getAll: function () {
      return me.models.items;
    }
  }
  return ControllerModule;

  function addTodo(description) {
    if (!description) { return; }
    var todoItemIndex = modelsAccessMethods.addItem(description);
    this.view.renderAllTodoItems(modelsAccessMethods.getAll());
  }

  function removeTodo(todo) {
    modelsAccessMethods.removeItem(todo[1]);
    this.view.renderAllTodoItems(modelsAccessMethods.getAll());
  }
  function makeTodoEditable(todo) {
    todo[3] = true;
    this.view.renderAllTodoItems(modelsAccessMethods.getAll());
  }
  function applyEdit(textNode, todoItem) {
    todoItem[0] = textNode.innerText;
    todoItem[3] = false;
    this.view.renderAllTodoItems(modelsAccessMethods.getAll());
  }
  function markAsDone(todo) {
    todo[4] = true;
    this.view.renderAllTodoItems(modelsAccessMethods.getAll());
  }
  function markAsNotDone(todo) {
    todo[4] = false;
    this.view.renderAllTodoItems(modelsAccessMethods.getAll());
  }
})();

