// app.js: Handles form validation and saving posts to localStorage

// Select form elements
const form = document.getElementById('blog-form');
const usernameInput = document.getElementById('username');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');

// Add event listener to form
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent default form submission

  // Validate inputs
  if (usernameInput.value.trim() === '' || titleInput.value.trim() === '' || contentInput.value.trim() === '') {
    alert('Please fill out all fields.');
    return;
  }

  // Create post object
  const post = {
    username: usernameInput.value.trim(),
    title: titleInput.value.trim(),
    content: contentInput.value.trim(),
    timestamp: new Date().toISOString(),
  };

  // Save post to localStorage
  let posts = JSON.parse(localStorage.getItem('posts')) || [];
  posts.push(post);
  localStorage.setItem('posts', JSON.stringify(posts));

  // Clear form inputs
  usernameInput.value = '';
  titleInput.value = '';
  contentInput.value = '';

  alert('Post saved!');
});
