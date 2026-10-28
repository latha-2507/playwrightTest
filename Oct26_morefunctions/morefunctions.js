//functions in JS
function greet(name){
    console.log("Hello " + name);
}

function add(a, b){
    return a + b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    if(b === 0){
        console.log("Cannot divide by zero");
        return null;
    }
    return a / b;
}

function subtract(a, b){
    return a - b;
}

greet("John");
console.log("Addition: " + add(5, 3));
console.log("Multiplication: " + multiply(5, 3));
console.log("Division: " + divide(5, 0));
console.log("Subtraction: " + subtract(5, 3));


function sayHello()
{
   return "Hello, World!";
}
let message = sayHello();
console.log(message);

// some example for undefined and null
function checkValue(value) {
    if (value === undefined) {
        console.log("The value is undefined.");
    } else if (value === null) {
        console.log("The value is null.");
    } else {
        console.log("The value is: " + value);
    }
}

checkValue(undefined); // The value is undefined.
checkValue(null);      // The value is null.
checkValue(42);        // The value is: 42

//Anonymous function returns a function that can be assigned to a variable or passed as an argument to another function. It does not have a name and is often used for short-lived operations or callbacks.
let anonymousFunction = function() {
    console.log("This is an anonymous function.");
};
anonymousFunction();

//Arrow function returns a concise syntax for writing functions. It does not have its own 'this' context and is often used for short functions or callbacks.
let arrowFunction = () => {
    console.log("This is an arrow function.");
};
arrowFunction();

//Function with default parameters returns a function that can have default values for its parameters. If no value is provided for a parameter, the default value will be used.
function greetWithDefault(name = "Guest") {
    console.log("Hello, " + name);
}
greetWithDefault(); // Hello, Guest
greetWithDefault("Alice"); // Hello, Alice

//Function with rest parameters returns a function that can accept an indefinite number of arguments as an array.
function sumAll(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log("Sum of all numbers: " + sumAll(1, 2, 3, 4, 5)); // Sum of all numbers: 15

//Function with callback returns a function that can accept another function as an argument and execute it within its body. This is often used for asynchronous operations or event handling.   
function processUserInput(callback) {
    let name = "John Doe";
    callback(name);
}
processUserInput(function(name) {
    console.log("Hello, " + name);
});
