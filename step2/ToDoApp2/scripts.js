let items = [];

function addItem(description=document.getElementById("descriptionInput").value) {
  if (!description) {
  	return;
  }
  
  items.push(description);
  document.getElementById("descriptionInput").value = "";
  renderItemOnPage(description);
}

function renderItemOnPage(item) {
  let panel = document.getElementById("rightPanel");
  panel.innerHTML += `<div class="todo">
  
  ${item}
</div>`; 
}