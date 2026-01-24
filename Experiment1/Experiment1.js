//Activity 01
//Display Student information
document.write("=============================== Activity 01: Student Info ========================================<br>");
let roll_no = 124;
let st_name = "Pranali";
let email = "pranalisawant1403@gmail.com";
let add;
let result = true;
let hobby = null;

document.write(`<table border='1'><tr><th>Roll No</th><th>Name</th><th>Email</th><th>Address</th><th>Result</th><th>Hobby</th></tr><tr><td>${roll_no}</td><td>${st_name}</td><td>${email}</td><td>${add}</td><td>${result}</td><td>${hobby}</td></tr></table>`);

//Activity 02 
//Odd- Even Checker
//const prompt =("prompt-sync")()
document.write("\n=============================== Activity 02: Odd - Even ==========================================<br>");
let num = 4;

if(num%2==0)
{
    document.write("Number is Even<br>");

}
else
{
    document.write("Number is odd<br>");
}

document.write("=============================== Activity 03: Pass-Fail ============================================<br>");
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
document.write("=============================== Activity 04: for Loop ============================================<br>");
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

