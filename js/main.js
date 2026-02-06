// Main JavaScript File for Aflal Ahamed Portfolio

// Prevent transitions on page load
document.addEventListener('DOMContentLoaded', function () {
    document.body.classList.remove('preload');

    // Initialize animations
    initScrollAnimations();

    // Check and load images
    loadImages();

    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    if (menuToggle && menu) {
        menuToggle.addEventListener('click', function () {
            menu.classList.toggle('hidden');
            menu.classList.toggle('show');

            // Toggle hamburger to close icon
            const icon = menuToggle.querySelector('i');
            if (icon.getAttribute('data-lucide') === 'menu') {
                icon.setAttribute('data-lucide', 'x');
            } else {
                icon.setAttribute('data-lucide', 'menu');
            }
            lucide.createIcons();
        });

        // Close menu when clicking outside
        document.addEventListener('click', function (e) {
            if (!menu.contains(e.target) && !menuToggle.contains(e.target) && !menu.classList.contains('hidden')) {
                menu.classList.add('hidden');
                menu.classList.remove('show');
                const icon = menuToggle.querySelector('i');
                icon.setAttribute('data-lucide', 'menu');
                lucide.createIcons();
            }
        });
    }

    // Toggle functionality for luminous cards
    document.querySelectorAll('.toggle').forEach(toggle => {
        toggle.addEventListener('click', function () {
            this.classList.toggle('active');
        });
    });
});

// Check if images exist and show them, otherwise show placeholder
function checkImage(imagePath, imgElement, placeholder) {
    const img = new Image();
    img.onload = function () {
        imgElement.classList.remove('hidden');
        if (placeholder) {
            placeholder.classList.add('hidden');
        }
    };
    img.onerror = function () {
        // Image doesn't exist, keep placeholder
        imgElement.classList.add('hidden');
        if (placeholder) {
            placeholder.classList.remove('hidden');
        }
    };
    img.src = imagePath;
}

// Load all images on page load
function loadImages() {
    // Check profile photo
    const profilePhoto = document.getElementById('profilePhoto');
    const photoPlaceholder = document.getElementById('photoPlaceholder');
    if (profilePhoto && photoPlaceholder) {
        checkImage('images/profile.jpg', profilePhoto, photoPlaceholder);
    }

    // Check education logos
    const logos = [
        { img: 'iitLogo', placeholder: 'iitPlaceholder', path: 'images/iit-logo.png' },
        { img: 'uowLogo', placeholder: 'uowPlaceholder', path: 'images/uow-logo.png' },
        { img: 'zccLogo', placeholder: 'zccPlaceholder', path: 'images/zcc-logo.png' }
    ];

    logos.forEach(logo => {
        const imgElement = document.getElementById(logo.img);
        const placeholder = document.getElementById(logo.placeholder);
        if (imgElement && placeholder) {
            checkImage(logo.path, imgElement, placeholder);
        }
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active state to navigation on scroll
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    const nav = document.querySelector('nav');

    // Sticky nav effect - add scrolled class when scrolled down
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Scroll animations - Fade in elements when they come into view
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Observe project cards
    document.querySelectorAll('.group').forEach(card => {
        observer.observe(card);
    });

    // Observe skill cards with stagger
    const skillCards = document.querySelectorAll('.skill-card, .skill-grid-card');
    skillCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.05}s`;
        card.classList.add('reveal');
        observer.observe(card);
    });
}

// Form validation function (for future contact form)
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Copy email to clipboard
function copyEmail() {
    const email = 'ahamedaflal100@gmail.com';
    navigator.clipboard.writeText(email).then(function () {
        // Show copied notification
        showNotification('Email copied to clipboard!');
    }, function (err) {
        console.error('Could not copy email: ', err);
    });
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'fixed bottom-8 right-8 bg-black text-white px-6 py-3 rounded-full shadow-lg z-50 transition-opacity';
    notification.textContent = message;
    document.body.appendChild(notification);

    // Fade out and remove after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Detect mobile device
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Add mobile class to body if on mobile
if (isMobile()) {
    document.body.classList.add('mobile');
}

// Project card hover effects
document.querySelectorAll('.group').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-5px)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
    });
});

// Stats counter animation
function animateStats() {
    const stats = [
        { id: 'years', end: 2, suffix: '+' },
        { id: 'projects', end: 6, suffix: '+' },
        { id: 'accuracy', end: 99.8, suffix: '%' }
    ];

    stats.forEach(stat => {
        const element = document.querySelector(`[data-stat="${stat.id}"]`);
        if (element) {
            let current = 0;
            const increment = stat.end / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= stat.end) {
                    current = stat.end;
                    clearInterval(timer);
                }
                element.textContent = current.toFixed(stat.id === 'accuracy' ? 1 : 0) + stat.suffix;
            }, 30);
        }
    });
}

// Trigger stats animation when stats section is visible
const statsObserver = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.grid.grid-cols-3.gap-3');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// Keyboard navigation
document.addEventListener('keydown', function (e) {
    // Navigate sections with arrow keys
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        const sections = Array.from(document.querySelectorAll('section[id]'));
        const currentIndex = sections.findIndex(section => {
            const rect = section.getBoundingClientRect();
            return rect.top >= 0 && rect.top < window.innerHeight / 2;
        });

        if (e.key === 'ArrowDown' && currentIndex < sections.length - 1) {
            sections[currentIndex + 1].scrollIntoView({ behavior: 'smooth' });
        } else if (e.key === 'ArrowUp' && currentIndex > 0) {
            sections[currentIndex - 1].scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// Print console welcome message
console.log('%c👋 Hi there! Welcome to my portfolio.', 'color: #000; font-size: 20px; font-weight: bold; padding: 10px;');
console.log('%cInterested in the code? Check it out on GitHub!', 'color: #666; font-size: 14px; padding: 5px;');
console.log('%c🔗 https://github.com/aflal123', 'color: #0066cc; font-size: 14px; padding: 5px; text-decoration: underline;');
console.log('%c\n💼 Open to opportunities and collaborations!', 'color: #000; font-size: 14px; font-weight: bold; padding: 5px;');

// Add "Back to Top" button functionality
function createBackToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.className = 'fixed bottom-8 right-8 bg-black text-white w-12 h-12 rounded-full shadow-lg opacity-0 transition-opacity z-40 hover:bg-gray-800';
    button.id = 'backToTop';
    button.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(button);

    window.addEventListener('scroll', function () {
        if (window.scrollY > 500) {
            button.style.opacity = '1';
        } else {
            button.style.opacity = '0';
        }
    });

    button.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize back to top button
createBackToTopButton();

// Performance optimization - Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Service Worker registration (for PWA - optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        // Uncomment when you create a service worker
        // navigator.serviceWorker.register('/sw.js').then(function(registration) {
        //     console.log('ServiceWorker registration successful');
        // }, function(err) {
        //     console.log('ServiceWorker registration failed: ', err);
        // });
    });
}

// Export functions for use in HTML if needed
window.portfolioFunctions = {
    copyEmail,
    validateEmail,
    showNotification
};