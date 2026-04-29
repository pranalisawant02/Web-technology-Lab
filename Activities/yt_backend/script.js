
// fundamentals of jS
// arrays and objects
// functions return
// async js coding

var arr = [1,2,3,4];

//for each , map, filter , find , indexof
arr.forEach(function(val){
    console.log(val + "hello");
})

//map - returns new array of same size on which it is applied old array
let ans = arr.map(function(val) {
    return 4;
})
console.log(ans); // o/p:  new array with val 4 

//filter - calculates  and returns new array based on true or false
let ans2 = arr.filter (function(val){
    if(val>3) {
        return true;
    }
})
console.log(ans2);

//find 
let res = arr.find(function(val){
    if(val == 2){
        return val;
    }
})
console.log(res); // returns the 1st matched ele

//indexof
let res2 = arr.indexOf(9); // not found returns -1
console.log(res2); 

//objects
let student = {
    name : "Pranali",
    age : 21,
    branch : "AIML"
};
// Object.freeze(student); // freeze obj so that its not changed
student.age = 18;
console.log(student.name);
console.log(student['age']);

// function length - no.of parameters
function abcd(){
    //console.log(abcd.length);
    return "hello";
}
let ans3 =  abcd();
console.log(ans3);

// line by line code runs -> synchronous code
//async - > async code send them to side stack 
// and instead run code with async nature,
//  after sync codes completes -> chk is async completed -> 
// if yes-> bring them in min stack and run
await  fetch

