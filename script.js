const display = document.getElementById('display');
const buttons = Array.from(document.querySelectorAll('.btn'));


// I initilize these variables to store numbers and operators
let firstNumber = null;
let operator = null;
let secondNumber = null;
let shouldResetDisplay = false;


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
        return "Error: Divition by zero"
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
            return "The eperator you entered is invalid!";
    }
}



// Function to clear the display of my calculator
function clear() {
    display.innerText = '0';
    firstNumber = null;
    operator = null;
    secondNumber = null;
    shouldResetDisplay = false;
}



// This function handles any number clicked by user
function handleNumber(number) {
    if (display.innerText === '0' || shouldResetDisplay) {
        display.innerText = number;
        shouldResetDisplay = false;
    } else {
        display.innerText += number;
    }
}


// This handles any opertoe clicked by the user
function handleOperator(op) {
    if (firstNumber === null) {
        firstNumber = parseFloat(display.innerText);
        operator = op;
        shouldResetDisplay = true;
    } else if (operator) {
        calculate();
        operator = op;
        firstNumber = parseFloat(display.innerText);
        shouldResetDisplay = true;
    }
}



//This function performs the actual calculation
function calculate() {
    if (operator && firstNumber !== null) {
        secondNumber = parseFloat(display.innerText);
        const result = operate(operator, firstNumber, secondNumber);
        display.innerText = result;
        firstNumber = result;
        operator = null;
        secondNumber = null;
        shouldResetDisplay = true;
    }
}