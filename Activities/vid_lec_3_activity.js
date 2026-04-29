//Que 1 
//Create a game where you start with any random game number. ask the user to keep guessing the game number untill the user enters correct values.

let gameNum = 25;

let userNum = prompt ("Guess the game number:");
console.log(userNum);

while(gameNum !=userNum)
{
    //game
    prompt ("You entered wrong number ,Guess agains:");
}
console.log("Congratulations! you entered right number.");