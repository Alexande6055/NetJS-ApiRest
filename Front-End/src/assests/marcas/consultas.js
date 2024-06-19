const token = localStorage.getItem('authToken');

document.addEventListener('DOMContentLoaded', () => {
  const apiUrl = 'http://localhost:8000/api/marca'; // URL de la API
  const form = document.getElementById('brand-form');
  const nameInput = document.getElementById('brand-name');
  const descriptionInput = document.getElementById('brand-description');
  const list = document.getElementById('brands-list');

  // Obtener el token almacenado
  const token = localStorage.getItem('authToken');

  // Función para obtener y mostrar las marcas
  const fetchBrands = async () => {
    try {
      const response = await fetch(apiUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      list.innerHTML = '';
      data.forEach((brand) => {
        const li = document.createElement('li');
        li.textContent = `${brand.nombre} - ${brand.descripcion}`;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.onclick = () => deleteBrand(brand.id_marca);
        li.appendChild(deleteButton);
        list.appendChild(li);
      });
    } catch (error) {
      console.error('Error fetching brands:', error);
    }
  };

  // Función para crear una nueva marca
  const createBrand = async (nombre, descripcion) => {
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ nombre, descripcion }),
      });
      if (response.ok) {
        fetchBrands();
        nameInput.value = '';
        descriptionInput.value = '';
      } else {
        console.error('Error creating brand:', response.statusText);
      }
    } catch (error) {
      console.error('Error creating brand:', error);
    }
  };

  // Función para eliminar una marca
  const deleteBrand = async (id) => {
    try {
      const response = await fetch(`${apiUrl}/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        fetchBrands();
      } else {
        console.error('Error deleting brand:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting brand:', error);
    }
  };

  // Manejador de envío del formulario
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const nombre = nameInput.value.trim();
    const descripcion = descriptionInput.value.trim();
    if (nombre && descripcion) {
      createBrand(nombre, descripcion);
    }
  });

  // Obtener y mostrar las marcas al cargar la página
  fetchBrands();
});
