// Toggle FAQ answers
document.querySelectorAll('.faq-item h3').forEach(item => {
    item.addEventListener('click', () => {
        const parent = item.parentElement;
        parent.classList.toggle('active');
    });
});

//Change font color on white background
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

    // Check if either the about or faq section is in the viewport
    if (isInViewport(aboutSection) || isInViewport(faqSection)) {
        aboutSection.style.color = 'black';
        faqSection.style.color = 'black';
    } else {
        aboutSection.style.color = '#333';
        faqSection.style.color = '#333';
    }
});
