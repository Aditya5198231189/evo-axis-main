/*=====================================
        NAVBAR SHADOW
======================================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.style.boxShadow =
        "0 15px 40px rgba(124,58,237,.12)";

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

const revealSections=document.querySelectorAll(

".about,.benefits,.comparison,.framework,.process,.faq,.cta"

);

revealSections.forEach(section=>{

    section.classList.add("reveal");

});

function revealOnScroll(){

    const trigger=window.innerHeight*.82;

    revealSections.forEach(section=>{

        const top=section.getBoundingClientRect().top;

        if(top<trigger){

            section.classList.add("active");

        }

    });

}

window.addEventListener(

"scroll",

revealOnScroll

);

window.addEventListener(

"load",

revealOnScroll

);


/*=====================================
        ACTIVE NAVIGATION
======================================*/

const sections=document.querySelectorAll("section[id]");

const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-140;

        if(window.scrollY>=top){

            current=section.getAttribute("id");

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
        HERO FADE-IN
======================================*/

window.addEventListener("load",()=>{

    const hero=document.querySelector(".hero");

    if(hero){

        hero.animate(

        [

            {

                opacity:0,

                transform:"translateY(40px)"

            },

            {

                opacity:1,

                transform:"translateY(0)"

            }

        ],

        {

            duration:900,

            easing:"ease-out",

            fill:"forwards"

        });

    }

});
/*=====================================
        HERO PARALLAX
======================================*/

const heroImage = document.querySelector(".hero-image img");

document.addEventListener("mousemove",(e)=>{

    if(!heroImage) return;

    const x=(e.clientX/window.innerWidth-.5)*24;

    const y=(e.clientY/window.innerHeight-.5)*24;

    heroImage.style.transform=

    `translate(${x}px,${y}px)`;

});


/*=====================================
        FLOATING CIRCLES
======================================*/

const circle1=document.querySelector(".circle1");
const circle2=document.querySelector(".circle2");

document.addEventListener("mousemove",(e)=>{

    const x=e.clientX/window.innerWidth;
    const y=e.clientY/window.innerHeight;

    if(circle1){

        circle1.style.transform=

        `translate(${x*35}px,${y*20}px)`;

    }

    if(circle2){

        circle2.style.transform=

        `translate(${-x*25}px,${-y*18}px)`;

    }

});


/*=====================================
        3D TILT EFFECT
======================================*/

const cards=document.querySelectorAll(

".benefit-card,.step,.compare-column"

);

cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;
        const y=e.clientY-rect.top;

        const rotateY=(x-rect.width/2)/13;
        const rotateX=(rect.height/2-y)/13;

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
        STAGGER ANIMATION
======================================*/

const observer=new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const items=

            entry.target.querySelectorAll(

            ".benefit-card,.step"

            );

            items.forEach((item,index)=>{

                setTimeout(()=>{

                    item.style.opacity="1";

                    item.style.transform=

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

".benefits,.framework,.process"

).forEach(section=>{

    const items=

    section.querySelectorAll(

    ".benefit-card,.step"

    );

    items.forEach(item=>{

        item.style.opacity="0";

        item.style.transform=

        "translateY(50px)";

        item.style.transition=

        ".6s ease";

    });

    observer.observe(section);

});


/*=====================================
        TIMELINE GLOW
======================================*/

document.querySelectorAll(".step").forEach(step=>{

    step.addEventListener("mouseenter",()=>{

        step.style.boxShadow=

        "0 25px 60px rgba(124,58,237,.18)";

    });

    step.addEventListener("mouseleave",()=>{

        step.style.boxShadow="";

    });

});


/*=====================================
        BENEFIT CARD GLOW
======================================*/

document.querySelectorAll(

".benefit-card"

).forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.borderColor=

        "rgba(124,58,237,.25)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.borderColor=

        "rgba(255,255,255,.5)";

    });

});
/*=====================================
        MOUSE GLOW EFFECT
======================================*/

const glow=document.createElement("div");

glow.style.position="fixed";
glow.style.width="300px";
glow.style.height="300px";
glow.style.borderRadius="50%";
glow.style.pointerEvents="none";
glow.style.background=
"radial-gradient(circle, rgba(124,58,237,.12), rgba(236,72,153,.08), rgba(56,189,248,.06), transparent 70%)";
glow.style.filter="blur(35px)";
glow.style.zIndex="-1";

document.body.appendChild(glow);

let glowX=0;
let glowY=0;

document.addEventListener("mousemove",(e)=>{

    glowX=e.clientX-150;
    glowY=e.clientY-150;

});

function animateGlow(){

    glow.style.left=glowX+"px";
    glow.style.top=glowY+"px";

    requestAnimationFrame(animateGlow);

}

animateGlow();


/*=====================================
        BUTTON RIPPLE EFFECT
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
        ripple.style.background="rgba(255,255,255,.35)";
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

    function animateBadge(){

        angle+=0.02;

        badge.style.transform=

        `translateY(${Math.sin(angle)*6}px)`;

        requestAnimationFrame(animateBadge);

    }

    animateBadge();

}


/*=====================================
        HERO IMAGE SCALE
======================================*/

window.addEventListener("scroll",()=>{

    if(!heroImage) return;

    const scale=1+(window.scrollY*0.00018);

    heroImage.style.scale=

    Math.min(scale,1.08);

});


/*=====================================
        FLOATING CARD EFFECT
======================================*/

cards.forEach((card,index)=>{

    let time=index*35;

    function floatCard(){

        time+=0.015;

        card.style.translate=

        `0 ${Math.sin(time)*3}px`;

        requestAnimationFrame(floatCard);

    }

    floatCard();

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
        PERFORMANCE OPTIMIZATION
======================================*/

document.addEventListener("visibilitychange",()=>{

    if(document.hidden){

        document.body.style.pointerEvents="none";

    }

    else{

        document.body.style.pointerEvents="auto";

    }

});


/*=====================================
        DIGITAL CONSOLE MESSAGE
======================================*/

console.log(

"%c🚀 EvoAxis Digital Transformation Loaded",

"color:#7C3AED;font-size:18px;font-weight:bold;"

);