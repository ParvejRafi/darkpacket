/**
 * CyberRafi Portfolio v5.0 — Professional JavaScript
 * Handles: navigation, scroll effects, active states, form, reveal animations
 */

// ==================== Elements ====================
const header      = document.getElementById('main-header');
const hamburger   = document.getElementById('hamburger');
const navLinks    = document.getElementById('nav-links');
const navItems    = document.querySelectorAll('.nav-links li');
const backToTop   = document.getElementById('back-to-top');
const contactForm = document.getElementById('contact-form');

// ==================== Mobile Menu ====================
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
});

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Close menu on outside click
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// ==================== Scroll Handler ====================
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(() => {
            handleScroll();
            ticking = false;
        });
        ticking = true;
    }
});

function handleScroll() {
    const scrollY = window.scrollY;

    // Sticky header
    if (scrollY > 40) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // Back to top visibility
    if (scrollY > 400) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }

    // Active nav link
    updateActiveNav();

    // Reveal animations
    revealElements();
}

// ==================== Smooth Scroll ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const offset = header.offsetHeight + 16;
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    });
});

// ==================== Active Nav ====================
function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - header.offsetHeight - 80;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        const link = item.querySelector('a');
        if (link && link.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
}

// ==================== Back To Top ====================
if (backToTop) {
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ==================== Scroll Reveal ====================
function revealElements() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top < windowHeight - 60) {
            el.classList.add('visible');
        }
    });
}

// Auto-add reveal class to section children
function initReveal() {
    const targets = document.querySelectorAll(
        '.project-card, .certification-card, .writeup-card, .skill-category, ' +
        '.timeline-item, .expertise-card, .contact-info-item, .stat-item'
    );
    targets.forEach((el, i) => {
        el.classList.add('reveal');
        el.style.transitionDelay = `${(i % 4) * 0.08}s`;
    });
    revealElements();
}

// ==================== Contact Form ====================
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name    = document.getElementById('name').value.trim();
        const email   = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields.', 'error');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }

        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalContent = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Sending...</span>';
        submitBtn.disabled = true;

        await new Promise(resolve => setTimeout(resolve, 1600));

        showNotification('Message sent! I\'ll get back to you soon. 🎉', 'success');
        contactForm.reset();
        submitBtn.innerHTML = originalContent;
        submitBtn.disabled = false;
    });
}

// ==================== Notification Toast ====================
function showNotification(message, type = 'success') {
    const existing = document.querySelector('.toast-notification');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.style.cssText = `
        position: fixed;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%) translateY(20px);
        background: ${type === 'success' ? 'linear-gradient(135deg, hsl(220,100%,65%), hsl(265,90%,70%))' : 'linear-gradient(135deg, hsl(0,80%,55%), hsl(20,90%,50%))'};
        color: #fff;
        padding: 0.85rem 2rem;
        border-radius: 50px;
        font-size: 0.9rem;
        font-weight: 600;
        z-index: 9999;
        box-shadow: 0 8px 32px rgba(0,0,0,0.3);
        transition: all 0.35s cubic-bezier(0.34,1.56,0.64,1);
        opacity: 0;
        pointer-events: none;
        font-family: 'Inter', sans-serif;
        white-space: nowrap;
    `;
    toast.textContent = message;
    document.body.appendChild(toast);

    requestAnimationFrame(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateX(-50%) translateY(0)';
    });

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(-50%) translateY(10px)';
        setTimeout(() => toast.remove(), 400);
    }, 3500);
}

// ==================== Initialize ====================
document.addEventListener('DOMContentLoaded', () => {
    initReveal();
    updateActiveNav();
    handleScroll();
    console.log('✨ CyberRafi Portfolio v5.0 loaded successfully!');
});
