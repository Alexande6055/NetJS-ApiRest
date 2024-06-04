import { obtenerIdCarrito } from '../js/jwt.js';

const apiUrl = 'http://localhost:8000/api/categoria/carrito-compra';
const apiUrlCarrProduct = 'http://localhost:8000/api/carrito-producto';
async function agregarProducto(producto) {
  const id_carrito = parseInt(obtenerIdCarrito());
  const id_producto = parseInt(producto);
  if (!isNaN(id_carrito)) {
    await fetch(apiUrlCarrProduct, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id_carrito_compra: id_carrito,
        id_producto: id_producto,
      }),
    });
  }
}
async function cargarCarrito(id_carrito) {
  await fetch();
}
async function eliminarProducto(nombreProducto) {}

export { agregarProducto };
