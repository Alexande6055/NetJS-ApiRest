/*document.addEventListener('DOMContentLoaded', () => {
  const buscarBtn = document.getElementById('buscarBtn');
  const buscarPersonaInput = document.getElementById('buscarPersona');
  const errorSpan = document.getElementById('error');
  const resultDiv = document.getElementById('result');

  const elementosPersona = {
    nombre: document.getElementById('nombre'),
    direccion: document.getElementById('direccion'),
    identificacion: document.getElementById('identificacion'),
    celular: document.getElementById('celular'),
    telefono: document.getElementById('telefono'),
    correo_electronico: document.getElementById('correo_electronico'),
    fecha_nacimiento: document.getElementById('fecha_nacimiento'),
    estado: document.getElementById('estado')
  };

  const mostrarPersona = (persona) => {
    elementosPersona.nombre.textContent = `Nombre: ${persona.nombre_completo}`;
    elementosPersona.direccion.textContent = `Dirección: ${persona.direccion}`;
    elementosPersona.identificacion.textContent = `Identificación: ${persona.identificacion}`;
    elementosPersona.celular.textContent = `Celular: ${persona.celular ?? 'N/A'}`;
    elementosPersona.telefono.textContent = `Teléfono: ${persona.telefono ?? 'N/A'}`;
    elementosPersona.correo_electronico.textContent = `Correo Electrónico: ${persona.correo_electronico}`;
    elementosPersona.fecha_nacimiento.textContent = `Fecha de Nacimiento: ${persona.fecha_nacimiento}`;
    elementosPersona.estado.textContent = `Estado: ${persona.estado}`;
    resultDiv.style.display = 'block';
  };

  const buscarPersona = () => {
    const identificacion = buscarPersonaInput.value.trim();
    if (!identificacion) {
      errorSpan.textContent = "Por favor, ingrese una identificación.";
      return;
    }

    fetch(`http://localhost:8000/api/personas?identificacion=${identificacion}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Asumimos que la API devuelve un array de personas, aunque sea una sola
        if (data && data.length > 0) {
          const personaEncontrada = data.find(persona => persona.identificacion === identificacion);
          if (personaEncontrada) {
            mostrarPersona(personaEncontrada);
            errorSpan.textContent = '';
          } else {
            errorSpan.textContent = 'No existe la persona con esa identificación.';
            resultDiv.style.display = 'none';
          }
        } else {
          errorSpan.textContent = 'No existe la persona con esa identificación.';
          resultDiv.style.display = 'none';
        }
      })
      .catch(error => {
        errorSpan.textContent = 'Hubo un error al buscar la persona. Inténtelo de nuevo más tarde.';
        resultDiv.style.display = 'none';
        console.error('Error:', error);
      });
  };

  buscarBtn.addEventListener('click', buscarPersona);
});
*/
document.addEventListener('DOMContentLoaded', (event) => {
  const token = localStorage.getItem('authToken');
  if (!token) {
    window.location.href = '/Front-End/public/index.html';
  }
});
