const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operations = {
    "+": add,
    "-": subtract,
    "x": multiply,
    "÷": divide
};

function operate(operation, a, b) {
    return operation(a, b);
}

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
    
    let operands = [];
    let operator = "";
    let operators = document.querySelectorAll(".operator");

    operators.forEach(button => {
        button.addEventListener("click", () => {
            if (operator === "") {
                operands.push(parseInt(displayDigits.textContent));
                operator = button.textContent;
            } else {
                operands.push(parseInt(displayDigits.textContent));
                result = operate(operations[operator], operands[0], operands[1]);
                displayDigits.textContent = result;
                operands = [result];
                console.log(operands);
            }
            display = [];
        });
    });

    const allClear = document.querySelector("#clear");
    allClear.addEventListener("click", () => {
        displayDigits.textContent = "0";
        display = [];
        operands = [];
        operator = "";
    });
});