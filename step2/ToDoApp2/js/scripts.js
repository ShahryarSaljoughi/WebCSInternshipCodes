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
  newTodo.classList.add("icon-parent");
  newTodo.innerHTML += item[0];
  panel.appendChild(newTodo);

  var actionsIconElement = document.createElement("span");
  actionsIconElement.classList.add("actions-icon");
  actionsIconElement.classList.add("position-right");

  newTodo.appendChild(actionsIconElement);

  var removeButtonElement = document.createElement("div");
  removeButtonElement.classList.add("removeButtonContainer");
  removeButtonElement.innerHTML = `
  <svg preserveAspectRatio="none" class="svg" viewBox="0 0 100 100">
      <polyline points="30,100 60,100 70,40 20,40 30,100" style="stroke: red;stroke-width:2;color: red;fill:  red;"></polyline>
      <polygon points="14,40, 76,40 73,32 17,32" style="stroke: red;stroke-width: 3;fill: #ff9292;"></polygon>
      <rect x="42" y="29" width="6" height="6" style="stroke: red;fill:  red;"></rect>
      <line x1="33" y1="50" x2="33" y2="75" style="stroke: #ff9292; stroke-width: 3;"></line>
      <line x1="43" y1="50" x2="43" y2="75" style="stroke: #ff9292; stroke-width: 3;"></line>
      <line x1="53" y1="50" x2="53" y2="75" style="stroke: #ff9292; stroke-width: 3;"></line>
    </svg>
  `;
  newTodo.appendChild(removeButtonElement);
  removeButtonElement.addEventListener("click", (ev) => {
    items.splice(item[1], item[1]);
    panel.removeChild(newTodo);
  });
  iconsModule.triggerRendering();
}