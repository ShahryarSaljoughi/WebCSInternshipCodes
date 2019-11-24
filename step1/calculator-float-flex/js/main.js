// import {currentExpression} from 'math'
// import {current_operand} from 'math'


// bind numbers and dot:
var numbers_dot = document.querySelectorAll(".main-btn.operand");
enteringNewOperand = true;
var shouldLoadOperandIntoExpression = true;
for (let element of numbers_dot) {
  element.addEventListener("click", function(ev) {
    if (enteringNewOperand) {
      current_operand.operand = element.innerText;
      enteringNewOperand = false;
    }
    else {
      current_operand.operand += element.innerText;
    }
  });
}

// bind monitor of calculator:
var current_operand_ui_element = document.querySelector(".row.current-num");
create_one_way_binding(current_operand, "operand",  current_operand_ui_element);
math_expression_ui_element = document.querySelector(".already-inserted");
create_one_way_binding(currentExpression, "userFriendlyExpression", math_expression_ui_element);

operatorJsEquivalent = {
  "+": {
    jsForm: function(exp=currentExpression.jsExpression) { 
      currentExpression.jsExpression = `${currentExpression.jsExpression} + `;
    },
    userFriendlyForm: function() {
      currentExpression.userFriendlyExpression = `${currentExpression.userFriendlyExpression} +`;
    } 
  },
  "×": {
    jsForm: function() {
      currentExpression.jsExpression = `(${currentExpression.jsExpression}) * `;
    },
    userFriendlyForm: function() {
      currentExpression.userFriendlyExpression += '×';
    },
  },
  "÷": {
    jsForm: function() {
      currentExpression.jsExpression = `(${currentExpression.jsExpression}) / `;
    },
    userFriendlyForm: function() {
      currentExpression.userFriendlyExpression += ' ÷ ';
    } 
  },
  "-": {
    jsForm: function() {
      currentExpression.jsExpression = `(${currentExpression.jsExpression}) - `;
    },
    userFriendlyForm: function() {
      currentExpression.userFriendlyExpression = `${currentExpression.userFriendlyExpression} - `;
    }
  },
  "1/x": {
    jsForm: function() {
      currentExpression.jsExpression += ` 1/(${current_operand.operand})`;
    },
    userFriendlyForm: function() {
      currentExpression.userFriendlyExpression +=  `1/(${current_operand.operand})`;
    }
  },
  "x2": {
    jsForm: function() {
      currentExpression.jsExpression += `(${current_operand.operand**2})`;
    },
    userFriendlyForm() {
      currentExpression.userFriendlyExpression += `sqr(${current_operand.operand})`;
    }
  },
  "x3": {
    jsForm: function() {
      currentExpression.jsExpression += `(${current_operand.operand}**3)`;
    },
    userFriendlyForm() {
      currentExpression.userFriendlyExpression += `cube(${current_operand.operand})`;
    } 
  },"√": {
    jsForm: function() {
      currentExpression.jsExpression += `Math.sqrt(${current_operand.operand})`;
    },
    userFriendlyForm() {
      currentExpression.userFriendlyExpression += `√(${current_operand.operand})`;
    } 
  }
}

var unaryOperatorsFunctions = {
  "1/x": function () {
    return 1/current_operand.operand;
  },
  "x2": function() {
    return current_operand.operand ** 2;
  },
  "x3": function() {
    return current_operand.operand ** 3;
  },
  "√": function() {
    return Math.sqrt(current_operand.operand);
  } 
}
function binaryOperatorButtonHandler(element) {
  if (shouldLoadOperandIntoExpression) {
    loadOperandIntoExpressions();
  }
  else {
    shouldLoadOperandIntoExpression = true;
  }
  evaluateResult();
  
  operatorJsEquivalent[element.innerText].jsForm();
  operatorJsEquivalent[element.innerText].userFriendlyForm();

  enteringNewOperand = true;
}

function loadOperandIntoExpressions() {
  currentExpression.jsExpression += current_operand.operand;
  currentExpression.userFriendlyExpression += current_operand.operand;
}

function evaluateResult() {
  current_operand.operand = eval(currentExpression.jsExpression);
}

var binary_operators_elements = document.querySelectorAll(".row.keypad .main-btn:nth-child(5n):nth-child(-5n + 20)")
for(let button of binary_operators_elements) {
  button.addEventListener("click", function(ev){binaryOperatorButtonHandler(button)})
}

function removeLastDigit() {
  current_operand.operand = current_operand.operand.slice(0, -1)
}

removeElement = document.querySelector(".row.keypad div:nth-child(4)");
removeElement.addEventListener("click", removeLastDigit);

showResultElement = document.querySelector(".row.keypad div:nth-child(25)");
showResultElement.addEventListener("click", showResult);

function showResult() {
  if (shouldLoadOperandIntoExpression) {
    loadOperandIntoExpressions();
  } else {
    shouldLoadOperandIntoExpression = true;
  }
  evaluateResult();
  clearExpression();
  enteringNewOperand = true;
}

function clearWhole() {
  clearOperand();
  clearExpression();
}

function clearOperand() {
  current_operand.operand = "0";
  enteringNewOperand = true;
}
function clearExpression() {
  currentExpression.jsExpression = "";
  currentExpression.userFriendlyExpression = "";
  enteringNewOperand = true;
}
clearWholeElement = document.querySelector(".row.keypad div:nth-child(2)")
clearWholeElement.addEventListener("click", clearWhole);

clearOperandElement = document.querySelector(".row.keypad div:nth-child(3)");
clearOperandElement.addEventListener("click", clearOperand);

function unaryOperatorButtonHandler(element) {
  operatorJsEquivalent[element.innerText].jsForm();
  operatorJsEquivalent[element.innerText].userFriendlyForm();
  current_operand.operand = unaryOperatorsFunctions[element.innerText]();
  enteringNewOperand = false;
  shouldLoadOperandIntoExpression = false;
}

unaryOperatorsElements = document.querySelectorAll(".unary-operator");
for(let element of unaryOperatorsElements) {
  element.addEventListener("click", (ev) => unaryOperatorButtonHandler(element));
}