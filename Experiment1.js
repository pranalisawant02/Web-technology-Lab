//Activity 01
//Display Student information

let roll_no = 124;
let st_name = "Pranali";
let email = "pranalisawant1403@gmail.com";
let add;
let result = true;
let hobby = null;

console.table([{"roll no":roll_no,"name":st_name,"email":email,"address":add,"result":result,"hobby":hobby}]);

//Activity 02 
//Odd- Even Checker
//const prompt =("prompt-sync")()

let num = 4;

if(num%2==0)
{
    document.write("Number is Even<br>");

}
else
{
    document.write("Number is odd<br>");
}

//Activity03
// pass or fail
document.write("RESULT:")
let marks =35

if(marks>=35)
{
    document.write("You are PASS!<br>");
}
else
{
    document.write("You are FAIL!<br>");
}

//Activity 4
//Print Numbers 1f=-10
document.write("Numbers from 1 to 10 :<br>")
for(let i=1;i<=10;i++)
{
    document.write(i+"<br>");
}

//Activiity 05

let x=100;
let y=x;

document.write(x,y);
 x = 20;
document.write(x,y);

