const display = document.getElementById('display');
const buttons = Array.from(document.querySelectorAll('.btn'));


// I initilize these variables to store numbers and operators
let firstNumber = null;
let operator = null;
let secondNumber = null;
let result = null;

// This add event listeners to all my buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('clear')) {
            clear();
        } else if (button.classList.contains('equals')) {
            calculate();
        } else if (button.classList.contains('operator')) {
            handleOperator(button.innerText);
        } else {
            handleNumber(button.innerText);
        }
    });
});



// These four functions perform the basic math operations
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero"
    }
    return a / b;
}


// A function that performs the math based on operator typed by the user
function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return "The operator you entered is invalid!";
    }
}



// Function to clear the display of my calculator
function clear() {
    display.innerText = '0';
    firstNumber = null;
    operator = null;
    secondNumber = null;
}



// This function handles any number clicked by user
function handleNumber(number) {
    if (display.innerText == result) {
        display.innerText = number;
        result = null;
    } else if (display.innerText === '0') {
        display.innerText = number;
    } else {
      display.innerText += number;
    }
}

// This handles any operator clicked by the user
function handleOperator(op) {
    if (result !== null) {
        firstNumber = result;
        result = null;
    } else {
        firstNumber = parseFloat(display.innerText);
    }
    display.innerText += ` ${op} `;
    operator = op;    
}


//This function performs the actual calculation
function calculate() {
    secondNumber = parseFloat(display.innerText.split(operator)[1].trim());
    result = operate(operator, firstNumber, secondNumber);
    display.innerText = result;
  }

