// Main entry point
document.addEventListener('DOMContentLoaded', () => {
    initThreeJS();
    initScrollAnimations();
    initTypewriter();
    initTiltEffect();
    initCounters();
    initNavigation();
    initTheme();
});

// --- Typewriter Effect ---
function initTypewriter() {
    const text = "Software Engineer";
    const speed = 100; // ms per char
    const element = document.getElementById('typewriter');
    if (!element) return;

    let i = 0;
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    // Start after a small delay
    setTimeout(type, 500);
}

// --- Three.js Antigravity Background ---
function initThreeJS() {
    const container = document.getElementById('canvas-container');
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    const isLightDefault = document.documentElement.getAttribute('data-theme') !== 'dark';
    const initialFogColor = isLightDefault ? 0xf8fafc : 0x020617;
    scene.fog = new THREE.FogExp2(initialFogColor, 0.002); // Blends particles into background

    // Camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 50;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // --- Particle System ---
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 3000;

    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
        // Random distribution in a large volume
        posArray[i] = (Math.random() - 0.5) * 150;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    // Material Logic
    const initialTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const pColor = initialTheme === 'light' ? 0x4f46e5 : 0x4285F4;
    const pOpacity = initialTheme === 'light' ? 1.0 : 0.8;

    const material = new THREE.PointsMaterial({
        size: 0.15,
        color: pColor,
        transparent: true,
        opacity: pOpacity,
        blending: initialTheme === 'light' ? THREE.NormalBlending : THREE.AdditiveBlending
    });

    const particlesMesh = new THREE.Points(particlesGeometry, material);
    scene.add(particlesMesh);

    // Mouse Interaction Variables
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    document.addEventListener('mousemove', (event) => {
        mouseX = (event.clientX - windowHalfX);
        mouseY = (event.clientY - windowHalfY);
    });

    // Animation Loop
    const clock = new THREE.Clock();

    function animate() {
        requestAnimationFrame(animate);

        const elapsedTime = clock.getElapsedTime();

        targetX = mouseX * 0.001;
        targetY = mouseY * 0.001;

        // Gentle constant rotation + Mouse parallax
        particlesMesh.rotation.y += 0.001; // Constant spin
        particlesMesh.rotation.x += 0.0005;

        // Smoothly interpolate rotation based on mouse
        particlesMesh.rotation.y += 0.05 * (targetX - particlesMesh.rotation.y);
        particlesMesh.rotation.x += 0.05 * (targetY - particlesMesh.rotation.x);

        // Optional: Wave effect
        // const positions = particlesGeometry.attributes.position.array;
        // for (let i = 0; i < particlesCount; i++) {
        //     const i3 = i * 3;
        //     const x = particlesGeometry.attributes.position.array[i3];
        //     // positions[i3 + 1] = Math.sin(elapsedTime + x) * 2; // Wavy Y
        // }
        // particlesGeometry.attributes.position.needsUpdate = true;

        renderer.render(scene, camera);
    }

    animate();

    // Resize Handler
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Theme Update Handler for Three.js
    window.addEventListener('themeChanged', (e) => {
        const theme = e.detail.theme;
        const color = theme === 'light' ? 0xf8fafc : 0x020617;
        scene.fog.color.setHex(color);

        // Update particle visibility for Light/Dark
        if (theme === 'light') {
            material.color.setHex(0x4f46e5); // Indigo
            material.opacity = 1.0;
            material.blending = THREE.NormalBlending;
        } else {
            material.color.setHex(0x4285F4); // Google Blue
            material.opacity = 0.8;
            material.blending = THREE.AdditiveBlending;
        }
    });
}

// --- Scroll & Reveal Animations ---
function initScrollAnimations() {
    // Fade-in elements on scroll
    const fadeElements = document.querySelectorAll('.fade-in, .section-title, .project-card, .service-card, .education-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: unobserve if you only want it to happen once
                // observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(el => observer.observe(el));

    // Add CSS class for visible state
    // We need to inject this style or rely on CSS. 
    // Let's rely on CSS transitions defined for these elements (opacity/transform).
    // Adding inline style here just in case style.css missed the specific .visible class logic for generic fade-ins
    // Ideally this should be in CSS, but I'll add a helper here if needed.
    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });
}

// Override generic fade-in logic with the .visible class
const styleSheet = document.createElement("style");
styleSheet.innerText = `
    .visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    .delay-200 { transition-delay: 0.2s; }
`;
document.head.appendChild(styleSheet);


// --- 3D Tilt Effect for Cards (Vanilla JS) ---
function initTiltEffect() {
    const tiltElements = document.querySelectorAll('[data-tilt]');

    tiltElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -10; // Max 10deg
            const rotateY = ((x - centerX) / centerX) * 10;

            el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        el.addEventListener('mouseleave', () => {
            el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
}

// --- Number Counters ---
function initCounters() {
    const counters = document.querySelectorAll('.counter');
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.getAttribute('data-target'));
                const duration = 2000; // 2 seconds
                let startTimestamp = null;

                const step = (timestamp) => {
                    if (!startTimestamp) startTimestamp = timestamp;
                    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                    el.innerText = Math.floor(progress * target);
                    if (progress < 1) {
                        window.requestAnimationFrame(step);
                    } else {
                        el.innerText = target;
                    }
                };
                window.requestAnimationFrame(step);
                obs.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(c => observer.observe(c));
}

// --- Navigation Active State ---
function initNavigation() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });

        // Navbar blur effect on scroll
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// --- Theme Toggle Logic ---
function initTheme() {
    const themeBtn = document.getElementById('theme-toggle');
    if (!themeBtn) return;

    const icon = themeBtn.querySelector('i');

    // Check for saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme, icon);

    themeBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme, icon);

        // Dispatch custom event for Three.js to update
        window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme: newTheme } }));
    });
}

function updateThemeIcon(theme, icon) {
    if (theme === 'light') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}
