
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

if (timeline) {
    const timelineLine = timeline;

    function updateTimelineLine() {
        const rect = timelineLine.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // El dibujo comienza cuando la sección entra en pantalla.
        const start = viewportHeight * 0.75;
        const distance = viewportHeight - start;

        const progress = Math.max(
            0,
            Math.min(1, (start - rect.top) / (rect.height + distance))
        );

        timelineLine.style.setProperty(
            "--timeline-progress",
            progress
        );
    }

    window.addEventListener("scroll", updateTimelineLine, {
        passive: true
    });

    window.addEventListener("resize", updateTimelineLine);

    updateTimelineLine();
}



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


// =========================================
// CARRUSEL DE PROYECTOS
// Compatible con tarjetas agregadas desde HTML
// =========================================

document.addEventListener("DOMContentLoaded", () => {
    const track = document.getElementById("projects-track");
    const prevButton = document.getElementById("projects-prev");
    const nextButton = document.getElementById("projects-next");
    const dotsContainer = document.getElementById("projects-dots");

    // Si la sección o sus controles no existen, no hace nada.
    if (!track || !prevButton || !nextButton || !dotsContainer) {
        return;
    }

    const cards = Array.from(track.querySelectorAll(".project-card"));

    // No inicializar el carrusel si no hay tarjetas.
    if (cards.length === 0) {
        return;
    }

    let activeIndex = 0;

    // Crear un indicador por cada tarjeta, automáticamente.
    dotsContainer.replaceChildren();

    const dots = cards.map((card, index) => {
        const dot = document.createElement("button");

        dot.type = "button";
        dot.className = "projects-dot";
        dot.setAttribute("aria-label", `Ver proyecto ${index + 1}`);

        dot.addEventListener("click", () => {
            goToProject(index);
        });

        dotsContainer.appendChild(dot);

        return dot;
    });

    // Desplazarse hasta una tarjeta concreta.
    function goToProject(index) {
        activeIndex = Math.max(0, Math.min(index, cards.length - 1));

        const card = cards[activeIndex];

        const trackRect = track.getBoundingClientRect();
        const cardRect = card.getBoundingClientRect();

        const targetLeft =
            track.scrollLeft + cardRect.left - trackRect.left;

        track.scrollTo({
            left: targetLeft,
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
                ? "auto"
                : "smooth"
        });

        updateControls();
    }

    // Actualizar flechas e indicador seleccionado.
    function updateControls() {
        dots.forEach((dot, index) => {
            const isActive = index === activeIndex;

            dot.classList.toggle("is-active", isActive);
            dot.setAttribute("aria-current", isActive ? "true" : "false");
        });

        prevButton.disabled = activeIndex === 0;
        nextButton.disabled = activeIndex === cards.length - 1;
    }

    // Determinar qué tarjeta está más cerca del inicio visible.
    function updateActiveFromScroll() {
        const trackRect = track.getBoundingClientRect();

        let closestIndex = 0;
        let closestDistance = Infinity;

        cards.forEach((card, index) => {
            const cardRect = card.getBoundingClientRect();
            const distance = Math.abs(cardRect.left - trackRect.left);

            if (distance < closestDistance) {
                closestDistance = distance;
                closestIndex = index;
            }
        });

        activeIndex = closestIndex;
        updateControls();
    }

    prevButton.addEventListener("click", () => {
        goToProject(activeIndex - 1);
    });

    nextButton.addEventListener("click", () => {
        goToProject(activeIndex + 1);
    });

    // Actualizar al deslizar con el dedo o usar la barra de desplazamiento.
    let scrollTimeout;

    track.addEventListener("scroll", () => {
        window.clearTimeout(scrollTimeout);

        scrollTimeout = window.setTimeout(() => {
            updateActiveFromScroll();
        }, 80);
    }, { passive: true });

    // Recalcular al cambiar entre escritorio y móvil.
    window.addEventListener("resize", () => {
        goToProject(activeIndex);
    });

    updateControls();
});


// =====================================================
// PROJECT CARDS — FLIP 3D
// Construye la cara trasera sin reemplazar el contenido
// frontal ni modificar la lógica del carrusel.
// =====================================================

(() => {
    const projectCards = document.querySelectorAll(
        '#proyectos .projects-container > .project-card'
    );

    // Actividades basadas en la descripción actual de cada proyecto.
    // No se atribuyen tecnologías ni responsabilidades adicionales.
    const projectDetails = {
        'project-cobol': {
            title: 'Actividades realizadas',
            items: [
                'Desarrollo de programas COBOL74 para procesos de depuración de datos.',
                'Aplicación de reglas de negocio a los registros procesados.',
                'Operaciones sobre la base de datos DMSII.',
                'Compilación, ejecución de procesos batch y pruebas unitarias.',
                'Generación de logs, listados y documentación técnica.',
                'Seguimiento de ejecuciones en UAT y monitoreo nocturno de producción.'
            ]
        },

        'project-contracts': {
            title: 'Actividades realizadas',
            items: [
                'Lectura y procesamiento de 10 archivos de entrada.',
                'Aplicación de reglas de negocio a la información de los contratos.',
                'Integración de la información correspondiente en la base de datos.'
            ]
        },

        'project-analysis': {
            title: 'Actividades realizadas',
            items: [
                'Análisis del flujo de movimientos de crédito y débito.',
                'Revisión de la lógica existente y de las reglas de negocio.',
                'Análisis de los cambios necesarios para separar el procesamiento.',
                'Validación de los cambios mediante pruebas.',
                'Comunicación de hallazgos y resultados al cliente.'
            ]
        },

        'project-portfolio': {
            title: 'Actividades realizadas',
            items: [
                'Estructuración del sitio mediante HTML semántico.',
                'Diseño y adaptación visual con CSS.',
                'Implementación de interacciones y animaciones con JavaScript.',
                'Organización del contenido en secciones de perfil, experiencia y proyectos.',
                'Uso de herramientas de IA como apoyo al desarrollo y revisión del código.'
            ]
        },

        'project-ibm': {
            title: 'Objetivos de aprendizaje',
            items: [
                'Ampliar conocimientos sobre el ecosistema IBM Mainframe.',
                'Estudiar los fundamentos de JCL y la ejecución de trabajos batch.',
                'Profundizar en conceptos de DB2.',
                'Conocer los fundamentos de CICS.',
                'Relacionar los conceptos estudiados con la experiencia previa en COBOL y Unisys MCP.',
                'Continuar la preparación antes de abordar tareas prácticas en este entorno.'
            ]
        }
    };

    projectCards.forEach((card) => {
        // Evita duplicar las caras si el script se inicializa de nuevo.
        if (card.querySelector('.project-card-inner')) {
            return;
        }

        const detailEntry = Object.keys(projectDetails).find(
            (className) => card.classList.contains(className)
        );

        const details = detailEntry
            ? projectDetails[detailEntry]
            : {
                title: 'Detalles del proyecto',
                items: [
                    'Consulta la descripción frontal para conocer el objetivo y las tecnologías del proyecto.'
                ]
            };

        // Crea las caras.
        const inner = document.createElement('div');
        inner.className = 'project-card-inner';

        const front = document.createElement('div');
        front.className = 'project-card-front';
        front.setAttribute('aria-hidden', 'false');

        const back = document.createElement('div');
        back.className = 'project-card-back';
        back.setAttribute('aria-hidden', 'true');
        back.inert = true;

        // Mueve el contenido original a la cara frontal.
        while (card.firstChild) {
            front.appendChild(card.firstChild);
        }

        // Construye la cara posterior.
        const heading = document.createElement('h3');
        heading.textContent = details.title;
        back.appendChild(heading);

        const list = document.createElement('ul');

        details.items.forEach((itemText) => {
            const item = document.createElement('li');
            item.textContent = itemText;
            list.appendChild(item);
        });

        back.appendChild(list);

        // Botón de la cara frontal.
        const flipButton = document.createElement('button');
        flipButton.type = 'button';
        flipButton.className = 'project-flip-button';
        flipButton.textContent = 'Ver detalles';
        flipButton.setAttribute('aria-label', 'Ver detalles del proyecto');

        // Botón de regreso.
        const backButton = document.createElement('button');
        backButton.type = 'button';
        backButton.className = 'project-flip-button';
        backButton.textContent = 'Volver';
        backButton.setAttribute('aria-label', 'Volver al frente del proyecto');

        front.appendChild(flipButton);
        back.appendChild(backButton);

        inner.appendChild(front);
        inner.appendChild(back);
        card.appendChild(inner);

        // Controla el giro y evita el acceso por teclado a la cara oculta.
        function setFlipped(flipped) {
            inner.classList.toggle('is-flipped', flipped);

            front.setAttribute('aria-hidden', String(flipped));
            back.setAttribute('aria-hidden', String(!flipped));

            front.inert = flipped;
            back.inert = !flipped;
        }

        flipButton.addEventListener('click', () => {
            setFlipped(true);
            backButton.focus();
        });

        backButton.addEventListener('click', () => {
            setFlipped(false);
            flipButton.focus();
        });
    });
})();

