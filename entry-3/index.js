// Fade elements in when they enter the viewport
const fadeElements = document.querySelectorAll(".fade");

function revealOnScroll() {
    fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
            el.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // run on load


// Click to highlight recipe steps
const steps = document.querySelectorAll("#steps li");

steps.forEach(step => {
    step.addEventListener("click", () => {
        step.classList.toggle("active-step");
    });
});
