const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operations = {
    "+": add,
    "-": subtract,
    "x": multiply,
    "*": multiply,
    "÷": divide,
    "/": divide
};

// set a switch to disallow behavior like 2 ++ to output as 4
let toggleOperation;

function operate(operation, a, b) {
    return operation(a, b);    
}

document.addEventListener("DOMContentLoaded", () => {
    let display = [];
    let operands = [];
    let operation = "";
    let displayDigits = document.querySelector("#displayDigits");
    let digits = document.querySelectorAll(".digit");
    let operators = document.querySelectorAll(".operator");
    const clear = document.querySelector("#clear");

    digits.forEach(button => {
        button.addEventListener("click", () => {
            // switch AC button to backspace
            clear.textContent = "⌫";

            // prevent leading zeros while allowing 0 as operand
            if (button.textContent === "0" && display.length === 0) {
                displayDigits.textContent = 0;
            } else {
                // prepend 0 in front of leading decimal
                if (button.textContent === "." && display.length === 0) {
                    display = ["0"];
                // allow one instance of decimal
                } else if (button.textContent === "." && display.includes(".")) {
                    return;
                } 
                display.push(button.textContent);
                displayDigits.textContent = display.join("");
            };
        toggleOperation = true;
        });
    });
    
    operators.forEach(button => {
        button.addEventListener("click", () => {
            display = [];

            if (toggleOperation) {
                operands.push(parseFloat(displayDigits.textContent));
            };

            toggleOperation = false;

            let operator = button.textContent;

            if (operands.length === 2) {
                if (operands[1] === 0 && operation === "÷") {
                    displayDigits.textContent = "Nope, nice try"
                } else {
                    result = operate(operations[operation], operands[0], operands[1]);
                    displayDigits.textContent = result;
                    operands = [result];
                };
                clear.textContent = "AC";
            };

            if (operator != "=") {
                operation = operator;
            } else {
                operation = "";
            };
        });
    });

    function allClear() {
        displayDigits.textContent = "0";
        display = [];
        operands = [];
        clear.textContent = "AC";
    }

    function back() {
        display.pop();
            displayDigits.textContent = display.join("");
            // Return display to 0 and prevent squashing when string empty
            if (display.length === 0) {
                displayDigits.textContent = "0";
                clear.textContent = "AC";
            };
    }

    // AC button switches to backspace during calculations
    clear.addEventListener("click", () => {
        if (clear.textContent === "AC") {
            allClear();
        } else {
            back();
        };
    });

    // keyboard event handler
    document.addEventListener("keydown", (e) => {
        const key = e.key;

        if (/[0-9]/.test(key) || key === ".") {
            // Handle number or decimal input
            // e.g., append 'key' to the calculator display
            // switch AC button to backspace
            clear.textContent = "⌫";
            if (key === "0" && display.length === 0) {
                displayDigits.textContent = 0;
            } else {
                // prepend 0 in front of leading decimal
                if (key === "." && display.length === 0) {
                    display = ["0"];
                // allow one instance of decimal
                } else if (key === "." && display.includes(".")) {
                    return;
                } 
                display.push(key);
                displayDigits.textContent = display.join("");
            };
        toggleOperation = true;

        } else if (
            key === "+" ||
            key === "-" ||
            key === "*" ||
            key === "x" ||
            key === "/" || 
            key === "=" ||
            key === "Enter"
            ) {
            // Handle operator input
            // e.g., store the operator and update the display
            display = [];

            if (toggleOperation) {
                operands.push(parseFloat(displayDigits.textContent));
            };

            toggleOperation = false;

            let operator = key;

            if (operands.length === 2) {
                if (operands[1] === 0 && operation === "÷") {
                    displayDigits.textContent = "Nope, nice try"
                } else {
                    result = operate(operations[operation], operands[0], operands[1]);
                    displayDigits.textContent = result;
                    operands = [result];
                };
                clear.textContent = "AC";
            };

            if (operator != "Enter") {
                operation = operator;
            } else {
                operation = "";
            };
        } else if (key === "Backspace") {
            back();
        } else if (key === " ") {
            allClear();
        };
    });
});