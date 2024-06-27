document.addEventListener('DOMContentLoaded', () => {
  const apiUrl = 'http://localhost:8000/api/tipos-identificaciones';
  const form = document.getElementById('identification-type-form');
  const nameInput = document.getElementById('identification-type-name');
  const list = document.getElementById('identification-types-list');

  // Función para obtener y mostrar los tipos de identificación
  const fetchTypes = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      list.innerHTML = '';
      data.forEach((type) => {
        const li = document.createElement('li');
        li.textContent = type.nombre;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.onclick = () => deleteType(type.id_tipo_identidicacion);
        li.appendChild(deleteButton);
        list.appendChild(li);
      });
    } catch (error) {
      console.error('Error fetching identification types:', error);
    }
  };

  const createType = async (nombre) => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ nombre }),
      });

      if (response.ok) {
        fetchTypes();
        nameInput.value = '';
      } else {
        console.error(
          'Error creating identification type:',
          response.statusText,
        );
      }
    } catch (error) {
      console.error('Error creating identification type:', error);
    }
  };

  // Función para eliminar un tipo de identificación
  const deleteType = async (id) => {
    try {
      const response = await fetch(`${apiUrl}/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        fetchTypes();
      } else {
        console.error(
          'Error deleting identification type:',
          response.statusText,
        );
      }
    } catch (error) {
      console.error('Error deleting identification type:', error);
    }
  };

  // Manejador de envío del formulario
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const nombre = nameInput.value.trim();
    if (nombre) {
      createType(nombre);
    }
  });

  // Obtener y mostrar los tipos de identificación al cargar la página
  fetchTypes();
});
