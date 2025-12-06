// Fade in the cute button after page loads
document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".cute-btn");

    if (button) {
        setTimeout(() => {
            button.style.transition = "opacity 0.8s ease";
            button.style.opacity = "1";
        }, 300);
    }
});