// is a symbol that performs an operation on values and returns a result. In JavaScript, operators are used to perform operations on variables and values. There are different types of operators in JavaScript like arithmetic operators, comparison operators, logical operators, assignment operators, etc. Each operator has its own functionality and is used for specific purposes. For example, the + operator is used for addition, the - operator is used for subtraction, the * operator is used for multiplication, and so on. Similarly, the == operator is used for loose equality comparison, the === operator is used for strict equality comparison, the != operator is used for loose inequality comparison, and the !== operator is used for strict inequality comparison.
// Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them. Template literals are enclosed by the back-tick (` `) (grave accent) character instead of double or single quotes. Template literals can contain placeholders. These are indicated by the dollar sign and curly braces (${expression}). The expressions in the placeholders and the text between the back-ticks (` `) get passed to a function.
//Nested template literals are template literals that are used inside another template literal. They allow you to create complex strings by embedding one template literal inside another. This can be useful for creating dynamic strings that include variables or expressions. For example, you can use nested template literals to create a string that includes the result of a function call or the value of a variable. Nested template literals can also be used to create multi-line strings that include variables or expressions.
const age = 26;
const userName = "Bob";
const status = (age > 18) ? (age > 25 ? "can go Goa & Drink" : "No Drink") : "No Goa";
console.log(userName, status);


//Increment and decrement operators are used to increase or decrease the value of a variable by 1. The increment operator (++) increases the value of a variable by 1, while the decrement operator (--) decreases the value of a variable by 1. These operators can be used in both prefix and postfix forms. In the prefix form, the operator is placed before the variable (e.g., ++x), and in the postfix form, the operator is placed after the variable (e.g., x++). The difference between the two forms is that in the prefix form, the value is incremented or decremented before it is used in an expression, while in the postfix form, the value is used in an expression before it is incremented or decremented.
let x = 5;
console.log(++x); //6
console.log(x++); //6
console.log(x); //7

let y = 5;
console.log(--y); //4
console.log(y--); //4
console.log(y); //3 

//nullish coalescing operator (??) is a logical operator that returns the right-hand operand when the left-hand operand is null or undefined, and otherwise returns the left-hand operand. It is used to provide a default value for a variable that may be null or undefined. The nullish coalescing operator is useful for handling cases where a variable may not have a value, and you want to provide a fallback value instead of getting an error or unexpected behavior. For example, you can use the nullish coalescing operator to provide a default value for a variable that may be null or undefined, like this:
let name = null;
let defaultName = "Guest";
let finalName = name ?? defaultName;
console.log(finalName); // Output: Guest

let ageValue = undefined;
let defaultAge = 18;
let finalAge = ageValue ?? defaultAge;
console.log(finalAge); // Output: 18
