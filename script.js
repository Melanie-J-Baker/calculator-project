let operator = '';
let num1 = '';
let num2 = '';

function operate() {
    num1 = Number(num1);
    num2 = Number(num2);

    switch (operator) {
        case '+':
            num1 += num2;
            //convertNumber();
            break;
        case '-':
            num1 -= num2;
            //convertNumber();
            break; 
        case 'x':
            num1 *= num2;
            //convertNumber();
            break;
        case '/':
            if(num1 <= 0) {
                num1 = "Error!!!";
                //renderDisplay();
                break;
            }
            num1 /= num2;
            //convertNumber();
            break;
    }
}

// convertNumber() {};
// renderDisplay() {};