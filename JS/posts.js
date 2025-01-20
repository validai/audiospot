// posts.js: Handles retrieving and rendering posts from localStorage

// Select posts container
const postsContainer = document.getElementById('posts-container');

// Function to render posts
function renderPosts() {
  // Clear current posts
  postsContainer.innerHTML = '';

  // Retrieve posts from localStorage
  const posts = JSON.parse(localStorage.getItem('posts')) || [];

  // Render each post
  posts.forEach((post) => {
    const postCard = document.createElement('div');
    postCard.className = 'post-card';

    postCard.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.content}</p>
      <span>Posted by: ${post.username}</span>
      <small>${new Date(post.timestamp).toLocaleString()}</small>
    `;

    postsContainer.appendChild(postCard);
  });
}

// Render posts on page load
document.addEventListener('DOMContentLoaded', renderPosts);
