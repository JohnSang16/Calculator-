










//functions
function add(a, b){
    return a + b;
};

function subtract(a, b){
    return a - b;
};

function multiply(a, b){
    return a*b;
};

function divide(a, b){
    return a/b;
};


function operate(a, b, operator){
    switch(operator){
        case '+':
        return add(a, b);
        case '-':
        return subtract(a, b);
        case '*':
        return multiply(a, b);
        case '/':
        return divide(a, b);
        default:
            return "invalid operator";
    }

}

let num1 = 5;
let num2 = 10;
let op = '*';

