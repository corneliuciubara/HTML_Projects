document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.querySelector(".login-btn");

    loginButton.addEventListener("click", function (event) {
        event.preventDefault();
        const newAccountWindow = window.open("login.html", "Login", "width=800,height=600");
    });
});

const callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
};

const options = {
    root: null,
    threshold: 0.5
};

const observer = new IntersectionObserver(callback, options);

const targets = document.querySelectorAll('#about h2, #about p, #benefits h2, #benefits p');
targets.forEach(target => {
    observer.observe(target);
});

window.addEventListener('scroll', function () {
    var listItems = document.querySelectorAll('.listofbenefits li');
    listItems.forEach(function (item) {
        if (item.getBoundingClientRect().top < window.innerHeight) {
            item.classList.add('visible');
        }
    });
});


