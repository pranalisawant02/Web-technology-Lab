// Activity 5: Async Await, Blocking and Non-blocking

// ------------------------------
// 1. Guess the Number Game
// ------------------------------

let secretNumber = Math.floor(Math.random() * 10) + 1;
let guess = 5;

console.log("Secret Number:", secretNumber);
console.log("Your Guess:", guess);

if (guess === secretNumber) {
    console.log("Correct Guess!");
} else {
    console.log("Wrong Guess! Try Again.");
}


// ------------------------------
// 2. Blocking Example
// ------------------------------
// Blocking means next line waits until current task completes

console.log("Blocking Example Started");

for (let i = 1; i <= 5; i++) {
    console.log("Blocking Count:", i);
}

console.log("Blocking Example Ended");


// ------------------------------
// 3. Non-blocking Example
// ------------------------------
// Non-blocking means program does not wait for slow task

console.log("Non-blocking Example Started");

setTimeout(function () {
    console.log("This message appears after 3 seconds");
}, 3000);

console.log("Non-blocking Example Ended");


// ------------------------------
// 4. Async Await Example
// ------------------------------

function fetchData() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Data fetched successfully");
        }, 2000);
    });
}

async function displayData() {
    console.log("Fetching data...");
    let result = await fetchData();
    console.log(result);
}

displayData();