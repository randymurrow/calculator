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
            // prevent leading zeros
            if (button.textContent === "0" && display.length === 0) {
                return;
            } else {
                display.push(button.textContent);
                displayDigits.textContent = display.join("");
            };
        });
    });
    
    let operands = [];
    let operation = "";
    let operators = document.querySelectorAll(".operator");

    operators.forEach(button => {
        button.addEventListener("click", () => {
            // empty the display array for subsequent entries
            display = [];

            // push current display number(s) into operands array
            // add condition to prevent ++ etc
            operands.push(parseInt(displayDigits.textContent));
            console.log(`pushed ${displayDigits.textContent} into ${operands}`);

            // register the button pressed
            let operator = button.textContent;
            console.log(`button pressed: ${operator}`);

            // if there are two operands when a button is pushed, run the saved operation
            if (operands.length === 2) {
                result = operate(operations[operation], operands[0], operands[1]);
                displayDigits.textContent = result;
                console.log(`${operands[0]} ${operation} ${operands[1]} = ${result}`);

                // add result to operands array for next operation
                operands = [result];
            };

            // if button is a math operator, save it to operation var declared above
            // otherwise clear if Equal
            if (operator != "=") {
                operation = operator;
                console.log(`next operation will be: ${operation}`);
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
        // operator = "";
    });
});