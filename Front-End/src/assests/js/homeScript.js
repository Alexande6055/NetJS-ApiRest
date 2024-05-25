document.addEventListener('DOMContentLoaded', async function() {
    try {
        const response = await fetch('http://localhost:8000/api/productos');
        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }

        const products = await response.json();
        const productList = document.getElementById('product-list');

        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';

            productCard.innerHTML = `
                <img src="${product.imgUrl}" alt="${product.nombre}">
                <h3>${product.nombre}</h3>
                <p>${product.descripcion}</p>
                <p class="price">$${product.precio}</p>
                <button data-id="${product.id_producto}">Comprar</button>
            `;

            productList.appendChild(productCard);
        });

        productList.addEventListener('click', function(event) {
            if (event.target.tagName === 'BUTTON') {
                const productId = event.target.getAttribute('data-id');
                addToCart(productId);
            }
        });

    } catch (error) {
        console.error(error.message);
    }
});

function addToCart(productId) {
    // Lógica para agregar el producto al carrito usando la API
    console.log(`Producto ${productId} agregado al carrito`);
}