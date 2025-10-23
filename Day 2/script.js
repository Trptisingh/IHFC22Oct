var name = "John";
var name= "Doe";
console.log("Hello, " + name + "!");

let city = "New York";
city = "Los Angeles";
console.log("I live in " + city + "."); 

const country = "USA";
console.log("I am from " + country + ".");
// country = "Canada"; // This will cause an error
// console.log("I now live in " + country + ".");

//Arithmetic Operators
let a = 10;
let b = 5;
let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;
console.log("Sum: " + sum);
console.log("Difference: " + difference);
console.log("Product: " + product);
console.log("Quotient: " + quotient);

//Comparison Operators
let x = 15;
let y = 20;
console.log("Is x equal to y? " + (x == y));
console.log("Is x not equal to y? " + (x != y));
console.log("Is x greater than y? " + (x > y));
console.log("Is x less than y? " + (x < y));

//Logical Operators
let isSunny = true;
let isWarm = false;
console.log("Is it sunny and warm? " + (isSunny && isWarm));
console.log("Is it sunny or warm? " + (isSunny || isWarm));
console.log("Is it not sunny? " + (!isSunny));

//Assignment Operators
let num = 10;
num += 5; // num = num + 5
console.log("After += operator, num: " + num);
num -= 3; // num = num - 3
console.log("After -= operator, num: " + num);
num *= 2;               
console.log("After *= operator, num: " + num);
num /= 4;               
console.log("After /= operator, num: " + num);
num %= 3;
console.log("After %= operator, num: " + num);


//Conditional Statements
let age = 18;
if (age < 18) {
    console.log("You are a minor.");
} else {
    console.log("You are an adult.");
}

//For Loops
for (let i = 1; i <= 5; i++) {
    console.log("Iteration: " + i);
}   

//While Loops
let count = 1;
while (count <= 5) {
    console.log("Count: " + count);
    count++;
}   
