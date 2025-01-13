let screen = document.getElementById('screen');
let currentInput = '';

function input(value) {
  if (screen.innerText === '0' && value !== '.') {
    screen.innerText = '';
  }
  currentInput += value;
  screen.innerText = currentInput;
}

function calculate() {
  try {
    screen.innerText = eval(currentInput);
    currentInput = screen.innerText;
  } catch {
    screen.innerText = 'Error';
    currentInput = '';
  }
}

function clearScreen() {
    currentInput = '';
    document.getElementById('screen').innerText = '0';
  }
  
  function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    document.getElementById('screen').innerText = currentInput || '0';
}  

function advancedOp(operation) {
  try {
    let result;
    if (operation === 'sqrt') {
      result = Math.sqrt(eval(currentInput));
    } else if (operation === 'exp') {
      const [base, exponent] = currentInput.split('^');
      result = Math.pow(eval(base), eval(exponent));
    } else if (operation === 'factorial') {
      result = factorial(eval(currentInput));
    }
    screen.innerText = result;
    currentInput = result.toString();
  } catch {
    screen.innerText = 'Error';
    currentInput = '';
  }
}

function factorial(num) {
  if (num === 0 || num === 1) return 1;
  return num * factorial(num - 1);
}
