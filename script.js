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

    // vCard Download Logic
    const saveContactBtn = document.querySelector('.btn-save');
    if (saveContactBtn) {
        saveContactBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const vcardContent = `BEGIN:VCARD\nVERSION:3.0\nN:Sharma;Hari;Prasad;;\nFN:Hari Prasad Sharma\nORG:EURO GREEN MOTORS PVT. LTD. (BYD Chitwan)\nTITLE:Authorized Dealer\nTEL;TYPE=WORK,VOICE:+9779801368497\nTEL;TYPE=CELL,VOICE:+9779801368497\nEMAIL;TYPE=PREF,INTERNET:eurogreenmotorspvtltd@gmail.com\nURL:https://www.facebook.com/bydchitwan\nADR;TYPE=WORK:;;Chitwan;Bagmati;;;Nepal\nEND:VCARD`;
            
            const blob = new Blob([vcardContent], { type: 'text/vcard;charset=utf-8' });
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'Hari_Prasad_Sharma.vcf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // Clean up
            setTimeout(() => window.URL.revokeObjectURL(url), 100);
        });
    }
});
