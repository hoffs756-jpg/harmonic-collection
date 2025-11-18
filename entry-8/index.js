// Smooth scroll reveal animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animate elements on scroll
document.addEventListener('DOMContentLoaded', () => {
    // Set initial state for animations
    const animatedElements = document.querySelectorAll('h2, ul, ol, img, .subtitle');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Animate list items with stagger effect
    const listItems = document.querySelectorAll('li');
    listItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        
        const itemObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }
            });
        }, observerOptions);
        
        itemObserver.observe(item);
    });

    // Add particle effects on hover
    const h1 = document.querySelector('h1');
    h1.addEventListener('mouseenter', () => {
        createParticles(h1);
    });

    // Checkbox functionality for ingredients
    const ingredientItems = document.querySelectorAll('ul li');
    ingredientItems.forEach(item => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', () => {
            item.style.textDecoration = item.style.textDecoration === 'line-through' ? 'none' : 'line-through';
            item.style.opacity = item.style.opacity === '0.5' ? '1' : '0.5';
            
            // Add checkmark animation
            if (item.style.textDecoration === 'line-through') {
                const checkmark = document.createElement('span');
                checkmark.textContent = ' ✓';
                checkmark.style.color = '#10b981';
                checkmark.style.fontWeight = 'bold';
                checkmark.style.animation = 'popIn 0.3s ease';
                item.appendChild(checkmark);
            } else {
                const checkmark = item.querySelector('span');
                if (checkmark) checkmark.remove();
            }
        });
    });

    // Add progress tracker for instructions
    const instructionItems = document.querySelectorAll('ol li');
    instructionItems.forEach((item, index) => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', () => {
            item.classList.toggle('completed');
            
            if (item.classList.contains('completed')) {
                item.style.opacity = '0.6';
                item.style.textDecoration = 'line-through';
            } else {
                item.style.opacity = '1';
                item.style.textDecoration = 'none';
            }
            
            updateProgress();
        });
    });

    // Add print button
    const printButton = document.createElement('button');
    printButton.textContent = '🖨️ Print Recipe';
    printButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        padding: 15px 25px;
        background: linear-gradient(135deg, #f59e0b, #d97706);
        color: white;
        border: none;
        border-radius: 50px;
        font-family: Georgia, serif;
        font-size: 16px;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(217, 119, 6, 0.4);
        transition: all 0.3s ease;
        z-index: 1000;
    `;
    
    printButton.addEventListener('mouseenter', () => {
        printButton.style.transform = 'scale(1.05)';
        printButton.style.boxShadow = '0 6px 16px rgba(217, 119, 6, 0.5)';
    });
    
    printButton.addEventListener('mouseleave', () => {
        printButton.style.transform = 'scale(1)';
        printButton.style.boxShadow = '0 4px 12px rgba(217, 119, 6, 0.4)';
    });
    
    printButton.addEventListener('click', () => {
        window.print();
    });
    
    document.body.appendChild(printButton);

    // Add floating steam animation to image
    const img = document.querySelector('img');
    if (img) {
        img.addEventListener('mouseenter', () => {
            createSteam(img);
        });
    }
});

// Create particle effect
function createParticles(element) {
    const rect = element.getBoundingClientRect();
    
    for (let i = 0; i < 10; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 8px;
            height: 8px;
            background: #f59e0b;
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            left: ${rect.left + Math.random() * rect.width}px;
            top: ${rect.top + rect.height / 2}px;
            opacity: 1;
        `;
        
        document.body.appendChild(particle);
        
        const angle = Math.random() * Math.PI * 2;
        const velocity = 2 + Math.random() * 3;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        let x = 0, y = 0, opacity = 1;
        const animate = () => {
            x += vx;
            y += vy;
            opacity -= 0.02;
            
            particle.style.transform = `translate(${x}px, ${y}px)`;
            particle.style.opacity = opacity;
            
            if (opacity > 0) {
                requestAnimationFrame(animate);
            } else {
                particle.remove();
            }
        };
        
        animate();
    }
}

// Create steam effect
function createSteam(element) {
    const rect = element.getBoundingClientRect();
    
    for (let i = 0; i < 5; i++) {
        const steam = document.createElement('div');
        steam.style.cssText = `
            position: fixed;
            width: 30px;
            height: 30px;
            background: radial-gradient(circle, rgba(255,255,255,0.6), transparent);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            left: ${rect.left + rect.width / 2 - 15 + (Math.random() - 0.5) * 40}px;
            top: ${rect.top + rect.height / 3}px;
            opacity: 0.8;
        `;
        
        document.body.appendChild(steam);
        
        let y = 0, opacity = 0.8;
        const animate = () => {
            y -= 2;
            opacity -= 0.015;
            
            steam.style.transform = `translateY(${y}px) scale(${1 + Math.abs(y) / 100})`;
            steam.style.opacity = opacity;
            
            if (opacity > 0) {
                requestAnimationFrame(animate);
            } else {
                steam.remove();
            }
        };
        
        setTimeout(() => animate(), i * 200);
    }
}

// Update progress indicator
function updateProgress() {
    const instructions = document.querySelectorAll('ol li');
    const completed = document.querySelectorAll('ol li.completed').length;
    const total = instructions.length;
    const percentage = (completed / total) * 100;
    
    let progressBar = document.querySelector('.progress-bar');
    
    if (!progressBar) {
        progressBar = document.createElement('div');
        progressBar.className = 'progress-bar';
        progressBar.style.cssText = `
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 5px;
            background: rgba(217, 119, 6, 0.2);
            z-index: 1000;
        `;
        
        const fill = document.createElement('div');
        fill.className = 'progress-fill';
        fill.style.cssText = `
            height: 100%;
            width: 0%;
            background: linear-gradient(90deg, #f59e0b, #d97706);
            transition: width 0.5s ease;
        `;
        
        progressBar.appendChild(fill);
        document.body.appendChild(progressBar);
    }
    
    const fill = progressBar.querySelector('.progress-fill');
    fill.style.width = `${percentage}%`;
}

// Add CSS animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes popIn {
        0% { transform: scale(0); }
        50% { transform: scale(1.2); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);