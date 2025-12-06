// Small cute animation when page loads
document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".cute-btn");
    button.style.opacity = "0";

    setTimeout(() => {
        button.style.transition = "opacity 0.8s ease";
        button.style.opacity = "1";
    }, 300);
});