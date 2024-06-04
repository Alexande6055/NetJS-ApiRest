import { createdRol } from './CRUD.js';

//const roleName =
const botonCrearRol = document.getElementById('crearRol');

// Agregar un event listener al botón
botonCrearRol.addEventListener('click', function () {
  // Obtener el valor del campo de entrada cuando se haga clic en el botón
  const roleName = document.getElementById('roleName').value;
  // Llamar a la función createdRol con el valor del campo de entrada
  createdRol(roleName);
});
