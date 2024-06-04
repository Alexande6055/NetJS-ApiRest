document.addEventListener('DOMContentLoaded', function () {
  loadProducts();
  cargarCategoria();
});

function loadProducts() {
  const apiUrl = 'http://localhost:8000/api/productos';

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const productList = document.getElementById('productList');
      productList.innerHTML = '';

      data.forEach((product) => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.innerHTML = `
                      <img src="${product.imgUrl}" alt="${product.nombre}" class="product-image">
                      <span>${product.nombre} - ${product.precio} USD</span>
                      <span>
                          <button onclick="editProduct(${product.id_producto})">Editar</button>
                          <button onclick="deleteProduct(${product.id_producto})">Eliminar</button>
                      </span>
                  `;
        productList.appendChild(productItem);
      });
    })
    .catch((error) => console.error('Error al cargar los productos:', error));
}

function cargarCategoria() {
  fetch('http://localhost:8000/api/categoria')
    .then((response) => response.json())
    .then((data) => {
      // Obtener el select
      const categoriList = document.getElementById('productCategory');

      data.forEach((tipo) => {
        const option = document.createElement('option');
        option.value = tipo.id_categoria;
        option.textContent = tipo.nombre;
        categoriList.appendChild(option);
      });
    })
    .catch((error) => {
      console.error('Error al obtener tipos de identificación:', error);
    });
}
