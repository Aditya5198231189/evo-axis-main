/*==========================================
        EVOAXIS MEET THE FOUNDER
==========================================*/


/*==========================================
        PAGE LOADED
==========================================*/

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

    console.log("🚀 Meet the Founder Loaded");

});


/*==========================================
        SCROLL REVEAL
==========================================*/

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {

    const trigger = window.innerHeight * 0.85;

    revealElements.forEach(element => {

        const top = element.getBoundingClientRect().top;

        if (top < trigger) {

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/*==========================================
        COUNTER ANIMATION
==========================================*/

const counters = document.querySelectorAll(".counter");

let counterStarted = false;

function startCounters() {

    if (counterStarted) return;

    const statsSection = document.querySelector(".stats");

    if (!statsSection) return;

    const top = statsSection.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {

        counterStarted = true;

        counters.forEach(counter => {

            const target = Number(counter.dataset.target);

            let current = 0;

            const increment = Math.ceil(target / 60);

            const updateCounter = () => {

                current += increment;

                if (current >= target) {

                    counter.textContent = target + "+";

                } else {

                    counter.textContent = current;

                    requestAnimationFrame(updateCounter);

                }

            };

            updateCounter();

        });

    }

}

window.addEventListener("scroll", startCounters);

startCounters();


/*==========================================
        FLOATING IMAGE
==========================================*/

const founderImage = document.querySelector(".hero-image img");

window.addEventListener("mousemove", (e) => {

    if (!founderImage) return;

    const x = (e.clientX / window.innerWidth - 0.5) * 12;

    const y = (e.clientY / window.innerHeight - 0.5) * 12;

    founderImage.style.transform =
        `translate(${x}px, ${y}px)`;

});


/*==========================================
        NAVBAR SHADOW
==========================================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.boxShadow = "0 10px 35px rgba(0,0,0,.08)";

    } else {

        navbar.style.boxShadow = "none";

    }

});


/*==========================================
        BUTTON RIPPLE EFFECT
==========================================*/

const buttons = document.querySelectorAll(".btn-primary, .btn-secondary");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-4px) scale(1.02)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0) scale(1)";

    });

});


/*==========================================
        TIMELINE ANIMATION
==========================================*/

const timelineItems = document.querySelectorAll(".timeline-item");

function animateTimeline() {

    const trigger = window.innerHeight * 0.9;

    timelineItems.forEach((item, index) => {

        const top = item.getBoundingClientRect().top;

        if (top < trigger) {

            setTimeout(() => {

                item.style.opacity = "1";

                item.style.transform = "translateX(0)";

            }, index * 200);

        }

    });

}

timelineItems.forEach(item => {

    item.style.opacity = "0";

    item.style.transform = "translateX(40px)";

    item.style.transition = ".6s ease";

});

window.addEventListener("scroll", animateTimeline);

animateTimeline();


/*==========================================
        SMOOTH SCROLL
==========================================*/

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


/*==========================================
        ACTIVE NAV LINK
==========================================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;

        if (window.scrollY >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            current &&
            link.getAttribute("href") &&
            link.getAttribute("href").includes(current)
        ) {

            link.classList.add("active");

        }

    });

});


/*==========================================
        END
==========================================*/

console.log("✨ Meet.js Loaded Successfully");