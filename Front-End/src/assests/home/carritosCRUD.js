import { obtenerIdCarrito, obtenerIdUsuario } from '../js/jwt.js';
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

    const total = document.createElement('span');
    total.textContent = `$${precio * item.cantidad}`;

    const restarLink = document.createElement('a');
    restarLink.textContent = '**';
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

async function generarDetalleFactura(id_factura1) {
  const idsProductos = cart.map((item) => item.id);
  const cantidades = cart.map((item) => item.cantidad);

  for (let i = 0; i < idsProductos.length; i++) {
    const requestBody = {
      id_producto: idsProductos[i],
      cantidad: cantidades[i],
      id_factura: id_factura1,
    };

    try {
      const response = await fetch(
        'http://localhost:8000/api/detalle-facturas',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestBody), // No envolvemos requestBody aquí
        },
      );

      if (!response.ok) {
        throw new Error('Failed to create invoice details');
      }
    } catch (error) {
      console.error('Error creating invoice details:', error.message);
    }
  }
}

async function crearFactura() {
  const tipoPagoSelect = document.getElementById('tipoPago');
  const tipoPagoSeleccionado = parseInt(tipoPagoSelect.value);
  const idUsuario = parseInt(obtenerIdUsuario());
  var totalFactura = 0;
  cart.forEach((item) => {
    totalFactura += item.total * item.cantidad;
  });

  const requestBod = {
    persona: idUsuario,
    tipoPago: tipoPagoSeleccionado,
    totalFactura: totalFactura,
  };
  console.log(requestBod);
  try {
    const response = await fetch('http://localhost:8000/api/facturas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBod),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Factura creada:', data);
    return data;
  } catch (error) {
    console.error('Error al crear la factura:', error);
    throw error;
  }
}

// Función para proceder al pago
async function procederAlPago() {
  const id_factura = await crearFactura();

  console.log(id_factura.id_factura);
  generarDetalleFactura(id_factura.id_factura);
}

const checkoutButton = document.getElementById('checkout-button');
checkoutButton.addEventListener('click', async (event) => {
  event.preventDefault();
  procederAlPago();
});

const tipoPagoSelect = document.getElementById('tipoPago');

async function cargarTipoPago() {
  const id_carrito = parseInt(obtenerIdCarrito());
  if (!isNaN(id_carrito)) {
    try {
      const response = await fetch(`http://localhost:8000/api/tipo-pagos`);
      if (!response.ok) {
        throw new Error('Failed to fetch payment types');
      }

      const data = await response.json();

      // Limpiar las opciones anteriores
      tipoPagoSelect.innerHTML = '';
      data.forEach((tipoPago) => {
        const option = document.createElement('option');
        option.value = tipoPago.id_pago;
        option.textContent = tipoPago.nombrePago;
        tipoPagoSelect.appendChild(option);
      });
    } catch (error) {
      console.error('Error fetching payment types:', error.message);
    }
  }
}

// Llamar a la función para cargar los tipos de pago cuando se cargue la página
document.addEventListener('DOMContentLoaded', cargarTipoPago);
export { agregarProducto, cargarCarrito, cart };
