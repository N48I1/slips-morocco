// script.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 2. Mobile Navigation Toggle
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            const isOpen = !mobileMenu.classList.contains('hidden');
            if (isOpen) {
                mobileMenu.classList.add('hidden');
                menuToggle.innerHTML = '<i data-lucide="menu" class="h-5 w-5"></i>';
            } else {
                mobileMenu.classList.remove('hidden');
                menuToggle.innerHTML = '<i data-lucide="x" class="h-5 w-5"></i>';
            }
            lucide.createIcons();
        });

        // Close mobile menu on link click
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                menuToggle.innerHTML = '<i data-lucide="menu" class="h-5 w-5"></i>';
                lucide.createIcons();
            });
        });
    }

    // 3. Scroll Reveal (IntersectionObserver)
    const revealEls = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
    revealEls.forEach(el => observer.observe(el));

    // 4. Interactive Droplet Simulator
    const rigPlane = document.getElementById('rigPlane');
    const rigBead = document.getElementById('rigBead');
    const rigTrail = document.getElementById('rigTrail');
    const inclineSlider = document.getElementById('inclineSlider');
    const inclineValue = document.getElementById('inclineValue');
    const readoutIncline = document.getElementById('readoutIncline');
    const readoutMedium = document.getElementById('readoutMedium');
    const readoutDrag = document.getElementById('readoutDrag');
    const toggleBtns = document.querySelectorAll('.toggle-btn');

    let incline = 9;
    let coatingMedium = 'slips';
    let currentLeft = 15;
    let velocity = 0;
    let delayTimer = 0;
    let stickSlipCounter = 0;

    const updateDisplay = () => {
        rigPlane.style.transform = `rotate(${-incline}deg)`;
        readoutIncline.textContent = `${incline}°`;
        inclineValue.textContent = `${incline}°`;

        if (coatingMedium === 'slips') {
            readoutMedium.textContent = 'oil-infused (SLIPS)';
            readoutDrag.textContent = '~0 mN/m';
        } else {
            readoutMedium.textContent = 'rough solid coating';
            readoutDrag.textContent = '~54 mN/m';
        }
    };

    const simLoop = () => {
        if (delayTimer > 0) {
            delayTimer--;
            requestAnimationFrame(simLoop);
            return;
        }

        const rad = (incline * Math.PI) / 180;
        const gForce = Math.sin(rad);

        if (coatingMedium === 'slips') {
            const friction = 0.02;
            const accel = Math.max(0, gForce * 0.35 - friction);
            velocity += accel;
            velocity = Math.min(velocity, 2.5);
            currentLeft += velocity;

            rigBead.style.left = `${currentLeft}%`;
            rigBead.style.top = `calc(50% - 24px + ${Math.tan(-rad) * (currentLeft - 50) * 1.5}px)`;

            const trailW = Math.max(0, currentLeft - 20);
            rigTrail.style.width = `${trailW}%`;
            rigTrail.style.transform = `rotate(${-incline}deg)`;

            if (currentLeft >= 78) {
                delayTimer = 60;
                currentLeft = 15;
                velocity = 0;
            }
        } else {
            const staticThreshold = 0.28;
            if (gForce < staticThreshold) {
                currentLeft = 15;
                velocity = 0;
                rigBead.style.left = `${currentLeft}%`;
                rigBead.style.top = `calc(50% - 24px + ${Math.tan(-rad) * (currentLeft - 50) * 1.5}px)`;
                rigTrail.style.width = '0%';
            } else {
                stickSlipCounter += 0.2;
                const jitter = Math.sin(stickSlipCounter) * 0.08;
                const accel = Math.max(0, gForce * 0.2 - 0.24 + jitter);
                velocity += accel;
                velocity = Math.min(velocity, 0.8);
                currentLeft += velocity;

                rigBead.style.left = `${currentLeft}%`;
                rigBead.style.top = `calc(50% - 24px + ${Math.tan(-rad) * (currentLeft - 50) * 1.5}px)`;

                const trailW = Math.max(0, currentLeft - 20);
                rigTrail.style.width = `${trailW}%`;
                rigTrail.style.transform = `rotate(${-incline}deg)`;

                if (currentLeft >= 78) {
                    delayTimer = 120;
                    currentLeft = 15;
                    velocity = 0;
                }
            }
        }

        requestAnimationFrame(simLoop);
    };

    inclineSlider.addEventListener('input', (e) => {
        incline = parseInt(e.target.value);
        updateDisplay();
        currentLeft = 15;
        velocity = 0;
        delayTimer = 0;
    });

    toggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            toggleBtns.forEach(b => {
                b.classList.remove('active');
                b.classList.add('text-slate');
                b.style.background = 'transparent';
                b.style.boxShadow = 'none';
            });
            btn.classList.add('active');
            btn.classList.remove('text-slate');
            btn.style.background = 'var(--color-white)';
            btn.style.boxShadow = '0 1px 3px rgba(0,0,0,0.06)';
            btn.style.color = 'var(--color-ink)';

            coatingMedium = btn.getAttribute('data-medium');
            updateDisplay();
            currentLeft = 15;
            velocity = 0;
            delayTimer = 0;
        });

        // Initialize active toggle style
        if (btn.classList.contains('active')) {
            btn.style.background = 'var(--color-white)';
            btn.style.boxShadow = '0 1px 3px rgba(0,0,0,0.06)';
            btn.style.color = 'var(--color-ink)';
        }
    });

    updateDisplay();
    simLoop();

    // 5. Form Submission
    const form = document.getElementById('inquiryForm');
    const formSuccess = document.getElementById('formSuccess');
    const submitBtn = document.getElementById('submitBtn');

    if (form && formSuccess) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span>Sending...</span>';

            setTimeout(() => {
                form.style.opacity = '0';
                form.style.pointerEvents = 'none';
                setTimeout(() => {
                    form.style.display = 'none';
                    formSuccess.classList.add('show');
                    lucide.createIcons();
                }, 350);
            }, 1200);
        });
    }
});
