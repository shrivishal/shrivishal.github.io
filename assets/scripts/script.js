// Material 3 Expressive Portfolio
// All interactive and visual logic handled by CSS for motion and color
// Dark mode toggle logic

// Wait until the whole page is loaded before running our code
// This makes sure all elements are available to work with
// (like buttons and the sidebar)
document.addEventListener('DOMContentLoaded', function () {
  // --- DARK MODE TOGGLE LOGIC ---
  // Find the button that lets the user switch between light and dark mode
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    // When the button is clicked, switch the theme
    themeToggle.addEventListener('click', function () {
      // Check if the current theme is dark
      const isDark = document.body.getAttribute('data-theme') === 'dark';
      // If it's dark, set it to light; if it's light, set it to dark
      document.body.setAttribute('data-theme', isDark ? 'light' : 'dark');
      // Update icon
      const icon = themeToggle.querySelector('.material-symbols-rounded');
      if (icon) icon.textContent = isDark ? 'dark_mode' : 'light_mode';
    });
    // When the page loads, set the icon to match the current theme
    const isDark = document.body.getAttribute('data-theme') === 'dark';
    const icon = themeToggle.querySelector('.material-symbols-rounded');
    if (icon) icon.textContent = isDark ? 'light_mode' : 'dark_mode';
  }

  // --- SIDEBAR EXPAND/COLLAPSE LOGIC ---
  // Find the sidebar and the logo button at the top
  const sidebar = document.querySelector('.sidebar');
  const logoBtn = document.querySelector('.logo');
  if (sidebar && logoBtn) {
    // Make the logo look clickable and add a helpful tooltip
    logoBtn.style.cursor = 'pointer';
    logoBtn.title = 'Expand/collapse sidebar';
    // When the logo is clicked, expand or collapse the sidebar
    logoBtn.addEventListener('click', function () {
      // This adds or removes a special class on the sidebar
      // The CSS uses this class to make the sidebar wider or thinner
      sidebar.classList.toggle('sidebar-expanded');
    });
    // Keyboard accessibility
    logoBtn.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        sidebar.classList.toggle('sidebar-expanded');
        e.preventDefault();
      }
    });
  }
});

// This message appears in the browser's console to show the script loaded
console.log("Material 3 Expressive portfolio loaded!");

