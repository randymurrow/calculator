function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2) {
    return operator(num1, num2);
}

// Create the functions that populate the display when you click the digit buttons
// Store the content of the display in a variable for use in the next step

// Make the calculator work! Store the first and second numbers input by the user
// Operate() on them when the user presses the = button, according to the operator selected
// once operate has been called, update the display with the result of the operation