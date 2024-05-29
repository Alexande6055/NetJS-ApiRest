document
  .getElementById('registrationForm')
  .addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('nombre').value;
    const direccion = document.getElementById('direccion').value;
    const identificacion = document.getElementById('identificacion').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const fecha_nacimiento = document.getElementById('fechaNacimiento').value;
    const tipoIdentificacion =
      document.getElementById('tipoIdentificacion').value.name;

    const requestBody = {
      nombre_completo: name,
      direccion: direccion,
      identificacion: identificacion,
      correo_electronico: email,
      fecha_nacimiento: fecha_nacimiento,
      celular: telefono,
      nombre_tipoIdentificacion: tipoIdentificacion,
    };
    console.log(requestBody);
    fetch('http://localhost:8000/api/personas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((data) => {
        document.getElementById('responseMessage').innerText =
          'Registro exitoso';
      })
      .catch((error) => {
        document.getElementById('responseMessage').innerText =
          'Error en el registro';
        console.error('Error:', error);
      });
  });
