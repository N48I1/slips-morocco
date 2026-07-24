// script.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 2. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    // 3. Mobile Navigation Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const menuIcon = menuToggle.querySelector('i');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const isActive = navLinks.classList.contains('active');
            
            // Toggle menu icon between burger and close
            if (isActive) {
                menuToggle.innerHTML = '<i data-lucide="x"></i>';
            } else {
                menuToggle.innerHTML = '<i data-lucide="menu"></i>';
            }
            lucide.createIcons();
        });

        // Close mobile menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.innerHTML = '<i data-lucide="menu"></i>';
                lucide.createIcons();
            });
        });
    }

    // 4. Scroll Reveal Animations (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal-on-scroll, .collection-card, .craft-card');
    
    // Add reveal-on-scroll style helper dynamically
    revealElements.forEach(el => {
        el.classList.add('reveal-on-scroll');
    });

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target); // Only trigger once
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // 5. Interactive Dye Studio Swatches
    const swatches = document.querySelectorAll('.swatch-btn');
    const dyeTitle = document.getElementById('dyeTitle');
    const dyeSource = document.getElementById('dyeSource');
    const dyeTime = document.getElementById('dyeTime');
    const dyeText = document.getElementById('dyeText');
    const previewImage = document.getElementById('previewImage');
    const previewColorOverlay = document.getElementById('previewColorOverlay');
    const previewBadge = document.getElementById('previewBadge');

    const dyeData = {
        terracotta: {
            title: 'Marrakech Clay (Terracotta)',
            source: 'Madder Root',
            time: '24 Hours',
            text: 'Yielding deep earthy tones that capture the warm terracotta brickwork of ancient Marrakech Medina. It evokes warmth, stability, and connection to the Moroccan earth.',
            image: 'assets/terracotta.jpg',
            overlayColor: 'rgba(184, 90, 63, 0.15)'
        },
        emerald: {
            title: 'Atlas Emerald',
            source: 'Wild Indigo & Pomegranate',
            time: '48 Hours',
            text: 'A deep forest green inspired by the cedar forests of the Middle Atlas. Formulated from indigo leaves and iron tannin bath for rich longevity.',
            image: 'assets/emerald.jpg',
            overlayColor: 'rgba(31, 63, 52, 0.2)'
        },
        saffron: {
            title: 'Taliouine Saffron (Gold)',
            source: 'Saffron Threads',
            time: '12 Hours',
            text: 'A vibrant golden-orange reflecting the precious saffron fields of Taliouine. It captures the golden hour sun striking the courtyard riads.',
            image: 'assets/hero.jpg',
            overlayColor: 'rgba(226, 155, 60, 0.15)'
        },
        rose: {
            title: 'Kelaat M\'gouna Rose',
            source: 'Rose Petals & Madder',
            time: '18 Hours',
            text: 'A delicate dusty rose tint obtained from the Valley of Roses. Soft, romantic, and reminiscent of shifting desert dunes under the dawn light.',
            image: 'assets/terracotta.jpg',
            overlayColor: 'rgba(211, 162, 151, 0.25)'
        }
    };

    swatches.forEach(swatch => {
        swatch.addEventListener('click', () => {
            // Remove active from all
            swatches.forEach(s => s.classList.remove('active'));
            // Add active to current
            swatch.classList.add('active');

            const colorKey = swatch.getAttribute('data-color');
            const data = dyeData[colorKey];

            if (data) {
                // Fade out details transition
                const detailsContainer = document.getElementById('paletteDetails');
                detailsContainer.style.opacity = 0;
                detailsContainer.style.transform = 'translateY(10px)';

                setTimeout(() => {
                    dyeTitle.textContent = data.title;
                    dyeSource.textContent = data.source;
                    dyeTime.textContent = data.time;
                    dyeText.textContent = data.text;
                    previewImage.src = data.image;
                    previewColorOverlay.style.backgroundColor = data.overlayColor;
                    previewBadge.textContent = colorKey.charAt(0).toUpperCase() + colorKey.slice(1);

                    detailsContainer.style.opacity = 1;
                    detailsContainer.style.transform = 'translateY(0)';
                }, 300);
            }
        });
    });

    // 6. Preview Card 3D Tilt Effect
    const previewCard = document.getElementById('previewCard');
    if (previewCard) {
        previewCard.addEventListener('mousemove', (e) => {
            const rect = previewCard.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position inside element
            const y = e.clientY - rect.top;  // y position inside element

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -10; // max 10 degrees tilt
            const rotateY = ((x - centerX) / centerX) * 10;

            previewCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
        });

        previewCard.addEventListener('mouseleave', () => {
            previewCard.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
        });
    }

    // 7. Inquiry Form Submission Mock
    const inquiryForm = document.getElementById('inquiryForm');
    const formSuccess = document.getElementById('formSuccess');
    const submitBtn = document.getElementById('submitBtn');

    if (inquiryForm && formSuccess) {
        inquiryForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Disable submit button & show loading state
            const originalBtnContent = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span>Processing Atelier Booking...</span>';

            // Mock network call
            setTimeout(() => {
                inquiryForm.style.opacity = '0';
                inquiryForm.style.pointerEvents = 'none';
                
                setTimeout(() => {
                    inquiryForm.style.display = 'none';
                    formSuccess.classList.add('show');
                }, 400);

            }, 1800);
        });
    }

    // 8. Newsletter Form Submit
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('input');
            const originalVal = emailInput.value;
            
            emailInput.disabled = true;
            emailInput.value = 'Subscribed. Welcome to Slips Morocco.';
            
            setTimeout(() => {
                emailInput.disabled = false;
                emailInput.value = '';
                alert('Thank you! You have been added to our private dispatch.');
            }, 2000);
        });
    }
});
