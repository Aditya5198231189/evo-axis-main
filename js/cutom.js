/*=====================================
        NAVBAR SHADOW
======================================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
        "0 15px 40px rgba(124,58,237,.10)";

    }

    else{

        navbar.style.boxShadow = "none";

    }

});


/*=====================================
        SMOOTH SCROLL
======================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(

            this.getAttribute("href")

        );

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/*=====================================
        FAQ ACCORDION
======================================*/

const faqItems=document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

    const button=item.querySelector(".faq-question");

    button.addEventListener("click",()=>{

        faqItems.forEach(other=>{

            if(other!==item){

                other.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});


/*=====================================
        SCROLL REVEAL
======================================*/

const reveals=document.querySelectorAll(

".smart,.benefits,.comparison,.features,.process,.faq,.cta"

);

reveals.forEach(section=>{

    section.classList.add("reveal");

});

function revealSections(){

    const trigger=window.innerHeight*.82;

    reveals.forEach(section=>{

        const top=section.getBoundingClientRect().top;

        if(top<trigger){

            section.classList.add("active");

        }

    });

}

window.addEventListener(

"scroll",

revealSections

);

window.addEventListener(

"load",

revealSections

);


/*=====================================
        ACTIVE NAVBAR LINK
======================================*/

const sections=document.querySelectorAll("section[id]");

const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=

        section.offsetTop-120;

        if(window.scrollY>=sectionTop){

            current=

            section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(

            link.getAttribute("href")

            ==="#"+current

        ){

            link.classList.add("active");

        }

    });

});
/*=====================================
        HERO PARALLAX
======================================*/

const heroImage = document.querySelector(".hero-image img");

document.addEventListener("mousemove",(e)=>{

    if(!heroImage) return;

    const x=(e.clientX/window.innerWidth-.5)*20;

    const y=(e.clientY/window.innerHeight-.5)*20;

    heroImage.style.transform=

    `translate(${x}px,${y}px)`;

});


/*=====================================
        3D TILT CARDS
======================================*/

const cards=document.querySelectorAll(

".benefit-card,.feature-card,.step"

);

cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        const rotateY=(x-rect.width/2)/12;

        const rotateX=(rect.height/2-y)/12;

        card.style.transform=

        `perspective(900px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-8px)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform=

        "perspective(900px) rotateX(0) rotateY(0)";

    });

});


/*=====================================
        MAGNETIC BUTTONS
======================================*/

const buttons=document.querySelectorAll(

".btn-primary,.btn-secondary"

);

buttons.forEach(button=>{

    button.addEventListener("mousemove",(e)=>{

        const rect=button.getBoundingClientRect();

        const x=e.clientX-rect.left-rect.width/2;

        const y=e.clientY-rect.top-rect.height/2;

        button.style.transform=

        `translate(${x*.18}px,${y*.18}px)`;

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform="translate(0,0)";

    });

});


/*=====================================
        HERO FADE-IN
======================================*/

window.addEventListener("load",()=>{

    const hero=document.querySelector(".hero");

    if(hero){

        hero.animate([

            {

                opacity:0,

                transform:"translateY(40px)"

            },

            {

                opacity:1,

                transform:"translateY(0)"

            }

        ],{

            duration:900,

            easing:"ease-out",

            fill:"forwards"

        });

    }

});


/*=====================================
        STAGGER CARD ANIMATION
======================================*/

const observer=new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const children=

            entry.target.querySelectorAll(

            ".benefit-card,.feature-card,.step"

            );

            children.forEach((card,index)=>{

                setTimeout(()=>{

                    card.style.opacity="1";

                    card.style.transform=

                    "translateY(0)";

                },index*120);

            });

        }

    });

},

{

    threshold:.2

}

);

document.querySelectorAll(

".benefits,.features,.process"

).forEach(section=>{

    const cards=

    section.querySelectorAll(

    ".benefit-card,.feature-card,.step"

    );

    cards.forEach(card=>{

        card.style.opacity="0";

        card.style.transform=

        "translateY(50px)";

        card.style.transition=

        ".6s ease";

    });

    observer.observe(section);

});


/*=====================================
        TIMELINE HOVER GLOW
======================================*/

document.querySelectorAll(".step").forEach(step=>{

    step.addEventListener("mouseenter",()=>{

        step.style.boxShadow=

        "0 25px 55px rgba(124,58,237,.18)";

    });

    step.addEventListener("mouseleave",()=>{

        step.style.boxShadow="";

    });

});
/*=====================================
        MOUSE GLOW EFFECT
======================================*/

const glow=document.createElement("div");

glow.style.position="fixed";
glow.style.width="280px";
glow.style.height="280px";
glow.style.borderRadius="50%";
glow.style.pointerEvents="none";
glow.style.background=
"radial-gradient(circle, rgba(124,58,237,.12), rgba(236,72,153,.08), transparent 70%)";
glow.style.filter="blur(35px)";
glow.style.zIndex="-1";

document.body.appendChild(glow);

let mouseX=0;
let mouseY=0;

document.addEventListener("mousemove",(e)=>{

    mouseX=e.clientX-140;
    mouseY=e.clientY-140;

});

function animateGlow(){

    glow.style.left=mouseX+"px";
    glow.style.top=mouseY+"px";

    requestAnimationFrame(animateGlow);

}

animateGlow();


/*=====================================
        RIPPLE BUTTON EFFECT
======================================*/

document.querySelectorAll(

".btn-primary,.btn-secondary"

).forEach(button=>{

    button.addEventListener("click",(e)=>{

        const ripple=document.createElement("span");

        const rect=button.getBoundingClientRect();

        const size=Math.max(rect.width,rect.height);

        ripple.style.position="absolute";
        ripple.style.width=size+"px";
        ripple.style.height=size+"px";
        ripple.style.left=(e.clientX-rect.left-size/2)+"px";
        ripple.style.top=(e.clientY-rect.top-size/2)+"px";
        ripple.style.borderRadius="50%";
        ripple.style.background=
        "rgba(255,255,255,.35)";
        ripple.style.transform="scale(0)";
        ripple.style.transition=".6s ease";
        ripple.style.pointerEvents="none";

        button.style.position="relative";
        button.style.overflow="hidden";

        button.appendChild(ripple);

        requestAnimationFrame(()=>{

            ripple.style.transform="scale(3)";
            ripple.style.opacity="0";

        });

        setTimeout(()=>{

            ripple.remove();

        },600);

    });

});


/*=====================================
        FLOATING BADGE
======================================*/

const badge=document.querySelector(".badge");

if(badge){

    let angle=0;

    function floatBadge(){

        angle+=0.02;

        badge.style.transform=

        `translateY(${Math.sin(angle)*6}px)`;

        requestAnimationFrame(floatBadge);

    }

    floatBadge();

}


/*=====================================
        IMAGE SCALE ON SCROLL
======================================*/

window.addEventListener("scroll",()=>{

    if(!heroImage) return;

    const scale=

    1+(window.scrollY*0.00015);

    heroImage.style.scale=

    Math.min(scale,1.08);

});


/*=====================================
        RANDOM FLOATING CARDS
======================================*/

cards.forEach((card,index)=>{

    let t=index*40;

    function animate(){

        t+=0.015;

        card.style.translate=

        `0 ${Math.sin(t)*3}px`;

        requestAnimationFrame(animate);

    }

    animate();

});


/*=====================================
        PAGE LOADED
======================================*/

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});


/*=====================================
        PREVENT IMAGE DRAG
======================================*/

document.querySelectorAll("img").forEach(img=>{

    img.setAttribute("draggable","false");

});


/*=====================================
        PERFORMANCE
======================================*/

window.addEventListener("blur",()=>{

    document.body.style.pointerEvents="none";

});

window.addEventListener("focus",()=>{

    document.body.style.pointerEvents="auto";

});


/*=====================================
            THE END
======================================*/

console.log(

"%cEvoAxis Custom Software Loaded 🚀",

"color:#7C3AED;font-size:18px;font-weight:bold;"

);