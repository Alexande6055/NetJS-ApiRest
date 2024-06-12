import { obtenerIdCarrito } from '../js/jwt.js';

const apiUrlCarrProduct = 'http://localhost:8000/api/carrito-producto';
const id_carrito = parseInt(obtenerIdCarrito());

let cart = []; // Definir cart aquí

async function agregarProducto(producto) {
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

async function cargarCarrito() {
  const id_carrito = parseInt(obtenerIdCarrito());
  if (!isNaN(id_carrito)) {
    try {
      const response = await fetch(
        `http://localhost:8000/api/carrito-producto/obtener/${id_carrito}`,
      );
      if (!response.ok) {
        throw new Error('Failed to fetch cart products');
      }

      const productos = await response.json();
      cart = productos.map((producto) => ({
        id: producto.producto.id_producto,
        nombre: producto.producto.nombre,
        cantidad: producto.cantidad,
        precio: producto.cantidad * producto.producto.precio,
      }));

      updateCart();
    } catch (error) {
      console.error(error.message);
    }
  }
}

function updateCart() {
  const cartCount = document.getElementById('cart-count');
  cartCount.textContent = cart.length;

  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';

  cart.forEach((item) => {
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';

    const precio = Number(item.precio);
    cartItem.innerHTML = `
      <span>${item.nombre}</span>
      <span>${item.cantidad}</span>
      <span>$${precio.toFixed(2)}</span>
    `;

    cartItems.appendChild(cartItem);
  });
}

async function eliminarProducto(nombreProducto) {}

export { agregarProducto, cargarCarrito, cart };
