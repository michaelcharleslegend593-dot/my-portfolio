// ======================
// Mobile Menu
// ======================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const menuIcon = document.querySelector(".menu-btn i");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-times");
    } else {
        menuIcon.classList.remove("fa-times");
        menuIcon.classList.add("fa-bars");
    }
});

// ======================
// Typing Effect
// ======================

const text = "Frontend Web Developer";
const typing = document.getElementById("typing");

if (typing) {
    let index = 0;

    function typeText() {
        if (index < text.length) {
            typing.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeText, 100);
        } else {
            setTimeout(() => {
                typing.innerHTML = "";
                index = 0;
                typeText();
            }, 2000);
        }
    }

    typeText();
}

// ======================
// Back To Top Button
// ======================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    if (topBtn) {
        if (window.scrollY > 300) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    }
});

if (topBtn) {
    topBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// ======================
// Scroll Reveal Animation
// ======================

if (typeof ScrollReveal !== "undefined") {

    ScrollReveal({
        distance: "60px",
        duration: 1500,
        delay: 200,
        reset: false
    });

    ScrollReveal().reveal(".hero-text", {
        origin: "left"
    });

    ScrollReveal().reveal(".hero-image", {
        origin: "right"
    });

    ScrollReveal().reveal(".about", {
        origin: "bottom"
    });

    ScrollReveal().reveal(".skills", {
        origin: "bottom"
    });

    ScrollReveal().reveal(".projects", {
        origin: "bottom"
    });

    ScrollReveal().reveal(".contact", {
        origin: "bottom"
    });
}

// ======================
// Animate Skill Bars
// ======================

const skillSection = document.querySelector(".skills");
const bars = document.querySelectorAll(".progress-bar");

let skillsAnimated = false;

function animateSkills() {

    if (!skillSection || skillsAnimated) return;

    const sectionTop = skillSection.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight - 100) {

        bars.forEach((bar) => {

            const width = bar.getAttribute("data-width");

            if (width) {
                bar.style.width = width;
            }

        });

        skillsAnimated = true;
    }
}

window.addEventListener("scroll", animateSkills);
window.addEventListener("load", animateSkills);
