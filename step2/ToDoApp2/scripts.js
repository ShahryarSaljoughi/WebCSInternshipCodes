class Task {
  constructor(description, deadline, order) {
    this.description = description;
    this._deadline = deadline;
    this.id = uuidv4();
  }
  get deadline() {   }
  set deadline(value) {   }
}

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

let items = [];

function addItem(description=document.getElementById("descriptionInput").value) {
  let item= new Task(description)
  items.push(item);
  renderItemOnPage(item);
}

function renderItemOnPage(item) {
  let panel = document.getElementById("rightPanel");
  panel.innerHTML += `<div class="todo">
  <div class="close">X</div>
  ${item.description}
</div>`; 
}