async function checkLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch("https://cyph3rweb-backend.onrender.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    });

    const result = await response.json();

    if (response.ok) {
      window.location.href = "home.html";
    } else {
      document.getElementById("login-message").textContent = result.message;
      document.getElementById("login-message").style.color = "red";
    }
  } catch (error) {
    console.error("Login request failed:", error);
    document.getElementById("login-message").textContent = "Something went wrong. Try again later.";
    document.getElementById("login-message").style.color = "red";
  }
}

