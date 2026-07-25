// script.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 2. Navbar Scroll Style Shift
    const navbar = document.getElementById('navbar');
    const handleScroll = () => {
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // 3. Mobile Navigation Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const isActive = navLinks.classList.contains('active');
            
            if (isActive) {
                menuToggle.innerHTML = '<i data-lucide="x"></i>';
            } else {
                menuToggle.innerHTML = '<i data-lucide="menu"></i>';
            }
            lucide.createIcons();
        });

        // Close menu when clicking link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.innerHTML = '<i data-lucide="menu"></i>';
                lucide.createIcons();
            });
        });
    }

    // 4. Scroll Reveal IntersectionObserver
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // 5. Interactive Droplet Simulator Physics Rig
    const rigPlane = document.getElementById('rigPlane');
    const rigBead = document.getElementById('rigBead');
    const rigTrail = document.getElementById('rigTrail');
    const inclineSlider = document.getElementById('inclineSlider');
    const inclineValue = document.getElementById('inclineValue');
    
    const readoutIncline = document.getElementById('readoutIncline');
    const readoutMedium = document.getElementById('readoutMedium');
    const readoutDrag = document.getElementById('readoutDrag');
    const toggleBtns = document.querySelectorAll('.toggle-btn');

    let incline = parseInt(inclineSlider.value);
    let coatingMedium = 'slips'; // default
    
    // Physics simulation variables
    let currentLeft = 15; // in percentage
    let velocity = 0;
    let animId = null;
    let delayTimer = 0; // timer for loops delay
    let stickSlipCounter = 0;

    const updateRigDisplay = () => {
        // Rotate the plane container based on incline angle
        rigPlane.style.transform = `rotate(${-incline}deg)`;
        
        // Update readout displays
        readoutIncline.textContent = `${incline}°`;
        inclineValue.textContent = `${incline}°`;
        
        if (coatingMedium === 'slips') {
            readoutMedium.textContent = 'oil-infused pore (SLIPS)';
            readoutDrag.textContent = '~0 mN/m (sliding angle < 2°)';
        } else {
            readoutMedium.textContent = 'rough solid coating';
            readoutDrag.textContent = '~54 mN/m (pinned state)';
        }
    };

    const simulationLoop = () => {
        // Handle post-slide delay before looping back
        if (delayTimer > 0) {
            delayTimer--;
            animId = requestAnimationFrame(simulationLoop);
            return;
        }

        const rad = (incline * Math.PI) / 180;
        const gForce = Math.sin(rad); // gravity slide force component

        if (coatingMedium === 'slips') {
            // SLIPS: slide easily, negligible friction
            const friction = 0.02;
            const acceleration = Math.max(0, gForce * 0.35 - friction);
            
            velocity += acceleration;
            velocity = Math.min(velocity, 2.5); // cap speed
            currentLeft += velocity;
            
            // Render bead and trail
            rigBead.style.left = `${currentLeft}%`;
            rigBead.style.top = `calc(50% - 24px + ${Math.tan(-rad) * (currentLeft - 50) * 1.5}px)`; // follow tilted plane
            
            const trailWidth = Math.max(0, currentLeft - 20);
            rigTrail.style.width = `${trailWidth}%`;
            rigTrail.style.transform = `rotate(${-incline}deg)`;
            
            if (currentLeft >= 78) {
                // reset at the bottom
                delayTimer = 60; // 1 second delay
                currentLeft = 15;
                velocity = 0;
            }
        } else {
            // Standard Solid Coat: high static friction. Needs high incline to move at all.
            const staticFrictionThreshold = 0.28; // corresponds to approx 16 degrees
            
            if (gForce < staticFrictionThreshold) {
                // Stays pinned at starting point
                currentLeft = 15;
                velocity = 0;
                rigBead.style.left = `${currentLeft}%`;
                rigBead.style.top = `calc(50% - 24px + ${Math.tan(-rad) * (currentLeft - 50) * 1.5}px)`;
                rigTrail.style.width = '0%';
            } else {
                // Sliding starts but with high kinetic friction and stick-slip chatter
                const kineticFriction = 0.24;
                // Add a small sine wave stickiness vibration to simulate droplets dragging/chattering on solid coating
                stickSlipCounter += 0.2;
                const stickSlipJitter = Math.sin(stickSlipCounter) * 0.08;
                
                const acceleration = Math.max(0, gForce * 0.2 - kineticFriction + stickSlipJitter);
                velocity += acceleration;
                velocity = Math.min(velocity, 0.8); // much slower than SLIPS
                currentLeft += velocity;
                
                rigBead.style.left = `${currentLeft}%`;
                rigBead.style.top = `calc(50% - 24px + ${Math.tan(-rad) * (currentLeft - 50) * 1.5}px)`;
                
                const trailWidth = Math.max(0, currentLeft - 20);
                rigTrail.style.width = `${trailWidth}%`;
                rigTrail.style.transform = `rotate(${-incline}deg)`;
                
                if (currentLeft >= 78) {
                    delayTimer = 120; // 2 seconds delay
                    currentLeft = 15;
                    velocity = 0;
                }
            }
        }

        animId = requestAnimationFrame(simulationLoop);
    };

    // Slider listener
    inclineSlider.addEventListener('input', (e) => {
        incline = parseInt(e.target.value);
        updateRigDisplay();
        // reset simulation variables on change to reflect instantly
        currentLeft = 15;
        velocity = 0;
        delayTimer = 0;
    });

    // Medium buttons listener
    toggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            toggleBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            coatingMedium = btn.getAttribute('data-medium');
            
            updateRigDisplay();
            // reset simulation on change
            currentLeft = 15;
            velocity = 0;
            delayTimer = 0;
        });
    });

    // Initialize display and start simulation loop
    updateRigDisplay();
    simulationLoop();

    // 6. Form Submission Handling (Institutional / Technical Form)
    const inquiryForm = document.getElementById('inquiryForm');
    const formSuccess = document.getElementById('formSuccess');
    const submitBtn = document.getElementById('submitBtn');

    if (inquiryForm && formSuccess) {
        inquiryForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Disable submit button & show loading state
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span>Transmitting...</span> <i data-lucide="loader"></i>';
            lucide.createIcons();

            // Mock database insertion / SMTP relay delay
            setTimeout(() => {
                inquiryForm.style.opacity = '0';
                inquiryForm.style.pointerEvents = 'none';
                
                setTimeout(() => {
                    inquiryForm.style.display = 'none';
                    formSuccess.classList.add('show');
                }, 400);

            }, 1500);
        });
    }
});
