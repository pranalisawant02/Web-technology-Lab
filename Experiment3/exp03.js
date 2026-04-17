// function :- A block of code used to perform specific task
//fun 01
 function sum(num1, num2) { 
    console.log(num1 + num2); 
}
sum(5, 10); // Outputs: 15
console.log(sum);

//fun02
function sum2(n1,n2){
    let res = n1 +n2;
    return res;
    console.log(res) // code after return is never executed
}
console.log(sum2(3,4));

//fun 03
function loginUser(userName){
    return `${userName} just LoggedIn!!!`

}
console.log(loginUser('Pranali'));// when string is empty or no value is passed then it gives Undefined

//fun 04
function fun(...m1){ //spread operator : it gives multiple values under one arrr for single var
    return m1;
}
console.log(fun(200,300,400));

//fun 05
let Prod = {
   title : "Pen",
   price : 20
};

function handleObj(obj1){
    console.log(`Product name : ${obj1.title}`);
     console.log(`Product Price : ${obj1.price}`);
}
console.log(handleObj(Prod));

//fun 06
let arr1 = ["abc","xyz"];

function handleArr(obj2){
    console.log(obj2[0]);
}
console.log(handleArr(arr1));

//fun 07 
//arrow function
const sum3 = (n1,n2) => {
    return n1+n2;
}
console.log(sum3(4,5));

function tea(){
 uname = "Pranali";
    console.log(this.uname);
}
tea();

const arrFun = () =>
{
    uname = "Pranali";
    console.log(this.uname);
}
tea();

/* 
activity 01 : why we use this keyword, why we don't use in arrow fun 
activity 02 : what is arrow fun diff between simple & arrow fun
activity 03 : write a code for arrow fun with 2 example
activity 04 : write a code switch case in js
activity 05 : how to use truthy-falsy value in js
activity 06 : how to use ternary operator in js
activity 07 : write a code for how to use loops in array(5 types with example)
activity 08 : diff betwn forin and forof loop in js
activity 09 : how to use map and filter fun in js

*/
// ================== ACTIVITY 01 ==================
console.log("ACTIVITY 01: this keyword");

// 'this' refers to current object in normal function
// Arrow function does NOT have its own 'this'

const user = {
    uname: "Sanika",
    greet: function(){
        console.log("Normal function:", this.uname); // ✔ works
    }
};
user.greet();

const userArrow = {
    uname: "Pranali",
    greet: () => {
        console.log("Arrow function:", this.uname); // ❌ undefined
    }
};
userArrow.greet();


// ================== ACTIVITY 02 ==================
console.log("ACTIVITY 02: Normal vs Arrow Function");

// Normal function → has its own this, can be used as method
// Arrow function → no this, short syntax

function normalFun(a,b){
    return a+b;
}

const arrowFun = (a,b) => a+b;

console.log("Normal:", normalFun(2,3));
console.log("Arrow:", arrowFun(2,3));


// ================== ACTIVITY 03 ==================
console.log("ACTIVITY 03: Arrow Function Examples");

// Arrow functions are short and clean

const add = (a,b) => a+b;
console.log("Addition:", add(10,20));

const square = x => x*x;
console.log("Square:", square(5));


// ================== ACTIVITY 04 ==================
console.log("ACTIVITY 04: Switch Case");

// Switch is used when we have multiple conditions

let day = 3;

switch(day){
    case 1: console.log("Mon"); break;
    case 2: console.log("Tue"); break;
    case 3: console.log("Wed"); break;
    case 4: console.log("Thu"); break;
    default: console.log("Invalid");
}


// ================== ACTIVITY 05 ==================
console.log("ACTIVITY 05: Truthy & Falsy");

// Falsy values: false, 0, "", null, undefined, NaN
// Truthy: all other values

let name = "";
let age = 0;

if(name){
    console.log("Name exists(truthy)");
}else{
    console.log("Name is empty"); // falsy
}

if(!age){
    console.log("Age is zero(falsy)"); // falsy
}


// ================== ACTIVITY 06 ==================
console.log("ACTIVITY 06: Ternary Operator");

// Short form of if-else
// condition ? true : false

let marks = 35;
let result = (marks >= 35) ? "Pass" : "Fail";
console.log(result);


// ================== ACTIVITY 07 ==================
console.log("ACTIVITY 07: Loops in Array");

// Used to iterate array elements

let arr2 = [10,20,30];

// for loop → index based
for(let i=0;i<arr2.length;i++){
    console.log(arr2[i]);
}

// while loop
let i=0;
while(i<arr2.length){
    console.log(arr2[i]);
    i++;
}

// do-while → runs at least once
let j=0;
do{
    console.log(arr2[j]);
    j++;
}while(j<arr2.length);

// ================== ACTIVITY 08 ==================
console.log("ACTIVITY 08: for-in vs for-of");

// for-in → index
// for-of → value

let arr3 = [100,200,300];

for(let i in arr3){
    console.log("for-in index:", i);
}

for(let val of arr3){
    console.log("for-of value:", val);
}


// ================== ACTIVITY 09 ==================
console.log("ACTIVITY 09: map & filter");

// map → transform values (returns new array)
// filter → select values (returns new array)

let nums = [1,2,3,4,5];

// map example
let doubled = nums.map(n => n*2);
console.log("Map:", doubled);

// filter example
let even = nums.filter(n => n%2===0);
console.log("Filter:", even);