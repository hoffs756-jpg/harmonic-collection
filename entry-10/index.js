const button = document.getElementById('ctaButton');

button.addEventListener('mousemove', (e) => {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            createSparkle(x, y, button);
        }, i * 100);
    }
});

function createSparkle(x, y, parent) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    parent.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 1500);
}

const shapes = document.querySelectorAll('.floating-shape');
shapes.forEach((shape, index) => {
    shape.addEventListener('mouseenter', () => {
        shape.style.animationPlayState = 'paused';
    });
    shape.addEventListener('mouseleave', () => {
        shape.style.animationPlayState = 'running';
    });
});