// Función para actualizar un rol
function updateRole(roleId, newName) {
  const apiUrl = 'http://localhost:8000/api/roles/' + roleId;
  fetch(apiUrl, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: newName }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(() => {
      alert('Rol actualizado exitosamente.');
      loadRoles(); // Recargar la lista de roles después de la actualización
    })
    .catch((error) => {
      console.error('Error al actualizar el rol:', error);
      alert('Error al actualizar el rol.');
    });
}

// Función para mostrar el prompt y actualizar el rol
function editRole(roleId) {
  const newName = prompt('Ingrese el nuevo nombre para el rol:');
  if (newName !== null && newName.trim() !== '') {
    updateRole(roleId, newName.trim());
  }
}

// Escuchar el evento submit del formulario para agregar un rol
document
  .getElementById('roleForm')
  .addEventListener('submit', function (event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

    var roleName = document.getElementById('roleName').value;

    fetch('http://localhost:8000/api/roles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: roleName }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(() => {
        alert('Rol agregado exitosamente.');
        document.getElementById('roleName').value = ''; // Limpiar el campo después de agregar el rol
        loadRoles(); // Recargar la lista de roles después de la adición
      })
      .catch(() => {
        alert('Error al agregar el rol.');
      });
  });
