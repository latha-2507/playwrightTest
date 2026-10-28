
// Closure in JavaScript returns a function that has access to its outer function's scope even after the outer function has finished executing.

function outerFunction() {
    let outerVariable = 'I am from the outer function';
    
    function innerFunction() {
        console.log(outerVariable); // Accessing the outer variable
    }   
    return innerFunction;
}

const myClosure = outerFunction();
myClosure(); // Logs: 'I am from the outer function'

// Another example of closure with parameters
function createCounter() {
    let count = 0; // This variable is enclosed in the closure
    
    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // Logs: 1
console.log(counter()); // Logs: 2
console.log(counter()); // Logs: 3

// Closure can also be used to create private variables

function secretHolder(secret) {
    return {
        getSecret: function() {
            return secret;
        },
        setSecret: function(newSecret) {
            secret = newSecret;
        }
    };
}

const mySecret = secretHolder('mySecretValue');
console.log(mySecret.getSecret()); // Logs: 'mySecretValue'
mySecret.setSecret('newSecretValue');
console.log(mySecret.getSecret()); // Logs: 'newSecretValue'


s
