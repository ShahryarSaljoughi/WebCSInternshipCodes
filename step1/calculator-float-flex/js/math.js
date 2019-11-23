


var currentExpression = {
  jsExpression : "",
  userFriendlyExpression: ""
};

var current_operand = {
  operand: "",
};
function get_result() {
  return eval(math_expression);
}

function reset() {
  math_expression = "";
}

function append(item) {
  math_expression += item;
}

function remove_one_char() {
  
}

