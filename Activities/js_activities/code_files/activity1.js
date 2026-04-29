// Activity 1: JavaScript Basics

// 1. Conversion Operators
let num = "10";
let convertedNum = Number(num); // string → number
console.log("Converted Number:", convertedNum);

// 2. Arithmetic Operators
let a = 10, b = 5;
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);

// 3. String Addition
let str1 = "Hello";
let str2 = "World";
console.log("String Addition:", str1 + " " + str2);

// 4. Automatic Conversion (Important Note)
console.log("Auto Conversion:", "10" - 2); // Output: 8

// 5. Increment Operator
let x = 5;
x++;
console.log("Incremented Value:", x);

// 6. Comparison Operators
console.log("Equal (==):", 5 == "5");     // true
console.log("Strict Equal (===):", 5 === "5"); // false
console.log("Greater than:", 10 > 5);

// 7. Null vs Undefined Comparison
console.log("null == undefined:", null == undefined);   // true
console.log("null === undefined:", null === undefined); // false

// 8. Math.random()
let randomNumber = Math.random();
console.log("Random Number:", randomNumber);