let currentInput = '';
let previousInput = '';
let operator = null;

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operator = null;
  updateDisplay();
}

function setOperator(op) {
  if (currentInput === '') return;
  if (previousInput !== '') {
    calculateResult();
  }
  operator = op;
  previousInput = currentInput;
  currentInput = '';
}

function calculateResult() {
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);
  if (isNaN(prev) || isNaN(current)) return;

  let result;
  switch (operator) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      result = current !== 0 ? prev / current : 'Error';
      break;
    default:
      return;
  }

  currentInput = result.toString();
  operator = null;
  previousInput = '';
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').value = currentInput;
}
