// Add floating hearts animation on hover
document.querySelectorAll('.food-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        createFloatingEmoji(this, '✨');
    });
});

function createFloatingEmoji(element, emoji) {
    const floater = document.createElement('div');
    floater.textContent = emoji;
    floater.style.cssText = `
        position: absolute;
        font-size: 1.5rem;
        pointer-events: none;
        animation: float 2s ease-out forwards;
        left: ${Math.random() * 100}%;
        top: 50%;
    `;
    
    element.style.position = 'relative';
    element.appendChild(floater);
    
    setTimeout(() => floater.remove(), 2000);
}

// Add CSS for floating animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        to {
            transform: translateY(-100px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Animate locations on scroll
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
            }, index * 100);
        }
    });
}, observerOptions);

document.querySelectorAll('.location').forEach(location => {
    observer.observe(location);
});

// Add wiggle effect to emojis on click
document.querySelectorAll('.emoji').forEach(emoji => {
    emoji.addEventListener('click', function() {
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = 'wiggle 0.5s ease, bounce 2s ease-in-out infinite';
        }, 10);
    });
});

const wiggleStyle = document.createElement('style');
wiggleStyle.textContent = `
    @keyframes wiggle {
        0%, 100% { transform: rotate(0deg); }
        25% { transform: rotate(-10deg); }
        75% { transform: rotate(10deg); }
    }
`;
document.head.appendChild(wiggleStyle);

// Add sparkle effect to title on hover
const title = document.querySelector('.header h1');
title.addEventListener('mouseenter', function() {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => createSparkle(this), i * 100);
    }
});

function createSparkle(element) {
    const sparkle = document.createElement('span');
    sparkle.textContent = '✨';
    sparkle.style.cssText = `
        position: absolute;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        font-size: ${Math.random() * 1 + 0.5}rem;
        animation: sparkle 1s ease-out forwards;
        pointer-events: none;
    `;
    
    element.style.position = 'relative';
    element.appendChild(sparkle);
    
    setTimeout(() => sparkle.remove(), 1000);
}

const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
    @keyframes sparkle {
        0% {
            transform: scale(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: scale(1.5) rotate(180deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(sparkleStyle);