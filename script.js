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
            const vcardContent = `BEGIN:VCARD
VERSION:3.0
N:Sharma;Hari;Prasad;;
FN:Hari Prasad Sharma
ORG:EURO GREEN MOTORS PVT. LTD. (BYD Chitwan)
TITLE:Authorized Dealer
TEL;TYPE=WORK,VOICE:+9779801368497
TEL;TYPE=CELL,VOICE:+9779801368497
EMAIL;TYPE=PREF,INTERNET:eurogreenmotorspvtltd@gmail.com
URL;type=Location:https://maps.app.goo.gl/NnG1KEJ6zdmMWRQRA
URL;type=WhatsApp:https://wa.me/9779801368497
URL;type=Facebook:https://www.facebook.com/bydchitwan
URL;type=Instagram:https://www.instagram.com/byd_chitwan/
URL;type=TikTok:https://www.tiktok.com/@byd.chitwan
X-SOCIALPROFILE;type=facebook:https://www.facebook.com/bydchitwan
X-SOCIALPROFILE;type=instagram:https://www.instagram.com/byd_chitwan/
X-SOCIALPROFILE;type=tiktok:https://www.tiktok.com/@byd.chitwan
ADR;TYPE=WORK:;;Euro Green Motors;Chitwan;Bagmati;;Nepal
END:VCARD`;
            
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
