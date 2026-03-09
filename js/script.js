
// Legacy terminal typing animation

document.addEventListener("DOMContentLoaded", function(){
    const lines = document.querySelectorAll(".legacy-terminal span");
    let lineIndex = 0;
    function typeLine(){
        if(lineIndex >= lines.length) return;
        const line = lines[lineIndex];
        const text = line.textContent;
        line.textContent = "";
        let charIndex = 0;
        const cursor = document.createElement("span");
        cursor.classList.add("cursor");
        line.appendChild(cursor);
        function typeChar(){
            if(charIndex < text.length){
                line.insertBefore(
                    document.createTextNode(text.charAt(charIndex)),
                    cursor
                );
                charIndex++;
                setTimeout(typeChar, 600);
            }else{
                cursor.remove();
                lineIndex++;
                setTimeout(typeLine, 600);
            }
        }
        typeChar();
    }
    typeLine();
});


/* ========================================
   PARTICLES BACKGROUND SYSTEM
======================================== */

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];
const numberOfParticles = 80;

/* ========================================
   PARTICLE CLASS
======================================== */
class Particle {

    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;

        this.size = Math.random() * 2 + 1;

        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
    }

    update() {

        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) {
            this.speedX *= -1;
        }

        if (this.y < 0 || this.y > canvas.height) {
            this.speedY *= -1;
        }

    }

    draw() {

        ctx.fillStyle = "#38bdf8";

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

    }

}

/* ========================================
   PARTICLES INITIALIZATION
======================================== */

function initParticles() {

    particlesArray = [];

    for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
    }

}

/* ========================================
   PARTICLE CONNECTION LINES
======================================== */

function connectParticles() {

    for (let a = 0; a < particlesArray.length; a++) {

        for (let b = a; b < particlesArray.length; b++) {

            const dx = particlesArray[a].x - particlesArray[b].x;
            const dy = particlesArray[a].y - particlesArray[b].y;

            const distance = dx * dx + dy * dy;

            if (distance < 12000) {

                ctx.strokeStyle = "rgba(56,189,248,0.1)";
                ctx.lineWidth = 1;

                ctx.beginPath();

                ctx.moveTo(
                    particlesArray[a].x,
                    particlesArray[a].y
                );

                ctx.lineTo(
                    particlesArray[b].x,
                    particlesArray[b].y
                );

                ctx.stroke();

            }

        }

    }

}

/* ========================================
   PARTICLE ANIMATION LOOP
======================================== */

function animateParticles() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    particlesArray.forEach(particle => {

        particle.update();
        particle.draw();

    });

    connectParticles();

    requestAnimationFrame(animateParticles);

}

/* ========================================
   INITIAL EXECUTION
======================================== */

initParticles();
animateParticles();

/* ========================================
   WINDOW RESIZE HANDLING
======================================== */

window.addEventListener("resize", () => {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    initParticles();

});


/* ========================================
   SCROLL REVEAL ANIMATION
======================================== */

const elementosReveal = document.querySelectorAll(".reveal");

const opciones = {
    threshold: 0.2
};

const mostrarElemento = (entries, observer) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

        }

    });

};

const observer = new IntersectionObserver(
    mostrarElemento,
    opciones
);

elementosReveal.forEach(elemento => {
    observer.observe(elemento);
});

/* ========================================
   SCROLL PROGRESS INDICATOR
======================================== */

const progressBar = document.getElementById("scroll-progress");

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const scrollPercent = (scrollTop / docHeight) * 100;

    progressBar.style.width = scrollPercent + "%";

});

/* ========================================
   NAVBAR ACTIVE LINK (SCROLL SPY)
======================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});

const timelineItems = document.querySelectorAll(".timeline-item");

const timelineObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("visible");

        }

    });

}, {
    threshold: 0.2
});

timelineItems.forEach(item => {

    timelineObserver.observe(item);

});

const timeline = document.querySelector(".timeline");

const timelineLineObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            timeline.classList.add("animate");

        }

    });

},{
    threshold:0.2
});

timelineLineObserver.observe(timeline);

const counter = document.getElementById("exp-years");

let started = false;

function animateCounter(){

    if(started) return;

    started = true;

    let value = 0;
    const target = 3; // años aproximados

    const interval = setInterval(()=>{

        value++;

        counter.textContent = value;

        if(value >= target){

            clearInterval(interval);

        }

    },300);
}

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            animateCounter();

        }

    });

},{threshold:0.6});

counterObserver.observe(counter);

// cOBOL ANIMADO proyectos

const cobolBackground = document.querySelector(".cobol-background");

const cobolLines = [
"PERFORM PROCESS-ACCOUNT",
"MOVE ACCOUNT-ID TO WS-ID",
"IF BALANCE > ZERO",
"READ CUSTOMER-FILE",
"WRITE CLEAN-RECORD",
"PERFORM VALIDATE-DATA",
"IF ACCOUNT-ACTIVE",
"DISPLAY PROCESSING",
"MOVE WS-TOTAL TO RESULT",
"END-IF"
];

function generateCobolBackground(){

    for(let i = 0; i < 120; i++){

        const span = document.createElement("span");

        span.textContent =
            cobolLines[Math.floor(Math.random() * cobolLines.length)];

        span.style.marginRight = "40px";

        cobolBackground.appendChild(span);

    }

}

generateCobolBackground();

// AMNIMACCION TECNOLOGIAS
const techCards = document.querySelectorAll(".tech-card");

techCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 60}ms`;
});

// Indicador level en tecnologias

document.addEventListener("DOMContentLoaded", () => {

    const techSection = document.querySelector("#tecnologias");
    const skillBars = document.querySelectorAll(".skill-level");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                skillBars.forEach(bar => {

                    const level = parseInt(bar.dataset.level);
                    const percentText = bar.closest(".tech-card").querySelector(".skill-percent");

                    bar.style.width = level + "%";

                    let count = 0;

                    const counter = setInterval(() => {

                        if(count >= level){
                            clearInterval(counter);
                        } else {
                            count++;
                            percentText.textContent = count + "%";
                        }

                    }, 15);

                });

                observer.disconnect();

            }

        });

    }, { threshold: 0.3 });

    observer.observe(techSection);

});

const terminalLines = [
"> loading legacy systems knowledge...",
"> bridging COBOL with modern engineering and AI"
];

const terminalElements = document.querySelectorAll(".terminal-line");

function typeLine(text, element, speed = 40){

    let i = 0;

    function typing(){

        if(i < text.length){

            element.textContent += text.charAt(i);
            i++;

            setTimeout(typing, speed);

        }

    }

    typing();

}

const terminalObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            typeLine(terminalLines[0], terminalElements[0]);

            setTimeout(()=>{
                typeLine(terminalLines[1], terminalElements[1]);
            },1200);

            terminalObserver.disconnect();

        }

    });

},{threshold:0.4});

terminalObserver.observe(document.querySelector(".future-terminal"));

// ========================================
// Año automático en footer
// ========================================

document.getElementById("year").textContent = new Date().getFullYear();

// ========================================
// Animación descarga CV (segura)
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    const cvButton = document.getElementById("download-cv");
    const progressBar = document.querySelector(".cv-progress");
    const cvText = document.querySelector(".cv-text");

    // Si el botón no existe, no hacer nada
    if (!cvButton || !progressBar || !cvText) return;

    cvButton.addEventListener("click", function () {

        progressBar.classList.add("active");

        cvText.textContent = "Downloading...";

        setTimeout(function () {

            cvText.textContent = "Descargar CV";
            progressBar.classList.remove("active");
            progressBar.style.width = "0%";

        }, 2000);

    });

});


const hamburger = document.getElementById("hamburger");
const navLinksH = document.getElementById("nav-links");
const links = document.querySelectorAll(".nav-links a");

hamburger.addEventListener("click", () => {

    hamburger.classList.toggle("active");
    navLinksH.classList.toggle("active");

});

/* cerrar menú al hacer click */

links.forEach(link => {
    link.addEventListener("click", () => {

        hamburger.classList.remove("active");
        navLinksH.classList.remove("active");

    });
});