
// Legacy terminal typing animation

document.addEventListener("DOMContentLoaded", function () {
    const lines = document.querySelectorAll(".legacy-terminal span");
    let lineIndex = 0;
    function typeLine() {
        if (lineIndex >= lines.length) return;
        const line = lines[lineIndex];
        const text = line.textContent;
        line.textContent = "";
        let charIndex = 0;
        const cursor = document.createElement("span");
        cursor.classList.add("cursor");
        line.appendChild(cursor);
        function typeChar() {
            if (charIndex < text.length) {
                line.insertBefore(
                    document.createTextNode(text.charAt(charIndex)),
                    cursor
                );
                charIndex++;
                setTimeout(typeChar, 600);
            } else {
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

        if (entry.isIntersecting) {

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

function animateCounter() {

    if (started) return;

    started = true;

    let value = 0;
    const target = 3; // años aproximados

    const interval = setInterval(() => {

        value++;

        counter.textContent = value;

        if (value >= target) {

            clearInterval(interval);

        }

    }, 300);
}

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            animateCounter();

        }

    });

}, { threshold: 0.6 });

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

function generateCobolBackground() {

    for (let i = 0; i < 120; i++) {

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

            if (entry.isIntersecting) {

                skillBars.forEach(bar => {

                    const level = parseInt(bar.dataset.level);
                    const percentText = bar.closest(".tech-card").querySelector(".skill-percent");

                    bar.style.width = level + "%";

                    let count = 0;

                    const counter = setInterval(() => {

                        if (count >= level) {
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

/* ===========================================
   ANIMACIÓN DE ESCRITURA — TERMINAL
=========================================== */

const futureTerminal = document.querySelector(".future-terminal");

if (futureTerminal) {
    const terminalLines = [
        "ANALIZAR REQUERIMIENTOS",
        "DETECTAR CAUSA E IMPACTO",
        "IMPLEMENTAR Y EJECUTAR PRUEBAS",
        "VERIFICAR RESULTADOS Y REGRESIONES"
    ];

    const terminalRows = futureTerminal.querySelectorAll(".terminal-line");
    let terminalAnimationStarted = false;

    function typeTerminalLine(element, text, speed = 35) {
        return new Promise((resolve) => {
            let index = 0;

            element.textContent = "";

            function typeNextCharacter() {
                if (index < text.length) {
                    element.textContent += text.charAt(index);
                    index++;
                    setTimeout(typeNextCharacter, speed);
                } else {
                    resolve();
                }
            }

            typeNextCharacter();
        });
    }

    async function animateTerminal() {
        for (let i = 0; i < terminalLines.length; i++) {
            const row = terminalRows[i];

            if (!row) continue;

            // Anima únicamente el texto, sin borrar el número,
            // el símbolo de consola ni la etiqueta del resultado.
            const textElement = row.querySelector(
                "span:nth-child(3)"
            );

            if (!textElement) continue;

            await typeTerminalLine(textElement, terminalLines[i], 65);
        }
    }

    const terminalObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (
                    entry.isIntersecting &&
                    !terminalAnimationStarted
                ) {
                    terminalAnimationStarted = true;
                    animateTerminal();
                    terminalObserver.disconnect();
                }
            });
        },
        { threshold: 0.3 }
    );

    terminalObserver.observe(futureTerminal);
}

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


/* ===========================================
   RECURSOS — BIBLIOTECA TÉCNICA
   Módulo independiente
=========================================== */

(() => {
    "use strict";

    const section = document.getElementById("recursos");

    // Si la sección no está presente, no inicializar el módulo.
    if (!section) return;

    const technologiesContainer =
        section.querySelector("#recursos-technologies");

    const topicsContainer =
        section.querySelector("#recursos-topics");

    const searchInput =
        section.querySelector("#recursos-search-input");

    const resultsCount =
        section.querySelector("#recursos-results-count");

    const selectedTitle =
        section.querySelector("#recursos-selected-title");

    const topicCount =
        section.querySelector("#recursos-topic-count");

    const modal = section.querySelector("#recursos-modal");
    const modalDialog = modal.querySelector(".recursos-modal-dialog");

    const modalTechnology =
        section.querySelector("#recursos-modal-technology");

    const modalTitle =
        section.querySelector("#recursos-modal-title");

    const modalDescription =
        section.querySelector("#recursos-modal-description");

    const modalNotes =
        section.querySelector("#recursos-modal-notes");

    const modalDialect =
        section.querySelector("#recursos-modal-dialect");

    const modalCode =
        section.querySelector("#recursos-modal-code");

    const copyButton =
        section.querySelector("#recursos-copy-code");

    const copyStatus =
        section.querySelector("#recursos-copy-status");

    const closeButtons =
        section.querySelectorAll("[data-recursos-close]");

    const requiredElements = [
        technologiesContainer,
        topicsContainer,
        searchInput,
        resultsCount,
        selectedTitle,
        topicCount,
        modal,
        modalDialog,
        modalTechnology,
        modalTitle,
        modalDescription,
        modalNotes,
        modalDialect,
        modalCode,
        copyButton,
        copyStatus
    ];

    if (requiredElements.some(element => !element)) {
        console.error(
            "Recursos: faltan elementos HTML requeridos."
        );
        return;
    }

/* ---------------------------------------
   DATOS EXTERNOS
   El catálogo está separado de la lógica.
--------------------------------------- */

// Verificar que el archivo de datos se haya cargado.
const data = window.RECURSOS_DATA;

if (!data) {
    console.error(
        "Recursos: no se encontró js/recursos-data.js."
    );
    return;
}

// Obtener la lista de tecnologías y los grupos de temas.
const { technologies, resources: resourceGroups } = data;

// Convertir los grupos en una lista plana para mantener
// la compatibilidad con las funciones existentes.
const resources = Object.entries(resourceGroups).flatMap(
    ([technology, items]) =>
        items.map(resource => ({
            ...resource,
            technology
        }))
);


    /* ---------------------------------------
       ESTADO
    --------------------------------------- */


    let selectedTechnology = "COBOL";
    let activeResource = null;
    let lastFocusedElement = null;

    /* ---------------------------------------
       CREAR TARJETAS DE TECNOLOGÍA
    --------------------------------------- */

    function renderTechnologies() {
        technologiesContainer.replaceChildren();

        technologies.forEach(technology => {
            const button = document.createElement("button");
            button.type = "button";
            button.className = "recursos-technology-card";
            button.dataset.technology = technology.id;

            const name = document.createElement("span");
            name.className = "recursos-technology-name";
            name.textContent = technology.label;

            const description = document.createElement("span");
            description.className = "recursos-technology-description";
            description.textContent = technology.description;

            const count = document.createElement("span");
            count.className = "recursos-technology-count";

            const resourceCount = resources.filter(
                resource => resource.technology === technology.id
            ).length;

            count.textContent = `${resourceCount} recursos`;

            button.append(name, description, count);

            button.setAttribute(
                "aria-pressed",
                String(technology.id === selectedTechnology)
            );

            button.addEventListener("click", () => {
                selectedTechnology = technology.id;
                searchInput.value = "";

                renderTechnologies();
                renderTopics();
            });

            technologiesContainer.appendChild(button);
        });
    }

    /* ---------------------------------------
       CREAR LISTA DE TEMAS
    --------------------------------------- */

    function renderTopics() {
        const query = searchInput.value.trim().toLocaleLowerCase();

        const filteredResources = resources.filter(resource => {
            const matchesTechnology =
                resource.technology === selectedTechnology;

            const searchableText = [
                resource.title,
                resource.description,
                resource.technology,
                resource.dialect,
                ...resource.keywords
            ].join(" ").toLocaleLowerCase();

            return matchesTechnology && searchableText.includes(query);
        });

        selectedTitle.textContent = selectedTechnology;
        topicCount.textContent =
            `${filteredResources.length} temas`;

        resultsCount.textContent =
            `${filteredResources.length} resultados`;

        topicsContainer.replaceChildren();

        if (filteredResources.length === 0) {
            const empty = document.createElement("p");
            empty.className = "recursos-empty";
            empty.textContent =
                "No se encontraron temas. Prueba con otra búsqueda.";
            topicsContainer.appendChild(empty);
            return;
        }

        filteredResources.forEach(resource => {
            const button = document.createElement("button");
            button.type = "button";
            button.className = "recursos-topic-card";

            const textContainer = document.createElement("span");
            textContainer.className = "recursos-topic-text";

            const title = document.createElement("span");
            title.className = "recursos-topic-title";
            title.textContent = resource.title;

            const description = document.createElement("span");
            description.className = "recursos-topic-description";
            description.textContent = resource.description;

            const arrow = document.createElement("span");
            arrow.className = "recursos-topic-arrow";
            arrow.setAttribute("aria-hidden", "true");
            arrow.textContent = "↗";

            textContainer.append(title, description);
            button.append(textContainer, arrow);

            button.addEventListener("click", () => {
                openResource(resource, button);
            });

            topicsContainer.appendChild(button);
        });
    }

    /* ---------------------------------------
       ABRIR VENTANA DE DETALLE
    --------------------------------------- */

    function openResource(resource, trigger) {
        activeResource = resource;
        lastFocusedElement = trigger;

        modalTechnology.textContent = resource.technology;
        modalTitle.textContent = resource.title;
        modalDescription.textContent = resource.description;
        modalDialect.textContent = resource.dialect;
        modalCode.textContent = resource.code;

        modalNotes.replaceChildren();

        if (resource.notes.length > 0) {
            const heading = document.createElement("h4");
            heading.textContent = "Notas importantes";

            const list = document.createElement("ul");

            resource.notes.forEach(noteText => {
                const item = document.createElement("li");
                item.textContent = noteText;
                list.appendChild(item);
            });

            modalNotes.append(heading, list);
        }

        copyStatus.textContent = "";
        copyButton.disabled = false;

        modal.inert = false;
        modal.classList.add("is-open");
        modal.setAttribute("aria-hidden", "false");

        document.body.classList.add("recursos-modal-open");

        modalDialog.focus();
    }

    /* ---------------------------------------
       CERRAR VENTANA
    --------------------------------------- */

    function closeResource() {
        if (!modal.classList.contains("is-open")) return;

        modal.classList.remove("is-open");
        modal.setAttribute("aria-hidden", "true");
        modal.inert = true;

        document.body.classList.remove("recursos-modal-open");

        if (lastFocusedElement) {
            lastFocusedElement.focus();
        }

        activeResource = null;
    }

    closeButtons.forEach(button => {
        button.addEventListener("click", closeResource);
    });

    document.addEventListener("keydown", event => {
        if (!modal.classList.contains("is-open")) return;

        if (event.key === "Escape") {
            closeResource();
        }

        // Mantener el foco dentro de la ventana modal.
        if (event.key === "Tab") {
            const focusableElements = modalDialog.querySelectorAll(
                'button:not(:disabled), [href], input:not(:disabled), [tabindex]:not([tabindex="-1"])'
            );

            const focusable = Array.from(focusableElements).filter(
                element => !element.hasAttribute("hidden")
            );

            if (focusable.length === 0) {
                event.preventDefault();
                modalDialog.focus();
                return;
            }

            const first = focusable[0];
            const last = focusable[focusable.length - 1];

            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (
                !event.shiftKey &&
                document.activeElement === last
            ) {
                event.preventDefault();
                first.focus();
            }
        }
    });

    /* ---------------------------------------
       COPIAR CÓDIGO
    --------------------------------------- */

    async function copyTextFallback(text) {
        const textarea = document.createElement("textarea");

        textarea.value = text;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";

        document.body.appendChild(textarea);
        textarea.select();

        let copied = false;

        try {
            copied = document.execCommand("copy");
        } finally {
            textarea.remove();
        }

        if (!copied) {
            throw new Error("No se pudo copiar el código.");
        }
    }

    copyButton.addEventListener("click", async () => {
        if (!activeResource) return;

        try {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(activeResource.code);
            } else {
                await copyTextFallback(activeResource.code);
            }

            copyStatus.textContent = "Código copiado correctamente.";
        } catch (error) {
            copyStatus.textContent =
                "No fue posible copiarlo automáticamente. Selecciona el código y cópialo manualmente.";
        }
    });

    /* ---------------------------------------
       BUSCADOR
    --------------------------------------- */

    searchInput.addEventListener("input", () => {
        renderTopics();
    });

    /* ---------------------------------------
       INICIALIZACIÓN
    --------------------------------------- */

    renderTechnologies();
    renderTopics();

})();
