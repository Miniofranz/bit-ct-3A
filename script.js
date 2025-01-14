document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple username and password validation
    if (username === "admin" && password === "admin123") {
        alert("Welcome, " + username + "!");
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("logoutMessage").style.display = "block";
    } else {
        alert("Invalid credentials. Try again!");
    }
});
