
var numbers_dot = document.querySelectorAll(".main-btn.operand");
for (let element of numbers_dot) {
  element.addEventListener("click", function(ev) {
    current_operand.operand = current_operand.operand.trim() == "0" ? 
        element.innerText : current_operand.operand + element.innerText;
  })
}

var current_operand_ui_element = document.querySelector(".row.current-num");
create_one_way_binding(current_operand, "operand",  current_operand_ui_element);