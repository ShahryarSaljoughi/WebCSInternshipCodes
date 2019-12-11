

function createViewsModule() {
  var iconsModule = createIconModule();
  let panel = document.getElementById("rightPanel");

  /**
   * @param  {{todoDescription: string, todoIndex: number}} todo
   */
  function showTodo(todo) {
  
    var newTodo = document.createElement("div");
    var textNode = document.createElement("span");
    var removeButton = document.createElement("span");
    var editButton = document.createElement("span"); 
    var completionCheckbox = document.createElement("input");
    
    newTodo.classList.add("todo", "not-completed", "parent-of-hidden");
    removeButton.classList.add("remove-icon", "position-right", "visible-if-parent-hovered");
    textNode.classList.add("todo-text");
    editButton.classList.add("edit-icon", "visible-if-parent-hovered");
    
    textNode.innerText = todo[0]; 
    completionCheckbox.type = "checkbox";
    
    panel.appendChild(newTodo);
    newTodo.appendChild(textNode);
    newTodo.appendChild(removeButton);
    newTodo.appendChild(editButton);
    
    newTodo.insertBefore(completionCheckbox, newTodo.firstChild);

    iconsModule.triggerRendering();
  
    return {
      completionCheckBox: completionCheckbox,
      removeButton: removeButton,
      editButton: editButton,
      textNode: textNode,
      todoNode: newTodo,
      applyCompletedTodoStyle: () => applyCompletedTodoStyle(newTodo),
      applyNotCompletedTodoStyle: () => applyNotCompletedTodoStyle(newTodo),
      removeTodo: () => removeTodo(newTodo),
      editTodo: () => activateEditMode(textNode),
      extEditing: (todoItem) => deactivateEditMode(textNode, todoItem),
    }
    // both remove button and a function to remove the todo is returned. remove button does not call the remove function.
    // this is because, controller is the one who decides what happens when the remove button is pressed.
    // controller will bind the button to that function.
  }

  function applyCompletedTodoStyle(todoNode) {
    todoNode.classList.remove("not-completed");
    todoNode.classList.add("completed");
  }
  function applyNotCompletedTodoStyle(todoNode) {
    todoNode.classList.remove("completed");
    todoNode.classList.add("not-completed");
  }
  function removeTodo(todoNode) {
    panel.removeChild(todoNode);
  }
  function activateEditMode(textNode) {
    textNode.classList.add("todo-edit-mode");
    textNode.contentEditable = "true";
  }
  function deactivateEditMode(textNode, todoItem) {
    item[0] = textNode.innerText;
    textNode.classList.remove("todo-edit-mode");
    textNode.contentEditable = "false";
  }

  return {
    createTodoView: showTodo
  }
}