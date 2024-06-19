document.addEventListener('DOMContentLoaded', () => {
  const usernameSelect = document.getElementById('username');
  const nombreSpan = document.getElementById('nombre');
  const emailSpan = document.getElementById('email');
  const telefonoSpan = document.getElementById('telefono');
  const rolesList = document.getElementById('rolesList');
  const rolesForm = document.getElementById('rolesForm');

  // Fetch personas from the API
  async function fetchPersonas() {
    const response = await fetch('http://localhost:8000/api/personas');
    return response.json();
  }

  // Fetch roles from the API
  async function fetchRoles() {
    const response = await fetch('http://localhost:8000/api/roles');
    return response.json();
  }

  // Fetch roles for a specific persona from the API
  async function fetchUserRoles(userId) {
    const response = await fetch(
      `http://localhost:8000/api/usuarios-roles/obtenerroles/${userId}`,
    );
    return response.json();
  }

  // Initialize data
  async function initialize() {
    const personas = await fetchPersonas();
    const roles = await fetchRoles();

    // Populate personas dropdown
    personas.forEach((persona) => {
      const option = document.createElement('option');
      option.value = persona.id_persona;
      option.textContent = persona.nombre_completo;
      usernameSelect.appendChild(option);
    });

    // On persona selection, fetch and display persona details and roles
    usernameSelect.addEventListener('change', async (event) => {
      const userId = parseInt(event.target.value, 10);
      const persona = personas.find((p) => p.id_persona === userId);
      const userRoles = await fetchUserRoles(userId);

      if (persona) {
        nombreSpan.textContent = persona.nombre_completo;
        emailSpan.textContent = persona.correo_electronico;
        telefonoSpan.textContent = persona.celular || persona.telefono;

        // Populate roles checkboxes
        rolesList.innerHTML = '';
        roles.forEach((role) => {
          const checkbox = document.createElement('input');
          checkbox.type = 'checkbox';
          checkbox.id = `role_${role.id_rol}`;
          checkbox.name = 'roles';
          checkbox.value = role.id_rol;
          if (
            userRoles.some((userRole) => userRole.id_rol.id_rol === role.id_rol)
          ) {
            checkbox.checked = true;
          }

          const label = document.createElement('label');
          label.htmlFor = `role_${role.id_rol}`;
          label.textContent = role.nombre;

          const div = document.createElement('div');
          div.appendChild(checkbox);
          div.appendChild(label);
          rolesList.appendChild(div);
        });
      }
    });

    // Update roles for the selected persona
    rolesForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const userId = parseInt(usernameSelect.value, 10);
      const selectedRoles = Array.from(
        document.querySelectorAll('input[name="roles"]:checked'),
      ).map((input) => parseInt(input.value, 10));

      await fetch(
        `http://localhost:8000/api/usuarios-roles/actualizarroles/${userId}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ roleIds: selectedRoles }),
        },
      );

      alert('Roles actualizados exitosamente!');
    });
  }

  initialize();
});
