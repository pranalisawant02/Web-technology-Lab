// Activity 7: Promises Examples

// -----------------------------
// Example 1: Simple Promise
// -----------------------------
let promise1 = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Example 1: Success");
    } else {
        reject("Example 1: Failed");
    }
});

promise1
    .then(result => console.log(result))
    .catch(error => console.log(error));


// -----------------------------
// Example 2: Promise with setTimeout
// -----------------------------
let promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Example 2: Completed after 2 seconds");
    }, 2000);
});

promise2.then(result => console.log(result));


// -----------------------------
// Example 3: Chaining Promises
// -----------------------------
let promise3 = new Promise((resolve) => {
    resolve(10);
});

promise3
    .then(num => {
        console.log("Initial:", num);
        return num * 2;
    })
    .then(result => {
        console.log("After Multiply:", result);
        return result + 5;
    })
    .then(final => console.log("Final Value:", final));


// -----------------------------
// Example 4: Using async/await
// -----------------------------
function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Example 4: Data fetched using async/await");
        }, 2000);
    });
}

async function displayData() {
    let data = await getData();
    console.log(data);
}

displayData();