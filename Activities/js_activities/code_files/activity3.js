// Activity 3: Array Methods
// Methods: split(), splice(), slice(), toSpliced()

// 1. split()
// split() converts a string into an array
let sentence = "I am learning JavaScript";
let words = sentence.split(" ");
console.log("Using split():", words);


// 2. splice()
// splice() changes the original array by adding/removing elements
let fruits = ["Apple", "Banana", "Mango", "Orange"];
fruits.splice(1, 1, "Grapes"); 
// Starts at index 1, removes 1 item, adds Grapes
console.log("Using splice():", fruits);


// 3. slice()
// slice() returns selected elements without changing original array
let numbers = [10, 20, 30, 40, 50];
let slicedNumbers = numbers.slice(1, 4);
console.log("Original Array:", numbers);
console.log("Using slice():", slicedNumbers);


// 4. toSpliced()
// toSpliced() creates a new array after changes
// It does not modify the original array
let colors = ["Red", "Blue", "Green", "Yellow"];
let newColors = colors.toSpliced(1, 1, "Black");

console.log("Original Colors:", colors);
console.log("Using toSpliced():", newColors);