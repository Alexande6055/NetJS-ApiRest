// Hacer una solicitud a la API para obtener los tipos de identificación
fetch('http://localhost:8000/api/tipos-identificaciones')
  .then((response) => response.json())
  .then((data) => {
    // Obtener el select
    const selectTipoIdentificacion =
      document.getElementById('tipoIdentificacion');

    data.forEach((tipo) => {
      const option = document.createElement('option');
      option.value = tipo.id;
      option.textContent = tipo.nombre;
      selectTipoIdentificacion.appendChild(option);
    });
  })
  .catch((error) => {
    console.error('Error al obtener tipos de identificación:', error);
  });
