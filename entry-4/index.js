document.addEventListener("DOMContentLoaded", () => {

    // Animate all elements with class .fade
    const fadeElements = document.querySelectorAll('.fade');
    fadeElements.forEach((el, i) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'scale(1)';
        }, 200 + i * 150);
    });

    // Button is already visible with opacity: 1
});
