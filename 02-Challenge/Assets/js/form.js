document.getElementById('blog-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form values
  const username = document.getElementById('username').value;
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;

  // Store data in localStorage
  const blogData = {
    username: username,
    title: title,
    content: content
  };
  localStorage.setItem('blogData', JSON.stringify(blogData));

  // Redirect to blog page
  window.location.href = 'blog.html';
});
