//Conditions in javascript
//if else
var a = 10;
var b = 20;

if(a > b){
    console.log("A is greater than B");
}
else{
    console.log("B is greater than A");
}
//if else if else
var a = 10;
var b = 20;
var c = 30;

if(a > b && a > c){
    console.log("A is greater than B and C");
}
else if(b > a && b > c){
    console.log("B is greater than A and C");
}
else{
    console.log("C is greater than A and B");
}

//read file synchronously
const fs = require('fs');
const data = fs.readFileSync('test.txt', 'utf8');
console.log(data);

//read file asynchronously
const fs = require('fs');
fs.readFile('test.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});


