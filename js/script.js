document.addEventListener("DOMContentLoaded", function() {
    const sectionContents = document.querySelectorAll('.section-content');
    sectionContents.forEach((content, index) => {
        void content.offsetWidth;
    });

    const navLinks = document.querySelectorAll('header nav a');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage) {
            link.parentElement.classList.add('active');
        } else {
            link.parentElement.classList.remove('active');
        }
    });

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert(); //ainda não está pronto//
            contactForm.reset();
        });
    }
});