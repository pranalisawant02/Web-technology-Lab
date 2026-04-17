//DOM---->HTML CAN create form but cant think....js makes form smart
//used for form validation
//form validation--->checking user input before sending data to server-->name not empty...email contains @

//DOM manipulation-->changing html using js...example-->changing color,display success msg 
function SubmitButton() {

    // 1. Get input values using DOM
    let name = document.getElementById('name').value.trim();    // trim() removes extra spaces 
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();

    // 2. Clear old error messages
    // Otherwise old errors stay even after correction
    document.getElementById('nameError').innerHTML = "";
    document.getElementById('emailError').innerHTML = "";
    document.getElementById('passwordError').innerHTML = "";

    let isValid = true;

    // 4. Name validation
    if (name === "") {
        document.getElementById("nameError").innerHTML = "Name field is required";
        isValid = false;
    }

    // 5. Email validation
    if (email === "") {
        document.getElementById("emailError").innerHTML = "Email field is required";
        isValid = false;
    }

    // 6. Password validation
    if (password === "") {
        document.getElementById("passwordError").innerHTML = "Password field is required";
        isValid = false;
    }
    if(isValid==true){
        document.getElementById("successMsg").innerHTML = "submitted successfully";

    }
    return false;
}