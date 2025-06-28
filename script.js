const display = document.querySelector(".display");
const boxes = document.querySelectorAll(".box");
boxes.forEach((box)=>{
    const id = box.dataset.id;
    console.log(`Box ${id}: ${box.textContent}`)

    box.addEventListener("click",function(){
    const value = box.textContent;
    
    if(value === "AC"){
        display.textContent = "";
    }
    else if(value=== "DEL"){
        display.textContent = display.textContent.slice(0, -1);
    }
    else if(value === "="){
        operator()
    }
    else{
        display.textContent += value;
    }
});

});











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

