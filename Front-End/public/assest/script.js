document
  .getElementById('loginForm')
  .addEventListener('submit', async function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
      const usuario = {
        password: password,
        username: username,
      };

      const response = await fetch('http://localhost:8000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuario),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();

      //almacenar token en el localstore
      localStorage.setItem('authToken', data.token);

      console.log('Login successful', data);

      // Aquí puedes redirigir al usuario a otra página o hacer otra acción
      window.location.href = '/Front-End/src/pages/home.html'; // Cambia esto a la ruta que necesites
    } catch (error) {
      document.getElementById('error-message').textContent = error.message;
    }
  });

function logout() {
  // Eliminar token del localStorage al hacer logout
  localStorage.removeItem('authToken');

  // Redirigir al usuario a la página de login o a otra página deseada
  window.location.href = '/Front-End/src/pages/login.html';
}
