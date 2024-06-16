document.addEventListener('DOMContentLoaded', function () {
  loadProducts();
});

function loadProducts() {
  const apiUrl = 'http://localhost:8000/api/productos';

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const productList = document.getElementById('productList');
      //productList.innerHTML = '';

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
document.addEventListener('DOMContentLoaded', function () {
  loadCategories();
});

//cargar categorias
function loadCategories() {
  const apiUrl = 'http://localhost:8000/api/categorias';

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const categoryList = document.getElementById('productCategory');
      categoryList.innerHTML = '';

      data.forEach((categoria) => {
        const option = document.createElement('option');
        option.value = categoria.id_categoria;
        option.textContent = categoria.nombre;
        categoryList.appendChild(option);
      });
    })
    .catch((error) => {
      console.error('Error al cargar las categorías:', error);
    });
}

//cargar marcas
document.addEventListener('DOMContentLoaded', function () {
  loadCategories();
  loadBrands();
});

async function loadBrands() {
  const apiUrl = 'http://localhost:8000/api/marca';

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    const brandSelect = document.getElementById('productBrand');
    brandSelect.innerHTML = '';

    data.forEach((marca) => {
      const option = document.createElement('option');
      option.value = marca.id_marca; // Asegúrate de ajustar esto según la estructura de tu API
      option.textContent = marca.nombre;
      brandSelect.appendChild(option);
    });
  } catch (error) {
    console.error('Error al cargar las marcas:', error);
  }
}

//cargar promociones
document.addEventListener('DOMContentLoaded', function () {
  loadCategories();
  loadBrands();
  loadPromotions();
});

async function loadPromotions() {
  const apiUrl = 'http://localhost:8000/api/promocion';

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    const promotionSelect = document.getElementById('promotionDescription');
    promotionSelect.innerHTML = '';

    data.forEach((promocion) => {
      const option = document.createElement('option');
      option.value = promocion.id_promocion; // Ajusta esto según la estructura de tu API
      option.textContent =
        promocion.descripcion + '    ' + promocion.descuento * 100 + '%';
      promotionSelect.appendChild(option);
    });
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Ninguno';
    promotionSelect.appendChild(defaultOption);
  } catch (error) {
    console.error('Error al cargar las promociones:', error);
  }
}
