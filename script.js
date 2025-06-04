document.addEventListener('DOMContentLoaded', function() {
    
    // --- Sticky Header Shadow on Scroll ---
    const header = document.querySelector('.sticky-header');
    if (header) {
        // Initially, the shadow is defined in CSS. This script can add/remove
        // a class for more complex shadow behavior if needed, but for a simple
        // static shadow, CSS is enough.
        // If you want shadow to appear only on scroll:
        // header.style.boxShadow = "none"; // remove initial shadow
        // window.addEventListener('scroll', function() {
        //     if (window.scrollY > 20) { // Add shadow after scrolling 20px
        //         header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        //     } else {
        //         header.style.boxShadow = 'none';
        //     }
        // });
    }

    // --- Mobile Navigation Toggle ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            const isExpanded = navLinks.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
            menuToggle.classList.toggle('active'); // For styling the hamburger to an X
        });
    }

    // --- Update Footer Year ---
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- Smooth Scrolling for Anchor Links (Optional) ---
    // If you add internal page links like <a href="#sectionId">
    // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //     anchor.addEventListener('click', function (e) {
    //         const hrefAttribute = this.getAttribute('href');
    //         // Ensure it's a valid ID selector and not just "#" or an external link
    //         if (hrefAttribute && hrefAttribute.startsWith('#') && hrefAttribute.length > 1) {
    //             const targetElement = document.querySelector(hrefAttribute);
    //             if (targetElement) {
    //                 e.preventDefault();
    //                 targetElement.scrollIntoView({
    //                     behavior: 'smooth'
    //                 });
    //             }
    //         }
    //     });
    // });

    // --- Active Navigation Link Styling ---
    // The CSS handles the .active class based on the body's current page context.
    // This JS part is mainly for dynamically setting it if needed or for single-page apps.
    // For multi-page sites, adding 'active' class directly in HTML is simpler.
    // The provided HTML already has the 'active' class set on the correct nav link per page.

    // --- Contact Form Submission (Basic - No Backend) ---
    // If you uncomment the form in contact.html:
    // const contactForm = document.getElementById('contactForm');
    // if (contactForm) {
    //     contactForm.addEventListener('submit', function(e) {
    //         e.preventDefault(); // Prevent default form submission
            
    //         // Basic validation example (can be more robust)
    //         const name = document.getElementById('name').value.trim();
    //         const email = document.getElementById('email').value.trim();
    //         const message = document.getElementById('message').value.trim();

    //         if (!name || !email || !message) {
    //             alert('Please fill in all fields.');
    //             return;
    //         }
    //         if (!validateEmail(email)) {
    //             alert('Please enter a valid email address.');
    //             return;
    //         }

    //         // If using a mailto link for submission:
    //         // const subject = "Website Contact Form Submission";
    //         // window.location.href = `mailto:JDIntagliata@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\nMessage: ' + message)}`;
            
    //         alert('Thank you for your message! (This is a demo - no email sent yet)');
    //         contactForm.reset(); // Clear the form
    //     });
    // }

    // function validateEmail(email) {
    //     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //     return re.test(String(email).toLowerCase());
    // }

});
