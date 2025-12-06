document.addEventListener("DOMContentLoaded", () => {

    // Fade in the button
    const button = document.querySelector('.cute-btn');
    if(button){
        setTimeout(() => {
            button.style.opacity = '1';
        }, 400); // slight delay for staggered effect
    }

    // Animate image
    const image = document.querySelector('.recipe-img');
    if(image){
        setTimeout(() => {
            image.style.opacity = '1';
            image.style.transform = 'scale(1)';
        }, 300);
    }

    // Animate ingredient and instruction lists
    const lists = document.querySelectorAll('.list');
    lists.forEach((list, i) => {
        setTimeout(() => {
            list.style.opacity = '1';
            list.style.transform = 'scale(1)';
        }, 200 + i * 150);
    });
});

