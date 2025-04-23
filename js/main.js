// Dr. Tomar Website - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Bootstrap components
    initBootstrapComponents();
    
    // Handle the sticky header
    handleStickyHeader();
    
    // Initialize form validation
    initFormValidation();
    
    // Handle testimonial interactions
    handleTestimonials();
    
    // Initialize on-scroll animations
    animateOnScroll();
    
    // Initialize image sliders if any
    initImageSlider();
});

// Initialize Bootstrap components
function initBootstrapComponents() {
    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Initialize popovers
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });
}

// Handle sticky header behavior
function handleStickyHeader() {
    const header = document.querySelector('header');
    if (!header) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Initialize form validation
function initFormValidation() {
    const contactForm = document.querySelector('.contact-form');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Basic validation
        let valid = true;
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        
        // Clear previous error states
        clearErrors();
        
        // Validate name
        if (!nameInput.value.trim()) {
            setError(nameInput, 'Please enter your name');
            valid = false;
        }
        
        // Validate email
        if (!validateEmail(emailInput.value)) {
            setError(emailInput, 'Please enter a valid email address');
            valid = false;
        }
        
        // Validate message
        if (!messageInput.value.trim()) {
            setError(messageInput, 'Please enter your message');
            valid = false;
        }
        
        if (valid) {
            // In a real application, this would submit to a backend
            showSuccessMessage();
        }
    });
    
    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    
    function setError(input, message) {
        const formGroup = input.closest('.mb-3');
        formGroup.classList.add('has-error');
        
        const errorFeedback = document.createElement('div');
        errorFeedback.className = 'invalid-feedback';
        errorFeedback.textContent = message;
        formGroup.appendChild(errorFeedback);
        
        input.classList.add('is-invalid');
    }
    
    function clearErrors() {
        document.querySelectorAll('.invalid-feedback').forEach(el => el.remove());
        document.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
    }
    
    function showSuccessMessage() {
        // Hide the form
        contactForm.style.display = 'none';
        
        // Show success message
        const successMsg = document.createElement('div');
        successMsg.className = 'alert alert-success mt-3';
        successMsg.innerHTML = '<h4>Thank you for your message!</h4><p>We will get back to you as soon as possible.</p>';
        
        // Add reset button
        const resetBtn = document.createElement('button');
        resetBtn.className = 'btn btn-outline-primary mt-2';
        resetBtn.textContent = 'Send Another Message';
        resetBtn.addEventListener('click', function() {
            contactForm.reset();
            successMsg.remove();
            contactForm.style.display = 'block';
        });
        
        successMsg.appendChild(resetBtn);
        contactForm.parentNode.appendChild(successMsg);
    }
}

// Handle testimonial interactions
function handleTestimonials() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    testimonialCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('active');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('active');
        });
    });
}

// Animate elements when they come into view
function animateOnScroll() {
    // Only run if IntersectionObserver is supported
    if (!('IntersectionObserver' in window)) return;
    
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(el => {
        observer.observe(el);
    });
}

// Initialize a simple image slider if needed
function initImageSlider() {
    const slider = document.querySelector('.image-slider');
    if (!slider) return;
    
    const slides = slider.querySelectorAll('.slide');
    const prevBtn = slider.querySelector('.prev-slide');
    const nextBtn = slider.querySelector('.next-slide');
    let currentSlide = 0;
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }
    
    // Initialize
    showSlide(currentSlide);
    
    // Add event listeners
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    
    // Auto slide
    setInterval(nextSlide, 5000);
} 