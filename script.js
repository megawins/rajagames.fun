const termsLinks = document.querySelectorAll('a[href="#terms-section"]');
const privacyLinks = document.querySelectorAll('a[href="#privacy-section"]');
const termsSection = document.getElementById('terms-section');
const privacySection = document.getElementById('privacy-section');

// Function to toggle section visibility and scroll into view
function toggleSection(section) {
    section.classList.toggle('open'); // Toggle visibility
    setTimeout(() => {
        section.scrollIntoView({ behavior: 'smooth' }); // Scroll after toggling
    }, 200); // Wait for transition to begin
}

// Attach event listeners to all Terms links
termsLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        toggleSection(termsSection);
    });
});

// Attach event listeners to all Privacy links
privacyLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        toggleSection(privacySection);
    });
});