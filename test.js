// Show login section and hide registration
function showLogin() {
    document.getElementById("loginSection").style.display = "block";
    document.getElementById("registrationSection").style.display = "none";
}

// Show registration section and hide login
function showRegister() {
    document.getElementById("loginSection").style.display = "none";
    document.getElementById("registrationSection").style.display = "block";
}

// Handle login submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    if (email && password) {
        document.getElementById("loginMessage").innerText = "Login successful!";
        document.getElementById("loginMessage").style.color = "green";
    } else {
        document.getElementById("loginMessage").innerText = "Please enter valid credentials.";
        document.getElementById("loginMessage").style.color = "red";
    }
});

// Handle registration submission
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("registerMessage").innerText = "Registration successful! Your hall ticket will be sent to your email.";
});
