

let num1 = "";
let num2 = "";
let operator = "";
// let togglenum = 1;

const displayValue = document.querySelector(".display-value");
displayValue.textContent = 0

const keypads = document.querySelectorAll(".keypad");
const clearElement = document.querySelector(".clear");
const divideElement = document.querySelector(".divide");
const multiplyElement = document.querySelector(".multiply");
const subtractElement = document.querySelector(".subtract");
const sumElement = document.querySelector(".sum");
const equalElement = document.querySelector(".equal")


keypads.forEach((button) => {
    button.addEventListener("click", () => {
        // alert("coucou");
        // console.log(button.textContent);
        if (operator == "") {
            num1 += button.textContent;
            displayValue.textContent = num1;
        } else {
            num2 += button.textContent;
            displayValue.textContent = num2;
        }
                
    })
})

sumElement.addEventListener("click", () => {
    computeResult();
    operator = add;
})

subtractElement.addEventListener("click", () => {
    computeResult();
    operator = subtract;
})

multiplyElement.addEventListener("click", () => {
    computeResult();
    operator = multiply;
})

divideElement.addEventListener("click", () => {
    computeResult();
    operator = divide;
})

equalElement.addEventListener("click", () => {
    // operator = add;
    computeResult();
})


clearElement.addEventListener("click", () => {
    // alert("coucou");
    displayValue.textContent = 0
    num1 = "";
    num2 = "";
    operator = "";
})


const computeResult = function() {
    if (num2.length > 0 && num2 == 0) {
        alert("Cannot divide by 0. Please enter a valid number.");
        num2 = "";
        operator = "";
        displayValue.textContent = num1;
    } else {
        if (!num2 == "" && !num1 == "") {
            let result = operate(Number(num1), Number(num2), operator);
            // console.log(result);
        
            // togglenum = (togglenum +1) % 2;
        
            num1 = result;
            num2 = "";
            displayValue.textContent = Math.round(result*100)/100;
        }
        // togglenum = (togglenum +1) % 2;
    console.log(num1);
    console.log(num2);
    }
}

const operate = function(num1, num2, operator) {
    return operator(num1, num2);
}

const add = function(num1, num2) {
    return num1 + num2;
}

const subtract = function(num1, num2) {
    return num1 - num2;
}

const multiply = function(num1, num2) {
    return num1 * num2;
}

const divide = function(num1, num2) {
    return num1 / num2;
}

// console.log(operate(1, 2, multiply));