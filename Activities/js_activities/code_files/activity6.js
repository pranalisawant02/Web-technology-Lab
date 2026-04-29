// Activity 6: Fetch API

// -----------------------------
// 1. Fetch Users and Display Names
// -----------------------------

async function fetchUsers() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();

    let list = document.getElementById("userList");

    data.forEach(user => {
        let li = document.createElement("li");
        li.textContent = user.name;
        list.appendChild(li);
    });
}


// -----------------------------
// 2. Fetch Posts (First 5)
// -----------------------------

async function fetchPosts() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();

    let list = document.getElementById("postList");

    data.slice(0, 5).forEach(post => {
        let li = document.createElement("li");
        li.textContent = post.title;
        list.appendChild(li);
    });
}


// -----------------------------
// 3. Fake Promise (Resolve/Reject)
// -----------------------------

function fakePromise() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            let success = true; // change to false to test reject

            if (success) {
                resolve("Promise Resolved after 3 seconds");
            } else {
                reject("Promise Rejected after 3 seconds");
            }

        }, 3000);

    });
}


// -----------------------------
// 4. Load All Data
// -----------------------------

async function loadData() {
    fetchUsers();
    fetchPosts();

    try {
        let result = await fakePromise();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}