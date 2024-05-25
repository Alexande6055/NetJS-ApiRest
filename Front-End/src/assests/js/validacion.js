document.addEventListener('DOMContentLoaded', (event) => {
  const token = localStorage.getItem('authToken');
  if (!token) {
    window.location.href = '/Front-End/public/index.html';
  }
});
