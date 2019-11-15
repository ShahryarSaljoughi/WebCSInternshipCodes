
var current_math_expression = "";
var current_operand = {
  operand: "",
};
function get_result() {
  return eval(current_math_expression);
}

function reset() {
  current_math_expression = "";
}

function append(item) {
  current_math_expression += item;
}

function remove_one_char() {
  
}