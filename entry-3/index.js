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


// Back to Top Button
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 350) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
