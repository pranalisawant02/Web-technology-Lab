// Activity 01 declare array, object, function
console.log("Activity  01 : declare array, object, function");
let marks = [20,30,40,50]; // array declararation

const product = { // obj declaration
    title : "Pen",
    rating : 4.5,
    price : 20
}

function greeting() // fun def
{
    console.log("Hello!!!!");
}

greeting(); // fun call

//Activity 02 reverse a number
//Method 01
console.log("Activity 02: Reverse a number: ")
let num = 1234;
let rev_num = 0;

while (num > 0)
{
    let digit = num % 10;
    rev_num = rev_num*10 + digit;
    num = Math.floor(num / 10);

}
console.log(rev_num);

// Method 02
let num1 = 2341;
let reversed = Number(num1.toString().split('').reverse().join(''));
console.log(reversed);

//Activity 03 chk palindrome number
console.log("Activity 03: Check palindrome number");
//Method 01
console.log("======Method 01======");
let num3 = 121;
let temp = num3;
let rev = 0;

while(temp>0)
{
    let digit = num % 10;
    rev = rev*10 +digit;
    temp = Math.floor(temp/10);
}

if(temp==num){
    console.log("Palindrome Number");
}
else{
    console.log("Not a Palindrome");
}

//Method 02
console.log("======Method 02======");
let num4 =133;
let rev1 = Number(num4.toString().split('').reverse().join(''));

if(num4 == rev1){
     console.log("Palindrome Number");
}
else{
    console.log("Not a Palindrome");
}

//Actvity 04 Fibbonacci series
console.log("Actvity 04 :Fibbonacci series")
console.log("======Method 01======");
let n =10; //no of terms
let a = 0, b = 1;

console.log(a);
console.log(b);

for (let i=1;i<n;i++)
{
    let c = a+b;
    console.log(c);
    a = b;
    b = c;
}

console.log("======Method 02======");
//recursion
function fib(n){
    if(n<=1) return n;
    return fib(n-1) + fib(n-2);
}
console.log(fib(10));

/* Array
 Find largest num in array
remove duplicate num in array
find missing num in array */

console.log("Activity 05 :Find largest num in array /remove duplicate num in array /find missing num in array ");
let arr1 = [3,4,1,7,8];
let max = arr1[0];
console.log("Array: ",arr1);

for(let i=0;i<arr1.length;i++)
{
    if(arr1[i]>max);
    max = arr1[i];
}
console.log("Largest number in arr : ",max);

//remove duplicates
let arr2 = [2,2,3,4,55,67,66];
console.log("Original array : ",arr2);
let unique = [];
for (let i=0;i<arr2.length;i++)
{
    if(!unique.includes(arr2[i]))
    {
        unique.push(arr2[i]);
    }
}
console.log("Array after removing duplicates: ",unique);

// String - Count vowels
//chk palindrome in String
console.log("Activity 06 : String - Count vowels , chk palindrome in string")
// vowel count
let str1 = "JavaScript";
let count = 0;
console.log(str1);

str1 =str1.toLowerCase();
for(let i = 0;i<str1.length;i++)
{
    if(str1[i]==='a' ||
       str1[i]==='e' ||
       str1[i]==='i' ||
       str1[i]==='o' ||
       str1[i]==='u' 
    ){
        count++;
    }
}
console.log("Vowel count in the givwn string :",count);

//chk palindrome
let str2 = "madam";
console.log("String :",str2);
let rev3 = str2.split('').reverse().join('');

if(str2 == rev3){
    console.log("Is Palindrome");
}

else{
    console.log("Not a Palindrome");
}


//Number
// chk Prime num , factoriial
console.log("Activity 07 : Number - chk Prime num , factorial");

let num2 = 7;
let isPrime = true;
console.log("Number:",num2);
if(num2 <=1){
    isPrime = false;
}
else{
    for(let i=2;i<=Math.sqrt(num2);i++)
    {
        if(num % i ===0){
            isPrime =  false;
            break;
        }
    }
}

if(isPrime){
    console.log("Prime number");
}
else{
    console.log("Not a prime number");
}
//factorial
let num5= 5;
let fact =1;

for(let i =1;i<=num5;i++)
{
    fact*=i;
}
console.log("Factorial of 5 numbers: ",fact);
//using recursion
console.log("====== Method 2 : using recursion ======")
function factorial(n){
    if(n===0 || n===1) return 1;
    return n*factorial(n-1);
}
console.log(factorial(5));

//function 
// even odd fun
// sum of array fun
console.log("Activity 08 : Function -even odd fun ,sum of array fun ");

//Even -odd
function EvenOddChecker(num6){
    if(num6%2 === 0){
        console.log(num6,"Number is Even.");
    }
    else{
        console.log(num6,"Number is Odd.");

    }
}
EvenOddChecker(10);
EvenOddChecker(3);

//sum of array
function SumOfArr(arr3){
    let sum =0
    for(let i =0;i<arr3.length;i++){
        sum +=arr3[i];
    }
    return sum;
}
console.log("Sum of arr :",SumOfArr([2,3,4,5,6,]));