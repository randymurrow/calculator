const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operations = {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide
};

function operate(operation, a, b) {
    return operation(a, b);
}

// Create the functions that populate the display when you click the digit buttons
document.addEventListener("DOMContentLoaded", () => {
    let display = [];
    let displayDigits = document.querySelector("#displayDigits");
    let digits = document.querySelectorAll(".digit");

    digits.forEach(button => {
        button.addEventListener("click", () => {
            display.push(button.textContent);
            displayDigits.textContent = display.join("");
        });
    });
    
// Store the content of the display in a variable for use in the next step
    let operands = [];
    let operator = "";
    let operators = document.querySelectorAll(".operator");

    operators.forEach(button => {
        button.addEventListener("click", () => {
            if (operator === "") {
                operands.push(parseInt(displayDigits.textContent));
                operator = button.value;
            } else {
                operands.push(parseInt(displayDigits.textContent));
                result = operate(operations[operator], operands[0], operands[1]);
                displayDigits.textContent = result;
            }
            display = [];
        });
    });
});

// Make the calculator work! Store the first and second numbers input by the user
// Operate() on them when the user presses the = button, according to the operator selected
// once operate has been called, update the display with the result of the operation