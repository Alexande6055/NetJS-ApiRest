import { crearUsuario } from './crearUsuario.js';
const apiUrl = 'http://localhost:8000/api/personas';

document
  .getElementById('registrationForm')
  .addEventListener('submit', async function (e) {
    e.preventDefault();

    const name = document.getElementById('nombre').value;
    const direccion = document.getElementById('direccion').value;
    const identificacion = document.getElementById('identificacion').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const fecha_nacimiento = document.getElementById('fechaNacimiento').value;
    const tipoIdentificacionSelect =
      document.getElementById('tipoIdentificacion');
    const tipoIdentificacionNombre =
      tipoIdentificacionSelect.options[tipoIdentificacionSelect.selectedIndex]
        .text; // Nombre de la opción seleccionada
    const password = document.getElementById('password').value;
    const id_usuario = await crearUsuario(email, password);
    if (!isNaN(id_usuario)) {
      const numero = parseInt(id_usuario);
      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nombre_completo: name + '',
            direccion: direccion + '',
            identificacion: identificacion + '',
            correo_electronico: email + '',
            fecha_nacimiento: fecha_nacimiento + '',
            celular: telefono + '',
            nombre_tipoIdentificacion: tipoIdentificacionNombre + '',
            id_usuario: numero,
          }),
        });
        console.log('persona guardado exitosamente');
        window.location.href = '/Front-End/public/index.html';
      } catch (error) {
        console.error('Error al guardar la persona:', error);
        alert('Error al guardar la persona');
      }
    } else {
      alert('ERROR ' + id_usuario);
    }
  });
