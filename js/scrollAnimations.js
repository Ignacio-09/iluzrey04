export function initScrollAnimations() {
    const elementosReveal = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    elementosReveal.forEach(el => observer.observe(el));
}