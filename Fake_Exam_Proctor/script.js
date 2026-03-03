let warningCounter = 0;

let warningMessage = document.getElementById("warningMessage");
let warningCountText = document.getElementById("warningCount");
let submitBtn = document.getElementById("submitBtn");

function showWarning(message) {
    warningCounter++;
    warningMessage.textContent = message;
    warningCountText.textContent = "Warnings: " + warningCounter;

    if (warningCounter >= 3) {
        alert("You have been disqualified! Exam Auto Submitted.");
        disableExam();
    }
}

function disableExam() {
    let inputs = document.querySelectorAll("input");
    inputs.forEach(input => input.disabled = true);
    submitBtn.disabled = true;
}

/* 1 Detect Tab Switching */
document.addEventListener("visibilitychange", function() {
    if (document.hidden) {
        showWarning("Tab switching is not allowed!");
    }
});

/* 2 Disable Right Click */
document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
    showWarning("Right click is disabled during exam!");
});

/* 3 Detect Copy */
document.addEventListener("copy", function() {
    showWarning("Copying is not allowed!");
});

/* 4 Detect Suspicious Keys */
document.addEventListener("keydown", function(e) {
    if (e.ctrlKey || e.altKey) {
        showWarning("Suspicious key combination detected!");
    }
});

/* 5 Submit Button */
submitBtn.addEventListener("click", function() {
    alert("Exam Submitted Successfully!");
});