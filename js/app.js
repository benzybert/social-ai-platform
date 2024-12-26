document.addEventListener('DOMContentLoaded', () => {
  // Toggle mobile menu
  const menuButton = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuButton) {
    menuButton.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Form validation
  const loginForm = document.querySelector('#login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // Add login logic here
    });
  }

  // Content type selector
  const contentTypeSelect = document.querySelector('#content-type');
  if (contentTypeSelect) {
    contentTypeSelect.addEventListener('change', () => {
      // Update UI based on content type
    });
  }
});