// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

// Close menu after clicking a link
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });
});


// ===============================
// TYPING EFFECT
// ===============================

const text = [
    "Front-End Developer",
    "Web Developer",
    "Software Engineer",
    "Open to Opportunities"
];

let textIndex = 0;
let charIndex = 0;
let typing = true;

const typingElement = document.getElementById("typing");

function typeEffect() {

    if (typing) {

        typingElement.textContent =
            text[textIndex].substring(0, charIndex++);

        if (charIndex > text[textIndex].length) {
            typing = false;
            setTimeout(typeEffect, 1200);
            return;
        }

    } else {

        typingElement.textContent =
            text[textIndex].substring(0, charIndex--);

        if (charIndex < 0) {
            typing = true;
            textIndex = (textIndex + 1) % text.length;
        }

    }

    setTimeout(typeEffect, typing ? 100 : 50);

}

typeEffect();


// ===============================
// ACTIVE NAVIGATION
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// ===============================
// HEADER SHADOW
// ===============================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.3)";
    } else {
        header.style.boxShadow = "none";
    }

});
