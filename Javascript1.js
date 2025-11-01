function checklogin() {
    alert("Checking login...");

    //this would get the users input
    let username = document.getElementById("username").value; 
    let password = document.getElementById("password").value;

    //this checks if the username and password are correct
    if (username === "admin" && password === "password") {
        // if correct, redirect to Home1.html
        window.location.href = "Home1.html";
    }
}