// Random background color changer (only on Home page)
const colorBtn = document.getElementById('color-btn');
if (colorBtn) {
    colorBtn.addEventListener('click', () => {
        const colors = ['#ff9ff3', '#feca57', '#ff6b6b', '#48dbfb', '#1dd1a1', '#5f27cd'];
        document.body.style.background = colors[Math.floor(Math.random() * colors.length)];
    });
}

// Simple form feedback on Contact page (no real submission)
const form = document.querySelector('form');
const message = document.getElementById('form-message');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        message.textContent = 'Thank you! Your message has been sent (this is just a test).';
        message.style.color = 'green';
        form.reset();
    });
}