// Function to check if an element is in the viewport
function isElementInView(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

// Function to handle fade-in effect
function fadeInOnScroll() {
    const elements = document.querySelectorAll('.fade-in');
    
    elements.forEach(element => {
        if (isElementInView(element)) {
            element.classList.add('visible');
        }
    });
}

// Listen for scroll events
window.addEventListener('scroll', fadeInOnScroll);

// Initialize the fade-in effect
fadeInOnScroll(); // In case the page is already partially scrolled