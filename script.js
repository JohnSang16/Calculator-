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
        const expression = display.textContent;
        const operatorMatch = expression.match(/[\+\-\*\/]/);
        if (!operatorMatch) return;
        
        const operator = operatorMatch[0];
        const[a, b] = expression.split(operator);

        const result = operate(Number(a), operator, Number(b))
        display.textContent = result;
    }
    else if(value === "."){
         const lastNumber = display.textContent.split(/[\+\-\*\/]/).pop();
        if (lastNumber.includes(".")) return; 
        display.textContent += value;
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



function operate(a, operator, b){
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

