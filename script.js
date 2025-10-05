// Mobile menu
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn?.addEventListener('click', () => navLinks.classList.toggle('open'));

// Fake form submission demo
const fakeSubmit = document.getElementById('fakeSubmit');
const formStatus = document.getElementById('formStatus');
fakeSubmit?.addEventListener('click', () => {
  formStatus.textContent = 'Thanks! This demo form does not send emails.';
  setTimeout(() => formStatus.textContent = '', 3000);
});

// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();
