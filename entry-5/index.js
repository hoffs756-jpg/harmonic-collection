document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll('.fade');
    fadeElements.forEach((el, i) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'scale(1)';
        }, 200 + i * 150);
    });

    // Button fade-in separately, guaranteed visible
    const button = document.querySelector('.cute-btn');
    if(button){
        setTimeout(() => {
            button.style.opacity = '1';
        }, 1300); // appears after main content
    }
});
