document.addEventListener("DOMContentLoaded", () => {
    // Animate all fade elements
    const fadeElements = document.querySelectorAll('.fade');
    fadeElements.forEach((el, i) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'scale(1)';
        }, 200 + i * 150);
    });

    // Animate the button separately
    const button = document.querySelector('.cute-btn');
    if (button) {
        setTimeout(() => {
            button.style.opacity = '1';
        }, 1200); // appears after the text
    }
});
