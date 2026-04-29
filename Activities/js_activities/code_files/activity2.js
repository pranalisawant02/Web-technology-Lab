// Activity 2: Function and String Methods

// 1. Function Declaration
function greetStudent(name) {
    return "Hello " + name + ", welcome to JavaScript!";
}

console.log(greetStudent("Pranali"));


// 2. Function with Parameters
function addNumbers(a, b) {
    return a + b;
}

console.log("Addition:", addNumbers(10, 20));


// 3. Function Expression
const multiplyNumbers = function(a, b) {
    return a * b;
};

console.log("Multiplication:", multiplyNumbers(5, 4));


// 4. String Methods
let text = "JavaScript Programming";

console.log("Original String:", text);
console.log("Length:", text.length);
console.log("Uppercase:", text.toUpperCase());
console.log("Lowercase:", text.toLowerCase());
console.log("Character at index 4:", text.charAt(4));
console.log("Slice:", text.slice(0, 10));
console.log("Includes Java:", text.includes("Java"));
console.log("Replace:", text.replace("Programming", "Language"));