/*=====================================
        NAVBAR SHADOW
=====================================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

    } else {

        navbar.style.boxShadow = "none";

    }

});


/*=====================================
        SMOOTH SCROLL
=====================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/*=====================================
        FAQ ACCORDION
=====================================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const button = item.querySelector(".faq-question");

    button.addEventListener("click", () => {

        faqItems.forEach(other => {

            if (other !== item) {

                other.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});


/*=====================================
        SCROLL REVEAL
=====================================*/

const reveals = document.querySelectorAll(

    ".smart, .benefits, .comparison, .features, .businesses, .process, .faq, .cta"

);

reveals.forEach(section => {

    section.classList.add("reveal");

});

function revealSections() {

    const trigger = window.innerHeight * 0.85;

    reveals.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if (top < trigger) {

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);

window.addEventListener("load", revealSections);


/*=====================================
        ACTIVE NAV LINK
=====================================*/

const sections = document.querySelectorAll("section[id]");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

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


/*=====================================
        HERO PARALLAX
=====================================*/

const heroImage = document.querySelector(".hero-image img");

window.addEventListener("mousemove", (e) => {

    if (!heroImage) return;

    const x = (window.innerWidth / 2 - e.clientX) / 40;

    const y = (window.innerHeight / 2 - e.clientY) / 40;

    heroImage.style.transform = `translate(${x}px, ${y}px)`;

});


/*=====================================
        BUTTON RIPPLE EFFECT
=====================================*/

document.querySelectorAll(".btn-primary, .btn-secondary").forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-4px) scale(1.02)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0) scale(1)";

    });

});


/*=====================================
        HERO FADE-IN
=====================================*/

window.addEventListener("load", () => {

    const hero = document.querySelector(".hero");

    hero.style.opacity = "0";
    hero.style.transform = "translateY(30px)";
    hero.style.transition = "all .9s ease";

    setTimeout(() => {

        hero.style.opacity = "1";
        hero.style.transform = "translateY(0)";

    }, 150);

});


/*=====================================
        FLOATING BADGE
=====================================*/

const badge = document.querySelector(".badge");

if (badge) {

    let direction = 1;

    setInterval(() => {

        badge.style.transform = `translateY(${direction * 4}px)`;

        direction *= -1;

    }, 900);

}