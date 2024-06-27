// Función para obtener el token desde localStorage
function getAuthToken() {
  return localStorage.getItem('authToken');
}

// Función para decodificar el token y obtener el id_carrito
function obtenerIdCarrito() {
  const token = getAuthToken();
  const array = token.split('.');
  const playload = JSON.parse(atob(array[1]));
  return playload?.id_carrito;
}

function obtenerIdUsuario() {
  const token = getAuthToken();
  const array = token.split('.');
  const payload = JSON.parse(atob(array[1]));

  return payload?.id;
}
export { obtenerIdCarrito, obtenerIdUsuario };
