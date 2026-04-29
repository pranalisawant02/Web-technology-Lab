/* Question 1

Get user to input a number using prompt("Enter a number:").
Check if the number is a multiple of 5 or not. */

let num = prompt("Enter a number:");

// Convert input to number
num = Number(num);

if (num % 5 === 0) {
  console.log("The number is a multiple of 5");
} else {
  console.log("The number is NOT a multiple of 5");
}

/* Question 2

Write a program to give grades to students based on their scores:

80–100 → A

70–89 → B

60–69 → C

50–59 → D

0–49 → F */

// Take score from user
let score = prompt("Enter your score:");
score = Number(score);

// Check grade using if-else
if (score >= 80 && score <= 100) {
  console.log("Grade: A");
} else if (score >= 70 && score <= 89) {
  console.log("Grade: B");
} else if (score >= 60 && score <= 69) {
  console.log("Grade: C");
} else if (score >= 50 && score <= 59) {
  console.log("Grade: D");
} else if (score >= 0 && score <= 49) {
  console.log("Grade: F");
} else {
  console.log("Invalid score");
}
