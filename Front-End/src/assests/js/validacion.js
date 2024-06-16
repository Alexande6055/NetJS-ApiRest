document.addEventListener('DOMContentLoaded', async (event) => {
  const token = localStorage.getItem('authToken');
  if (!token) {
    window.location.href = '/Front-End/public/index.html';
    return;
  }

  const apiURL = 'http://localhost:8000/api/auth/verificacion';
  try {
    const response = await fetch(apiURL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    const isValid = await response.json();

    if (!isValid) {
      window.location.href = '/Front-End/public/index.html';
    }
  } catch (error) {
    console.error('Error verificando el token:', error);
    window.location.href = '/Front-End/public/index.html';
  }
});
