// Mobile navigation toggle
document.querySelector('.mobile-toggle').addEventListener('click', function () {
    document.querySelector('nav').classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });

            // Close mobile nav if open
            document.querySelector('nav').classList.remove('active');
        }
    });
});

// Animate elements on scroll
function animateOnScroll() {
    const productCards = document.querySelectorAll('.product-card');
    const categoryCards = document.querySelectorAll('.category-card');
    const teamMembers = document.querySelectorAll('.team-member');

    productCards.forEach((card, index) => {
        if (isElementInViewport(card)) {
            setTimeout(() => {
                card.classList.add('animate');
            }, index * 100);
        }
    });

    categoryCards.forEach((card, index) => {
        if (isElementInViewport(card)) {
            setTimeout(() => {
                card.classList.add('animate');
            }, index * 100);
        }
    });

    teamMembers.forEach((member, index) => {
        if (isElementInViewport(member)) {
            setTimeout(() => {
                member.style.opacity = '1';
                member.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.9
    );
}

// Initial animation check
window.addEventListener('load', function () {
    animateOnScroll();

    // Initialize team member animations
    document.querySelectorAll('.team-member').forEach(member => {
        member.style.opacity = '0';
        member.style.transform = 'translateY(20px)';
        member.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
});

// Check on scroll
window.addEventListener('scroll', animateOnScroll);

// Countdown timer
function updateCountdown() {
    const days = document.querySelector('.countdown-item:nth-child(1) .countdown-number');
    const hours = document.querySelector('.countdown-item:nth-child(2) .countdown-number');
    const minutes = document.querySelector('.countdown-item:nth-child(3) .countdown-number');
    const seconds = document.querySelector('.countdown-item:nth-child(4) .countdown-number');

    let sec = parseInt(seconds.textContent);
    let min = parseInt(minutes.textContent);
    let hr = parseInt(hours.textContent);
    let d = parseInt(days.textContent);

    sec--;

    if (sec < 0) {
        sec = 59;
        min--;

        if (min < 0) {
            min = 59;
            hr--;

            if (hr < 0) {
                hr = 23;
                d--;

                if (d < 0) {
                    d = 0;
                    hr = 0;
                    min = 0;
                    sec = 0;
                }
            }
        }
    }

    seconds.textContent = sec.toString().padStart(2, '0');
    minutes.textContent = min.toString().padStart(2, '0');
    hours.textContent = hr.toString().padStart(2, '0');
    days.textContent = d.toString().padStart(2, '0');
}

setInterval(updateCountdown, 1000);

// Simple Cart Functionality
const addToCartButtons = document.querySelectorAll('.product-card .btn');
const cartCount = document.querySelector('.cart-count');
let count = 3;

addToCartButtons.forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        count++;
        cartCount.textContent = count;

        // Animation for feedback
        const originalText = this.textContent;
        this.textContent = "Added!";
        this.style.background = "var(--success)";

        setTimeout(() => {
            this.textContent = originalText;
            this.style.background = "";
        }, 1500);
    });
});

// Newsletter Form Validation
const newsletterForm = document.querySelector('.newsletter-form');
newsletterForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = this.querySelector('input').value;

    if (!email || !email.includes('@')) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Thank you for subscribing to our newsletter!');
    this.querySelector('input').value = '';
});

// Contact Form Validation
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !subject || !message) {
        alert('Please fill in all fields.');
        return;
    }

    if (!email.includes('@')) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});

// Pulse animation for deals section buttons
const dealButtons = document.querySelectorAll('.deals .btn');
setInterval(() => {
    dealButtons.forEach(button => {
        button.classList.toggle('animate__pulse');
    });
}, 2000);