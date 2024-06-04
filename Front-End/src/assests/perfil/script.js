document.addEventListener('DOMContentLoaded', function () {
  fetchUserProfile();
});

function fetchUserProfile() {
  // URL de ejemplo, reemplazar con la URL real de la API
  const apiUrl = 'https://api.ejemplo.com/usuario';

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById('name').value = data.name;
      document.getElementById('direccion').value = data.direccion;
      document.getElementById('identificacion').value = data.identificacion;
      document.getElementById('email').value = data.email;
      document.getElementById('fecha_nacimiento').value = data.fecha_nacimiento;
      document.getElementById('telefono').value = data.telefono;
    })
    .catch((error) =>
      console.error('Error al obtener los datos del usuario:', error),
    );
}

function updateProfile() {
  const apiUrl = 'https://api.ejemplo.com/usuario';

  const userProfile = {
    name: document.getElementById('name').value,
    direccion: document.getElementById('direccion').value,
    identificacion: document.getElementById('identificacion').value,
    fecha_nacimiento: document.getElementById('fecha_nacimiento').value,
    telefono: document.getElementById('telefono').value,
  };

  fetch(apiUrl, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userProfile),
  })
    .then((response) => response.json())
    .then((data) => {
      alert('Perfil actualizado exitosamente');
    })
    .catch((error) => console.error('Error al actualizar el perfil:', error));
}
