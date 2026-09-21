document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const companyName = document.getElementById('company-name');
    const scrollIndicator = document.getElementById('scroll-indicator');
    const contactsSection = document.getElementById('contacts-section');
    
    // Threshold in pixels to trigger the animation
    const headerThreshold = 50;
    const contactsThreshold = 250;

    // Listen for scroll events on the window
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;

        // Step 1: Header Shrink & Initial Text Fade
        if (scrollPosition > headerThreshold) {
            header.classList.add('scrolled');
            if (companyName) companyName.classList.add('hidden');
            if (scrollIndicator) scrollIndicator.classList.add('hidden');
        } else {
            header.classList.remove('scrolled');
            if (companyName) companyName.classList.remove('hidden');
            if (scrollIndicator) scrollIndicator.classList.remove('hidden');
        }

        // Step 2: Contacts Fade In
        if (scrollPosition > headerThreshold) {
            if (contactsSection) contactsSection.classList.add('visible');
        } else {
            if (contactsSection) contactsSection.classList.remove('visible');
        }
    });
});
