// script.js
document.addEventListener('DOMContentLoaded', () => {
  // === DARK MODE TOGGLE ===
  const themeToggle = document.getElementById('theme-toggle');
  const userPref = localStorage.getItem('theme'); // "dark" or "light"
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Apply saved or system preference
  if (userPref === 'dark' || (!userPref && prefersDark)) {
    document.body.classList.add('dark-theme');
    themeToggle.textContent = '☀️';
  } else {
    document.body.classList.remove('dark-theme');
    themeToggle.textContent = '🌙';
  }

  // Toggle on click
  themeToggle.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
  });

  // === HAMBURGER MENU TOGGLE ===
  const hamburger = document.getElementById('hamburger');
  const menu = document.querySelector('.menu');

  hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
    hamburger.textContent = menu.classList.contains('active') ? '✖' : '☰';
  });
});
