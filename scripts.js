// Toggle FAQ answers
document.querySelectorAll('.faq-item h3').forEach(item => {
    item.addEventListener('click', () => {
        const parent = item.parentElement;
        parent.classList.toggle('active');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Trigger scroll event on load to handle color change immediately
    document.dispatchEvent(new Event('scroll'));
});

// Change font color on white background
document.addEventListener('scroll', function() {
    const aboutSection = document.getElementById('about');
    const faqSection = document.getElementById('faq');

    // Function to check if an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Check if the about section is in the viewport
    if (isInViewport(aboutSection)) {
        aboutSection.style.color = 'black';
    } else {
        aboutSection.style.color = '#333';
    }

    // Check if the FAQ section is in the viewport
    if (isInViewport(faqSection)) {
        faqSection.style.color = 'black';
    } else {
        faqSection.style.color = '#333';
    }
});
