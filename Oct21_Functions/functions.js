

//map method returns a new array with the results of calling a provided function on every element in the calling array
let mapArray = [1, 2, 3, 4];
let mappedArray = mapArray.map(element => element * 2);
console.log("Mapped array (elements multiplied by 2): " + mappedArray);

//concat method returns a new array that is the combination of two or more arrays
let concatArray1 = ["H", "I", "J"];
let concatArray2 = ["K", "L", "M"];
let concatenatedArray = concatArray1.concat(concatArray2);
console.log("Concatenated array: " + concatenatedArray);

//some method returns true if at least one element in the array satisfies the provided condition, otherwise returns false
let someArray = [10, 20, 30, 40];
let someResult = someArray.some(element => element > 25);
console.log("Is there any element greater than 25? " + someResult);

//every method returns true if all elements in the array satisfy the provided condition, otherwise returns false
let everyArray = [5, 10, 15, 20];
let everyResult = everyArray.every(element => element < 25);
console.log("Are all elements less than 25? " + everyResult);

//filter method returns a new array with all elements that satisfy the provided condition
let filterArray = [1, 2, 3, 4, 5];
let filteredArray = filterArray.filter(element => element % 2 === 0);
console.log("Filtered array (even numbers): " + filteredArray); 


