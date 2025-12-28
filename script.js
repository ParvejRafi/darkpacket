// DOM Elements
const header = document.querySelector('header');
const navLinks = document.querySelector('.nav-links');
const hamburger = document.querySelector('.hamburger');
const navLinksItems = document.querySelectorAll('.nav-links li');
const themeToggle = document.querySelector('.theme-toggle');
const moonIcon = document.querySelector('.fa-moon');
const sunIcon = document.querySelector('.fa-sun');
const contactForm = document.getElementById('contact-form');

// Advanced Network Animation
const networkCanvas = document.getElementById('networkCanvas');
const particleCanvas = document.getElementById('particleCanvas');

if (networkCanvas && particleCanvas) {
    const networkCtx = networkCanvas.getContext('2d');
    const particleCtx = particleCanvas.getContext('2d');
    let particles = [];
    let energyParticles = [];
    let animationId;

    // Set canvas sizes
    function resizeCanvas() {
        networkCanvas.width = networkCanvas.offsetWidth;
        networkCanvas.height = networkCanvas.offsetHeight;
        particleCanvas.width = particleCanvas.offsetWidth;
        particleCanvas.height = particleCanvas.offsetHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Network Particle class
    class Particle {
        constructor() {
            this.x = Math.random() * networkCanvas.width;
            this.y = Math.random() * networkCanvas.height;
            this.vx = (Math.random() - 0.5) * 0.8;
            this.vy = (Math.random() - 0.5) * 0.8;
            this.radius = Math.random() * 2.5 + 1;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            // Bounce off edges
            if (this.x < 0 || this.x > networkCanvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > networkCanvas.height) this.vy *= -1;
        }

        draw() {
            networkCtx.beginPath();
            networkCtx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            networkCtx.fillStyle = 'rgba(0, 238, 255, 1)';
            networkCtx.shadowBlur = 15;
            networkCtx.shadowColor = '#00eeff';
            networkCtx.fill();
            networkCtx.closePath();
        }
    }

    // Energy Particle class (fast moving particles)
    class EnergyParticle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * particleCanvas.width;
            this.y = -10;
            this.speed = Math.random() * 3 + 2;
            this.radius = Math.random() * 1.5 + 0.5;
            this.hue = Math.random() > 0.5 ? 180 : 140; // Cyan or Green
        }

        update() {
            this.y += this.speed;
            if (this.y > particleCanvas.height + 10) {
                this.reset();
            }
        }

        draw() {
            particleCtx.beginPath();
            particleCtx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            particleCtx.fillStyle = `hsl(${this.hue}, 100%, 50%)`;
            particleCtx.shadowBlur = 10;
            particleCtx.shadowColor = `hsl(${this.hue}, 100%, 50%)`;
            particleCtx.fill();
            particleCtx.closePath();

            // Trail effect
            particleCtx.beginPath();
            particleCtx.moveTo(this.x, this.y);
            particleCtx.lineTo(this.x, this.y - 20);
            particleCtx.strokeStyle = `hsla(${this.hue}, 100%, 50%, 0.3)`;
            particleCtx.lineWidth = this.radius;
            particleCtx.stroke();
        }
    }

    // Create particles
    function initParticles() {
        particles = [];
        energyParticles = [];
        const particleCount = Math.min(60, Math.floor(networkCanvas.width * networkCanvas.height / 8000));
        const energyCount = 30;
        
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
        
        for (let i = 0; i < energyCount; i++) {
            energyParticles.push(new EnergyParticle());
        }
    }
    initParticles();

    // Draw connections between particles
    function drawConnections() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 120) {
                    const opacity = (1 - distance / 120) * 0.6;
                    networkCtx.beginPath();
                    networkCtx.strokeStyle = `rgba(0, 238, 255, ${opacity})`;
                    networkCtx.lineWidth = 1.5;
                    networkCtx.moveTo(particles[i].x, particles[i].y);
                    networkCtx.lineTo(particles[j].x, particles[j].y);
                    networkCtx.stroke();
                    networkCtx.closePath();
                }
            }
        }
    }

    // Animation loop
    function animate() {
        // Clear canvases
        networkCtx.clearRect(0, 0, networkCanvas.width, networkCanvas.height);
        particleCtx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);

        // Network particles
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        drawConnections();

        // Energy particles
        energyParticles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        animationId = requestAnimationFrame(animate);
    }

    animate();

    // Cleanup on page unload
    window.addEventListener('beforeunload', () => {
        cancelAnimationFrame(animationId);
    });
}

// Header scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('header-scroll');
    } else {
        header.classList.remove('header-scroll');
    }
});

// Typing Animation
const typingText = document.getElementById('typingText');
if (typingText) {
    const roles = [
        'Cybersecurity Student',
        'Penetration Tester',
        'VAPT Specialist',
        'Bug Bounty Hunter',
        'Security Researcher'
    ];
    
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function typeRole() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            typingText.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingText.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentRole.length) {
            typingSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingSpeed = 500; // Pause before next role
        }
        
        setTimeout(typeRole, typingSpeed);
    }
    
    // Start typing animation after a brief delay
    setTimeout(typeRole, 1000);
}

// Header scroll effect (duplicate - remove old one)

// Mobile Navigation
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    hamburger.classList.toggle('active');
    document.body.classList.toggle('no-scroll'); // Prevent body scrolling when menu is open
});

// Close mobile menu when clicking on a link
navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        if (navLinks.classList.contains('nav-active')) {
            navLinks.classList.remove('nav-active');
            hamburger.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
    });
});

// Theme toggle functionality
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');

    // Toggle icons
    if (document.body.classList.contains('light-theme')) {
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
    } else {
        moonIcon.style.display = 'block';
        sunIcon.style.display = 'none';
    }

    // Save theme preference to localStorage
    const theme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
    localStorage.setItem('theme', theme);
});

// Load saved theme preference
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
    }

    // Add animations with delay for elements
    const animateElements = () => {
        const sections = document.querySelectorAll('section');

        sections.forEach(section => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('section-animate');
                    }
                });
            }, { threshold: 0.1 });

            observer.observe(section);
        });
    };

    animateElements();
});

// Handle contact form submission
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Simple form validation
        if (!name || !email || !subject || !message) {
            alert('Please fill out all fields');
            return;
        }

        // Here you would normally send the form data to a server
        // For this demo, we'll just show a success message

        const formData = {
            name,
            email,
            subject,
            message
        };

        console.log('Form submitted:', formData);

        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <p>Thank you for your message, ${name}! I'll get back to you soon.</p>
        `;

        // Replace form with success message
        contactForm.innerHTML = '';
        contactForm.appendChild(successMessage);
    });
}

// Add smooth scrolling to all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return; // Skip if href is just "#"

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust for header height
                behavior: 'smooth'
            });
        }
    });
});

// Add typing effect to the binary in hero section
const binaryElement = document.querySelector('.binary');
if (binaryElement) {
    const originalText = binaryElement.innerText;
    binaryElement.innerText = '';

    let i = 0;
    const typeWriter = () => {
        if (i < originalText.length) {
            binaryElement.innerText += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    };

    // Start typing effect when page loads
    setTimeout(typeWriter, 1000);
}
