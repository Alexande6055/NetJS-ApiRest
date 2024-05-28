// Cargar datos del backend al front end
document.addEventListener('DOMContentLoaded', async function () {
  try {
    const response = await fetch('http://localhost:8000/api/productos');
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }

    const products = await response.json();
    const productList = document.getElementById('product-list');

    products.forEach((product) => {
      // Asegurarse de que el precio sea un número y redondearlo a 2 decimales
      const precio = parseFloat(product.precio);
      const precioRedondeado = precio.toFixed(2);

      const productCard = document.createElement('div');
      productCard.className = 'product-card';
      productCard.innerHTML = `
                <img src="${product.imgUrl}" alt="${product.nombre}">
                <h3 id="precio_producto">${product.nombre}</h3>
                <p>${product.descripcion}</p>
                <p class="price">$${precioRedondeado}</p>
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
  } catch (error) {
    console.error(error.message);
  }
});



let cart = [];

async function addToCart(productId) {
  // Aquí se debería agregar la lógica para obtener detalles del producto desde una fuente confiable.
  // Para simplificar, se usa un objeto de ejemplo:
  const producto = await obtenerProducto(productId);
  console.log(producto.nombre);
  const product = {
    id: productId,
    nombre: producto.nombre,
    precio: producto.precio,
  };

  cart.push(product);
  updateCart();
}

function updateCart() {
  const cartCount = document.getElementById('cart-count');
  cartCount.textContent = cart.length;

  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';

  cart.forEach((item) => {
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';

    // Verificar si item.precio es un número antes de usar toFixed
    const precio = Number(item.precio);

    cartItem.innerHTML = `
            <span>${item.nombre}</span>
            <span>$${precio.toFixed(2)}</span>
        `;

    cartItems.appendChild(cartItem);
  });
}
//seleccionar boton car
//-----------------------
document.getElementById('cart-button').addEventListener('click', function () {
  ocultarMostrarCarrito();
});

function ocultarMostrarCarrito() {
  const botton_carrito = document.getElementById('cart');
  botton_carrito.classList.toggle('hidden');
  botton_carrito.classList.toggle('visible');
}
//cerrar barra car
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


