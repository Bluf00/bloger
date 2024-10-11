document.addEventListener('DOMContentLoaded', function() {
  // Retrieve blog data from localStorage
  const blogData = JSON.parse(localStorage.getItem('blogData'));

  if (blogData) {
    document.getElementById('blog-title').textContent = blogData.title;
    document.getElementById('blog-author').textContent = blogData.username;
    document.getElementById('blog-content').textContent = blogData.content;
  } else {
    window.location.href = 'index.html';
  }

  // Theme toggle logic
  const themeToggle = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme') || 'light'; // Default to light

  // Set initial theme
  document.body.classList.add(currentTheme);

  // Toggle theme on button click
  themeToggle.addEventListener('click', function() {
    const newTheme = document.body.classList.contains('light') ? 'dark' : 'light';
    
    // Update body class
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(newTheme);
    
    // Save the user's preference
    localStorage.setItem('theme', newTheme);
  });
});
