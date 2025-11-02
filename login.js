// Login check function
function checkLogin() {
    // get the users input
    let username = document.getElementById("username").value; 
    let password = document.getElementById("password").value;

    // validate credentials (simple check)
    if (username === "admin" && password === "password") {
        // if correct, redirect to home.html
        window.location.href = "home.html";
    }
    else {
        // if incorrect, show error message
        const msg = document.getElementById("login-message");
        msg.textContent = "Invalid username or password. Try again.";
        msg.style.color = "red";
    }
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        checkLogin();
    }
});