let items = [];
var iconsModule = createIconModule();
function addItem(description=document.getElementById("descriptionInput").value) {
  if (!description) {
  	return;
  }
  
  items.push([description, items.length]);
  document.getElementById("descriptionInput").value = "";
  renderItemOnPage(items[items.length-1]);
}

function renderItemOnPage(item) {
  let panel = document.getElementById("rightPanel");

  var newTodo = document.createElement("div");
  newTodo.classList.add("todo");
  newTodo.classList.add("not-completed");
  newTodo.classList.add("parent-of-hidden");
  panel.appendChild(newTodo);
  
  var textNode = document.createElement("span");
  textNode.classList.add("todo-text");
  textNode.innerText = item[0];
  newTodo.appendChild(textNode);

  var removeButton = document.createElement("span");
  removeButton.classList.add("remove-icon");
  removeButton.classList.add("position-right");
  removeButton.classList.add("visible-if-parent-hovered");
  newTodo.appendChild(removeButton);
  
  var editButton = document.createElement("span");
  editButton.classList.add("edit-icon", "visible-if-parent-hovered");
  newTodo.appendChild(editButton);
  
  var completionCheckbox = document.createElement("input");
  completionCheckbox.type = "checkbox";
  completionCheckbox.onchange = (ev) => {
    if (completionCheckbox.checked) {
      newTodo.classList.remove("not-completed");
      newTodo.classList.add("completed");
    }
    else {
      newTodo.classList.remove("completed");
      newTodo.classList.add("not-completed");
    }
  }
  newTodo.insertBefore(completionCheckbox, newTodo.firstChild);

  removeButton.addEventListener("click", (ev) => {
    items.splice(item[1], item[1]);
    panel.removeChild(newTodo);
  });

  editButton.addEventListener("click", (ev) => {
    // it is assumed that the todo text is the first span element:
    var textNode = newTodo.querySelector("span");
    textNode.classList.add("todo-edit-mode");
    textNode.contentEditable = "true";
  })
  textNode.addEventListener("blur", (ev) => {
    item[0] = textNode.innerText;
    textNode.classList.remove("todo-edit-mode");
    textNode.contentEditable = "false";
  })

  iconsModule.triggerRendering();
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