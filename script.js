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

// set a switch to disallow behavior like 2 ++ to output as 4
let toggleOperation;

function operate(operation, a, b) {
    return operation(a, b);    
}

document.addEventListener("DOMContentLoaded", () => {
    let display = [];
    let displayDigits = document.querySelector("#displayDigits");
    let digits = document.querySelectorAll(".digit");

    digits.forEach(button => {
        button.addEventListener("click", () => {
            // prevent leading zeros while allowing 0 as operand
            if (button.textContent === "0" && display.length === 0) {
                displayDigits.textContent = 0;
            } else {
                // allow one instance of decimal
                if (button.textContent === "." && display.includes(".")) {
                    return;
                }
                display.push(button.textContent);
                displayDigits.textContent = display.join("");
            };
        toggleOperation = true;
        });
    });
    
    let operands = [];
    let operation = "";
    let operators = document.querySelectorAll(".operator");

    operators.forEach(button => {
        button.addEventListener("click", () => {
            display = [];

            if (toggleOperation) {
                operands.push(parseFloat(displayDigits.textContent));
            }

            toggleOperation = false;

            let operator = button.textContent;

            if (operands.length === 2) {
                if (operands[1] === 0 && operation === "÷") {
                    displayDigits.textContent = "Nope, nice try"
                } else {
                    result = operate(operations[operation], operands[0], operands[1]);
                    displayDigits.textContent = result;
                    operands = [result];
                }
            };

            if (operator != "=") {
                operation = operator;
            } else {
                operation = "";
                operands = [];
            }
        });
    });

    const allClear = document.querySelector("#clear");
    allClear.addEventListener("click", () => {
        displayDigits.textContent = "0";
        display = [];
        operands = [];
    });
});