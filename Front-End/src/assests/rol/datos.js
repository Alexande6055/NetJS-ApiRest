document.addEventListener('DOMContentLoaded', function () {
  loadRoles();
});

function loadRoles() {
  const apiUrl = 'http://localhost:8000/api/roles';

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      const rolesList = document.getElementById('rolesList');
      rolesList.innerHTML = '';

      data.forEach((role) => {
        const roleItem = document.createElement('div');
        roleItem.className = 'role-item';
        roleItem.innerHTML = `
                        <span>${role.nombre}</span>
                        <span>
                            <button onclick="editRole(${role.id})">Editar</button>
                            <button onclick="deleteRole(${role.id})">Eliminar</button>
                        </span>
                    `;
        rolesList.appendChild(roleItem);
      });
    })
    .catch((error) => console.error('Error al cargar los roles:', error));
}

export { loadRoles };
