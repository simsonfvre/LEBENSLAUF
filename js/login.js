// Login site
// hm17
document.getElementById("login-btn").addEventListener("click", function(event) {
    event.preventDefault();

    const password = document.getElementById("pwd").value;
    const resultLogin = document.getElementById("login-result")

    if (password === "pwd") {
        window.location.href = "simu.html";
    } else {
        resultLogin.innerText = "Falsches Passwort!";
    }
});