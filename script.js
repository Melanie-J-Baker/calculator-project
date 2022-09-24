const prevDisplay = document.querySelector(".prevDisplay");
const currentDisplay = document.querySelector(".currentDisplay");
const numbers = document.querySelectorAll(".numButton");
const operators = document.querySelectorAll(".opButton");
const equals = document.querySelector(".equalsButton");
const clear = document.querySelector(".clearButton");
const deleteLast = document.querySelector(".deleteButton");
const decimal = document.querySelector(".decimalButton");

let operator = '';
let num1 = '';
let num2 = '';


function operate() {
    num1 = Number(num1);
    num2 = Number(num2);

    switch (operator) {
        case '+':
            num1 += num2;
            convertNumber();
            break;
        case '-':
            num1 -= num2;
            convertNumber();
            break; 
        case 'x':
            num1 *= num2;
            convertNumber();
            break;
        case '/':
            if(num1 <= 0) {
                num1 = "Error!!!";
                renderDisplay();
                break;
            }
            num1 /= num2;
            convertNumber();
            break;
    }
}

function convertNumber() {
    num1 = roundNumber(num1);
    num1 = num1.toString();
    renderDisplay();
};

function numHandler(num) {
    if (num1 !== "" && num2 !== "" && operator === "") {
        num1 = "";
        currentDisplay.textContent = num2;
   }
    if (num2.length <= 9) {
        num2 += num;
        currentDisplay.textContent = num2;
    }
};

function opHandler(op) {
    if (num1 === "") {
        num1 = num2;
        checkOperator(op);
    } else if (num2 === "") {
        checkOperator(op);
    } else {
        operate();
        operator = op;
        currentDisplay.textContent = "";
        prevDisplay.textContent = num1 + " " + operator;
    }
};

function checkOperator(op) {
    operator = op;
    prevDisplay.textContent = num1 + " " + operator;
    currentDisplay.textContent = "";
    num2 = "";
};

function roundNumber(num) {
    return Math.round(num * 100000) / 100000;
};

function renderDisplay() {
    if (num1.length <= 9) {
        currentDisplay.textContent = num1;
    } else {
        currentDisplay.textContent = num1.slice(0, 9) + "...";
    }
    prevDisplay.textContent = "";
    operator = "";
    num2 = "";
};

function clearDisplay() {
    num2 = "";
    num1 = "";
    operator = "";
    currentDisplay.textContent = "0";
    prevDisplay.textContent = "";
}

function deletePrev() {
    currentDisplay.textContent = "0";
    num2 = "";
};

function handleDelete() {
    if (num2 !== "") {
        num2 = num2.slice(0, -1);
        currentDisplay.textContent = num2;
        if (num2 === "") {
            currentDisplay.textContent = "0";
        }
    }
    if (num2 === "" && num1 !== "" && operator === "") {
        num1 = num1.slice(0, -1);
        currentDisplay.textContent = num1;
    }
}

numbers.forEach(btn => {
    btn.addEventListener("click", e => {
        numHandler(e.target.textContent);
    });
});

operators.forEach(btn => {
    btn.addEventListener("click", e => {
        opHandler(e.target.textContent);
    });
});

equals.addEventListener("click", () => {
    if (num2 != "" && num1 != "") {
        operate();
    }
});

clear.addEventListener("click", clearDisplay)

function handleDecimal() {
    if (!num2.includes(".")) {
        num2 += ".";
        currentDisplay.textContent = num2;
    }
}

decimal.addEventListener("click", () => {
    handleDecimal();
})

deleteLast.addEventListener("click", e => {
    deletePrev();
})