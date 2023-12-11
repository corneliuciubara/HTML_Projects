document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = loginForm.querySelector('input[type="email"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;
        const age = loginForm.querySelector('input[type="number"]').value;
        alert(`Login Successful!\nEmail: ${email}, Password: ${password}, Age: ${age}`);
    });
});