

function createViewsModule() {
  controller = createControllerModule();
  var iconsModule = createIconModule();
  let panel = document.getElementById("rightPanel");

  var addTodoButton = document.getElementById("addTodo");
  addTodoButton.addEventListener("click", ev => {
    var description = document.getElementById("descriptionInput").value;
    controller.addTodo(description);
    document.getElementById("descriptionInput").value = "";
  });

  var filterNotCompletedButton = document.getElementById("filterNotCompleted");
  filterNotCompletedButton.addEventListener("click", ev => {
    makeVisibleElementsWithClass();
    hideElementsWithClass('not-completed');
  });
  var filterCompletedButton = document.getElementById("filterCompleted");
  filterCompletedButton.addEventListener("click", ev => {
    makeVisibleElementsWithClass();
    hideElementsWithClass('completed');
  });
  var showAllButton = document.getElementById("showAll");
  showAllButton.addEventListener("click", () => {
    makeVisibleElementsWithClass();
  })

  function renderAllTodoItems(todoArray) {
    panel.innerHTML = "";
    todoArray.forEach(element => {
      var isVisible = element[2];
      if (isVisible) {
        renderTodo(element);
      }
    });
  }

  /**
   * @param  {{todoDescription: string, todoIndex: number, visible: boolean}} todo
   */
  function renderTodo(todo) {
    var todoInEditableMode = todo[3];
    var todoIsDone = todo[4];
    
    var newTodo = document.createElement("div");
    var textNode = document.createElement("span");
    var removeButton = document.createElement("span");
    var editButton = document.createElement("span"); 
    var completionCheckbox = document.createElement("input");
    
    if(todoIsDone) {
      newTodo.classList.add("completed");
      completionCheckbox.checked = true;
    } else {
      newTodo.classList.add("not-completed");
    }

    if (todoInEditableMode) {
      textNode.classList.add("todo-edit-mode");
      textNode.contentEditable = "true";
    }

    newTodo.classList.add("todo", "parent-of-hidden");
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

    removeButton.addEventListener("click", () => {  
      controller.removeTodo(todo);
    });
    editButton.addEventListener("click", ev => {
      controller.makeTodoEditable(todo);
    });
    textNode.addEventListener("blur", ev => {
      controller.applyEdit(textNode, todo);
    });
    completionCheckbox.onchange = () => {
      if (completionCheckbox.checked) {
        controller.markAsDone(todo);
      } else {
        controller.markAsNotDone(todo);
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
  return {
    renderAllTodoItems: renderAllTodoItems
  }
}