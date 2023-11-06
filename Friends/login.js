document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = loginForm.querySelector('input[type="email"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;
        const age = loginForm.querySelector('input[type="number"]').value;

        // Here you would typically send the login data to your server for processing
        // After a successful login, you can redirect the user to the main page
        // For now, we will just show an alert for demonstration purposes.
        alert(`Login Successful!\nEmail: ${email}, Password: ${password}, Age: ${age}`);
    });
});

