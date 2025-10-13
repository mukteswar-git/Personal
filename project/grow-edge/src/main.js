import './style.css'

console.log('Vite + Tailwind project running!');

// Select elements
const menuBtn = document.querySelector('#menu-btn');
const menu = document.querySelector('#menu');
const menuIcon = document.querySelector('#menu-icon');

// Toggle visibility
menuBtn.addEventListener('click', () => {
  menu.classList.toggle('hidden');

  // Change icon
  if (menu.classList.contains('hidden')) {
    menuIcon.src = '/src/assets/images/menu.png' // Hamburger
  } else {
    menuIcon.src = '/src/assets/images/close.png' // Close
  }

  // Update aria-expanded for accessibility
  menuBtn.setAttribute('aria-expanded', !menu.classList.contains('hidden'));
});

