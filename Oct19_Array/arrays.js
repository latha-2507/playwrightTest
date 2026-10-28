//Arrays in java script 
//indexed array
let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
console.log("The first fruit is: " + fruits[0]);
console.log("The second fruit is: " + fruits[1]);
console.log("The third fruit is: " + fruits[2]);

//associative array
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    city: "New York"
};
console.log("First Name: " + person.firstName);
console.log("Last Name: " + person.lastName);
console.log("Age: " + person.age);
console.log("City: " + person.city);

//multidimensional array
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log("Element at row 1, column 2 is: " + matrix[0][1]);
console.log("Element at row 2, column 3 is: " + matrix[1][2]);
console.log("Element at row 3, column 1 is: " + matrix[2][0]);

//negative index array
let negativeIndexArray = ["A", "B", "C", "D", "E"];
console.log("The last element is: " + negativeIndexArray[negativeIndexArray.length - 1]);
console.log("The second last element is: " + negativeIndexArray[negativeIndexArray.length - 2]);
console.log("The third last element is: " + negativeIndexArray[negativeIndexArray.length - 3]);

//.at method
let atMethodArray = ["X", "Y", "Z"];
console.log("The first element using .at() is: " + atMethodArray.at(0));
console.log("The last element using .at() is: " + atMethodArray.at(-1));
console.log("The second last element using .at() is: " + atMethodArray.at(-2));

//push method
let pushArray = ["P", "Q", "R"];
pushArray.push("S");
console.log("Array after push: " + pushArray);

//pop method
let popArray = ["L", "M", "N"];
let poppedElement = popArray.pop();
console.log("Popped element: " + poppedElement);
console.log("Array after pop: " + popArray);

//shift method
let shiftArray = ["U", "V", "W"];
let shiftedElement = shiftArray.shift();
console.log("Shifted element: " + shiftedElement);
console.log("Array after shift: " + shiftArray);

//unshift method
let unshiftArray = ["G", "H", "I"];
unshiftArray.unshift("F");
console.log("Array after unshift: " + unshiftArray);

//splice method
let spliceArray = ["1", "2", "3", "4", "5"];
spliceArray.splice(2, 1, "6", "7");
console.log("Array after splice: " + spliceArray);

//slice method
let sliceArray = ["A", "B", "C", "D", "E"];
let slicedArray = sliceArray.slice(1, 4);
console.log("Sliced array: " + slicedArray);

//concat method
let concatArray1 = ["H", "I", "J"];
let concatArray2 = ["K", "L", "M"];
let concatenatedArray = concatArray1.concat(concatArray2);
console.log("Concatenated array: " + concatenatedArray);

//indexOf method
let indexOfArray = ["N", "O", "P", "Q"];
let index = indexOfArray.indexOf("P");
console.log("Index of 'P': " + index);

//lastIndexOf
let lastIndexOfArray = ["R", "S", "T", "S"];
let lastIndex = lastIndexOfArray.lastIndexOf("S");
console.log("Last index of 'S': " + lastIndex);

//includes method
let includesArray = ["U", "V", "W"];
let includesResult = includesArray.includes("V");
console.log("Does the array include 'V'? " + includesResult);

//find method
let findArray = [10, 20, 30, 40, 50];
let foundElement = findArray.find(element => element > 25);
console.log("First element greater than 25: " + foundElement);

//findIndex method
let findIndexArray = [5, 10, 15, 20];
let foundIndex = findIndexArray.findIndex(element => element === 15);
console.log("Index of element '15': " + foundIndex);

//forEach method
let forEachArray = ["A", "B", "C"];
forEachArray.forEach(element => console.log("Element: " + element));

//map method
let mapArray = [1, 2, 3, 4];
let mappedArray = mapArray.map(element => element * 2);
console.log("Mapped array (elements multiplied by 2): " + mappedArray);

//filter method
let filterArray = [10, 15, 20, 25];
let filteredArray = filterArray.filter(element => element > 15);
console.log("Filtered array (elements greater than 15): " + filteredArray);

//reduce method
let reduceArray = [1, 2, 3, 4];
let reducedValue = reduceArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Reduced value (sum of elements): " + reducedValue);    
