document.addEventListener('DOMContentLoaded', () => {
      // === DARK MODE TOGGLE ===
      const themeToggle = document.getElementById('theme-toggle');
      const userPref = localStorage.getItem('theme');
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

      // === SMOOTH SCROLLING NAVIGATION ===
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            const headerHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight - 20;
            
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });

            // Close mobile menu after clicking
            if (menu.classList.contains('active')) {
              menu.classList.remove('active');
              hamburger.textContent = '☰';
            }
          }
        });
      });

      // === NAVBAR BACKGROUND ON SCROLL ===
      window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
          navbar.style.background = document.body.classList.contains('dark-theme') 
            ? 'rgba(15, 23, 42, 0.98)' 
            : 'rgba(131, 17, 57, 0.98)';
        } else {
          navbar.style.background = document.body.classList.contains('dark-theme') 
            ? 'rgba(15, 23, 42, 0.95)' 
            : 'rgba(131, 17, 57, 0.95)';
        }
      });
    });