/*==========================================
            SMOOTH SCROLL
==========================================*/

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function (e) {

        const href = this.getAttribute('href');

        // Only smooth scroll for page sections
        if (href && href.startsWith('#')) {

            e.preventDefault();

            const target = document.querySelector(href);

            if (target) {

                target.scrollIntoView({
                    behavior: 'smooth'
                });

            }

        }

        // Normal links (partner.html, form.html, etc.)
        // are handled by the browser automatically.

    });

});


/*==========================================
            SCROLL REVEAL
==========================================*/

const revealElements = document.querySelectorAll(
    '.section, .hero-content, .hero-image'
);

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add('active');

        }

    });

}, {
    threshold: 0.15
});

revealElements.forEach(element => {

    element.classList.add('reveal');

    revealObserver.observe(element);

});


/*==========================================
        ACTIVE NAVIGATION LINK
==========================================*/

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a[href^="#"]');

window.addEventListener('scroll', () => {

    let current = '';

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 180;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute('id');

        }

    });

    navLinks.forEach(link => {

        link.classList.remove('active');

        if (link.getAttribute('href') === '#' + current) {

            link.classList.add('active');

        }

    });

});


/*==========================================
        NAVBAR SHADOW ON SCROLL
==========================================*/

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {

    if (!navbar) return;

    if (window.scrollY > 40) {

        navbar.style.transform = "translateX(-50%) scale(.98)";
        navbar.style.transition = ".3s";

    } else {

        navbar.style.transform = "translateX(-50%) scale(1)";

    }

});


/*==========================================
        FLOATING PARTICLES
==========================================*/

const particleContainer = document.getElementById('particles');

if (particleContainer) {

    for (let i = 0; i < 30; i++) {

        const particle = document.createElement('span');

        const size = Math.random() * 5 + 2;

        particle.style.position = "absolute";
        particle.style.width = size + "px";
        particle.style.height = size + "px";
        particle.style.borderRadius = "50%";
        particle.style.background = "rgba(255,255,255,.45)";

        particle.style.left = Math.random() * 100 + "%";
        particle.style.top = Math.random() * 100 + "%";

        particle.style.animation =
            `float ${6 + Math.random() * 8}s linear infinite`;

        particle.style.animationDelay =
            `${Math.random() * 6}s`;

        particleContainer.appendChild(particle);

    }

}


/*==========================================
        PARTICLE ANIMATION
==========================================*/

const particleStyle = document.createElement('style');

particleStyle.textContent = `

#particles{

position:absolute;

inset:0;

overflow:hidden;

pointer-events:none;

}

@keyframes float{

0%{

transform:translateY(100vh);

opacity:0;

}

20%{

opacity:1;

}

100%{

transform:translateY(-120vh);

opacity:0;

}

}

nav a.active{

color:#7C5CFF;

font-weight:700;

}

`;

document.head.appendChild(particleStyle);


/*==========================================
        HERO CARD PARALLAX
==========================================*/

const heroCard = document.querySelector('.glass-card');

document.addEventListener('mousemove', (e) => {

    if (!heroCard) return;

    const x = (window.innerWidth / 2 - e.clientX) / 40;
    const y = (window.innerHeight / 2 - e.clientY) / 40;

    heroCard.style.transform =
        `rotateY(${x}deg) rotateX(${-y}deg)`;

});

document.addEventListener('mouseleave', () => {

    if (!heroCard) return;

    heroCard.style.transform =
        "rotateX(0deg) rotateY(0deg)";

});


/*==========================================
        PAGE LOADED
==========================================*/

window.addEventListener('load', () => {

    document.body.style.opacity = "1";

    console.log("🚀 EvoAxis Website Loaded Successfully");

});