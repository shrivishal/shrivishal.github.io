// Material 3 Expressive Portfolio
// All interactive and visual logic handled by CSS for motion and color
// Dark mode toggle logic

document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) return;
  themeToggle.addEventListener('click', function () {
    const isDark = document.body.getAttribute('data-theme') === 'dark';
    document.body.setAttribute('data-theme', isDark ? 'light' : 'dark');
    themeToggle.querySelector('.material-symbols-rounded').textContent = isDark ? 'dark_mode' : 'light_mode';
  });
});

console.log("Material 3 Expressive portfolio loaded!");
