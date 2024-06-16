import { cargarCarrito } from './carritosCRUD.js';
import { agregarProducto } from './carritosCRUD.js';

document.addEventListener('DOMContentLoaded', async function () {
  try {
    const response = await fetch('http://localhost:8000/api/productos');
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }

    const products = await response.json();
    const productList = document.getElementById('product-list');

    products.forEach((product) => {
      const precio = parseFloat(product.precio).toFixed(2);

      const productCard = document.createElement('div');
      productCard.className = 'product-card';
      productCard.innerHTML = `
                <img src="${product.imgUrl}" alt="${product.nombre}">
                <h3 id="precio_producto">${product.nombre}</h3>
                <p>${product.descripcion}</p>
                <p class="price">$${precio}</p>
                <button data-id="${product.id_producto}">Comprar</button>
            `;

      productList.appendChild(productCard);
    });

    productList.addEventListener('click', function (event) {
      if (event.target.tagName === 'BUTTON') {
        const productId = event.target.getAttribute('data-id');
        addToCart(productId);
      }
    });

    cargarCarrito();
  } catch (error) {
    console.error(error.message);
  }
});

async function addToCart(productId) {
  agregarProducto(parseInt(productId));
  cargarCarrito();
}

document.getElementById('cart-button').addEventListener('click', function () {
  ocultarMostrarCarrito();
});

function ocultarMostrarCarrito() {
  const botton_carrito = document.getElementById('cart');
  botton_carrito.classList.toggle('hidden');
  botton_carrito.classList.toggle('visible');
}

document
  .getElementById('cerrar_carrito')
  .addEventListener('click', function () {
    ocultarMostrarCarrito();
  });

async function obtenerProducto(id_producto) {
  try {
    const response = await fetch(
      'http://localhost:8000/api/productos/' + id_producto,
    );
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const product = await response.json();
    return product;
  } catch (error) {
    console.error(error.message);
  }
}
