import { loadRoles } from './datos.js';

async function createdRol(nombre1) {
  alert(nombre1);
  const rol = await fetch('http://localhost:8000/api/roles', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ nombre: nombre1 }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('error de conexion de Red');
      }
    })
    .then(() => {
      alert('Rol agregado exitosamente.');
      document.getElementById('roleName').value = ''; // Limpiar el campo después de agregar el rol
      loadRoles(); // Recargar la lista de roles después de la adición
    });
}

async function actualizarRol(id, newNombre) {
  await function updateRole(id, newNombre) {
    const apiUrl = 'http://localhost:8000/api/roles/' + id;
    fetch(apiUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: newName }),
    })
      .then((response) => {
        if (!response.ok) {
          return false;
          throw new Error('Network response was not ok');
        }
        return true;
      })
      .then(() => {
        alert('Rol actualizado exitosamente.');
        loadRoles(); // Recargar la lista de roles después de la actualización
      })
      .catch((error) => {
        console.error('Error al actualizar el rol:', error);
        alert('Error al actualizar el rol.');
      });
  };
}
export { createdRol };
