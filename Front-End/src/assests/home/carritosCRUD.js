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
var car_produc;
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

      const data = await response.json();

      cart = data.carritoProductos.map((item) => ({
        id_c_p: item.id_carrito_producto,
        id: item.id_producto.id_producto,
        nombre: item.id_producto.nombre,
        cantidad: item.cantidad,
        total: item.id_producto.precio * item.cantidad,
      }));

      updateCart();
    } catch (error) {
      console.error('Error fetching cart products:', error.message);
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
    const precio = Number(item.total);

    const nombreElement = document.createElement('span');
    nombreElement.textContent = `${item.nombre}`;

    const cantidadElement = document.createElement('span');
    cantidadElement.textContent = `${item.cantidad}`;

    const precioElement = document.createElement('span');
    precioElement.textContent = `$${precio.toFixed(2)}`;

    const restarLink = document.createElement('a');
    restarLink.textContent = '____';
    restarLink.href = '#'; // Puedes usar "#" o "javascript:void(0)" como URL
    restarLink.addEventListener('click', async (event) => {
      event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
      await eliminarProducto(parseInt(item.id_c_p));
      cargarCarrito();
    });

    cartItem.appendChild(nombreElement);
    cartItem.appendChild(cantidadElement);
    cartItem.appendChild(precioElement);
    cartItem.appendChild(restarLink);

    cartItems.appendChild(cartItem);
  });
}
async function eliminarProducto(id_carrito_producto) {
  try {
    const response = await fetch(
      `http://localhost:8000/api/carrito-producto/restar`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id_carrito_producto: parseInt(id_carrito_producto),
        }),
      },
    );

    if (!response.ok) {
      throw new Error('Failed to remove product from cart');
    }

    // Actualizar el carrito después de eliminar el producto
    cargarCarrito();
  } catch (error) {
    console.error('Error removing product from cart:', error.message);
  }
}

async function generarDetalleFactura() {
  const idsProductos = cart.map((item) => item.id);
  const cantidades = cart.map((item) => item.cantidad);
  const requestBody = [];

  for (let i = 0; i < idsProductos.length; i++) {
    requestBody.push({
      id_producto: idsProductos[i],
      cantidad: cantidades[i],
    });
  }
  console.log(requestBody);

  alert(requestBody);
  try {
    const response = await fetch('http://localhost:8000/api/detalle-facturas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        requestBody,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to create invoice details');
    }

    // Lógica adicional después de crear el detalle de la factura, como redireccionar o mostrar un mensaje de éxito
  } catch (error) {
    console.error('Error creating invoice details:', error.message);
  }
}

// Función para proceder al pago
function procederAlPago() {
  // Aquí podrías implementar una ventana modal o una página de pago simulada
  // Después de que el pago sea exitoso, llamar a generarDetalleFactura()
  generarDetalleFactura();
}

// Evento para proceder al pago
const checkoutButton = document.getElementById('checkout-button');
checkoutButton.addEventListener('click', async (event) => {
  event.preventDefault();

  // Llama a la función procederAlPago para manejar el pago
  procederAlPago();
});

export { agregarProducto, cargarCarrito, cart };
