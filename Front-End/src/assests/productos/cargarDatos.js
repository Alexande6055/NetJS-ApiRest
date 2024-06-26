document.addEventListener('DOMContentLoaded', function () {
  loadProducts();
  loadCategories();
  loadBrands();
  loadPromotions();
  loadIva();
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
            <button onclick="editProduct(${product.id})">Editar</button>
            <button onclick="deleteProduct(${product.id})">Eliminar</button>
          </span>
        `;
        productList.appendChild(productItem);
      });
    })
    .catch((error) => console.error('Error al cargar los productos:', error));
}

function loadCategories() {
  const apiUrl = 'http://localhost:8000/api/categorias';

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const categorySelect = document.getElementById('productCategory');
      categorySelect.innerHTML = '<option value="">Ninguno</option>'; // Opción por defecto

      data.forEach((category) => {
        const option = document.createElement('option');
        option.value = category.nombre;
        option.textContent = category.nombre;
        categorySelect.appendChild(option);
      });
    })
    .catch((error) => console.error('Error al cargar las categorías:', error));
}

function loadBrands() {
  const apiUrl = 'http://localhost:8000/api/marca';

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const brandSelect = document.getElementById('productBrand');
      brandSelect.innerHTML = '<option value="">Ninguno</option>'; // Opción por defecto

      data.forEach((brand) => {
        const option = document.createElement('option');
        option.value = brand.nombre;
        option.textContent = brand.nombre;
        brandSelect.appendChild(option);
      });
    })
    .catch((error) => console.error('Error al cargar las marcas:', error));
}

function loadPromotions() {
  const apiUrl = 'http://localhost:8000/api/promocion';

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const promotionSelect = document.getElementById('promotionDescription');
      promotionSelect.innerHTML = '<option value="">Ninguno</option>'; // Opción por defecto

      data.forEach((promotion) => {
        const option = document.createElement('option');
        option.value = promotion.id;
        option.textContent = promotion.descripcion;
        promotionSelect.appendChild(option);
      });
    })
    .catch((error) => console.error('Error al cargar las promociones:', error));
}

function loadIva() {
  const apiUrl = 'http://localhost:8000/api/iva';

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const ivaSelect = document.getElementById('productIva');
      ivaSelect.innerHTML = '<option value="">Ninguno</option>'; // Opción por defecto

      data.forEach((iva) => {
        const option = document.createElement('option');
        option.value = iva.valor;
        option.textContent = iva.descripcion;
        ivaSelect.appendChild(option);
      });
    })
    .catch((error) => console.error('Error al cargar el IVA:', error));
}
