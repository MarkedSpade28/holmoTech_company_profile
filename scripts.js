// Debounce function with enhanced options

document.addEventListener("DOMContentLoaded", function() {
    const toggleElements = document.querySelectorAll('.toggle-content');

    toggleElements.forEach(function(element) {
        element.addEventListener('click', function() {
            const targetId = element.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.classList.toggle('hidden');
            }
        });
    });
});

function debounce(func, wait = 10, options = { leading: true, trailing: true }) {
    let timeout;
    return function () {
        const context = this, args = arguments;
        const later = () => {
            timeout = null;
            if (options.trailing && !options.leading) func.apply(context, args);
        };
        const callNow = options.leading && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Toggle FAQ answers
document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const header = item.querySelector('h3');
        const content = item.querySelector('p');
        const toggleIcon = header.querySelector('span');

        // Improve accessibility
        header.setAttribute('role', 'button');
        header.setAttribute('aria-expanded', 'false');
        content.setAttribute('aria-hidden', 'true');

        header.addEventListener('click', () => {
            const isActive = item.classList.toggle('active');
            content.classList.toggle('hidden', !isActive);
            header.setAttribute('aria-expanded', isActive);
            content.setAttribute('aria-hidden', !isActive);
            toggleIcon.textContent = isActive ? '-' : '+';
        });
    });

    // Animation for fade-in-up
    const fadeInUpElements = document.querySelectorAll('.fade-in-up');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px' // Trigger slightly before full view
    };

    const observerCallback = entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    fadeInUpElements.forEach(element => {
        observer.observe(element);
    });

    // Fallback for browsers without IntersectionObserver support
    if (!('IntersectionObserver' in window)) {
        fadeInUpElements.forEach(element => {
            element.classList.add('visible');
        });
    }
});

// Change font color on white background
document.addEventListener('scroll', debounce(() => {
    const aboutSection = document.getElementById('about');
    const faqSection = document.getElementById('faq');
    let lastKnownColor = '';

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function updateColor() {
        const color = (isInViewport(aboutSection) || isInViewport(faqSection)) ? 'black' : '#333';
        if (color !== lastKnownColor) {
            aboutSection.style.color = color;
            faqSection.style.color = color;
            lastKnownColor = color;
        }
    }

    updateColor();
}, 15));
