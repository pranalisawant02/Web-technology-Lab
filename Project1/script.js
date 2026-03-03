// Simple Countdown
var eventDate = new Date("March 30, 2026 09:00:00");

setInterval(function () {

    var now = new Date();
    var diff = eventDate - now;

    var seconds = Math.floor(diff / 1000);

    if (seconds <= 0) {
        timer.innerHTML = "Event Started! 🎉";
    } else {
        timer.innerHTML = seconds + " seconds left";
    }

}, 1000);


// Simple Theme Change
function changeTheme() {
    document.body.classList.toggle("dark");
}


// Simple Registration Message
function showMessage() {
    msg.innerHTML = "Registration Successful 🎉";
    return false;
}