// fade-in animation for the cute button
document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".cute-btn");
    setTimeout(() => {
        button.style.transition = "opacity 0.8s ease";
        button.style.opacity = "1";
    }, 300);
});
