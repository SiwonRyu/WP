document.addEventListener("DOMContentLoaded", function() {
    const largeToggleButton = document.getElementById('dark-mode-toggle-large');
    const smallToggleButton = document.getElementById('dark-mode-toggle-small');
    const body = document.body;
  
    // Check for saved user preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      body.classList.add(savedTheme);
    }
  
    // Function to toggle dark mode
    function toggleDarkMode() {
      body.classList.toggle('dark-mode');
  
      // Save user preference
      if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
      } else {
        localStorage.removeItem('theme');
      }
    }
  
    // Add event listeners to both buttons
    if (largeToggleButton) {
      largeToggleButton.addEventListener('click', toggleDarkMode);
    }
  
    if (smallToggleButton) {
      smallToggleButton.addEventListener('click', toggleDarkMode);
    }
  });  