let editingProductId = null;
/*
function showAddProductForm() {
  editingProductId = null;
  document.getElementById('formTitle').innerText = 'Añadir Nuevo Producto';
  document.getElementById('productForm').reset();
  document.getElementById('productFormContainer').style.display = 'block';
}

function hideProductForm() {
  document.getElementById('productFormContainer').style.display = 'none';
}
*/
async function saveProduct() {
  const nombre = document.getElementById('productName').value.trim();
  const descripcion = document
    .getElementById('productDescription')
    .value.trim();
  const imgUrl =
    'https://images.vexels.com/media/users/3/128454/isolated/preview/6d8c286a64924ebfdff090cf335f0bd4-sello-retro-de-producto-premium.png?w=360';
  const precio = parseFloat(document.getElementById('productPrice').value);
  const nombre_categoria = document.getElementById('productCategory').value;
  const nombre_marca = document.getElementById('productBrand').value;
  const id_promocion = document.getElementById('promotionDescription').value;
  const stock = parseInt(document.getElementById('productStock').value);
  const iva = document.getElementById('productIva').value;

  const productData = {
    nombre,
    descripcion,
    imgUrl,
    precio,
    nombre_categoria,
    nombre_marca,
    id_promocion: id_promocion ? parseInt(id_promocion) : null,
    stock,
    iva: iva ? parseInt(iva) : null,
  };

  try {
    const response = await fetch('http://localhost:8000/api/productos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('authToken')}`,
      },
      body: JSON.stringify(productData),
    });

    if (!response.ok) {
      throw new Error('Error al guardar el producto');
    }

    console.log('Producto guardado exitosamente');
    hideProductForm();
    loadProducts();
  } catch (error) {
    console.error('Error al guardar el producto:', error);
    alert('Error al guardar el producto');
  }
}
/*
async function editProduct(id) {
  const apiUrl = `http://localhost:8000/api/productos/${id}`;
  const response = await fetch(apiUrl);
  const data = await response.json();

  editingProductId = id;
  document.getElementById('formTitle').innerText = 'Editar Producto';
  document.getElementById('productName').value = data.nombre;
  document.getElementById('productDescription').value = data.descripcion;
  document.getElementById('productPrice').value = data.precio;
  document.getElementById('productCategory').value = data.nombre_categoria;
  document.getElementById('productBrand').value = data.nombre_marca;
  document.getElementById('promotionDescription').value = data.id_promocion;
  document.getElementById('productStock').value = data.stock;
  document.getElementById('productIva').value = data.iva;
  document.getElementById('productFormContainer').style.display = 'block';

  document.getElementById('saveProductButton').onclick = updateProduct;
}

async function updateProduct() {
  const nombre = document.getElementById('productName').value.trim();
  const descripcion = document
    .getElementById('productDescription')
    .value.trim();
  const imgUrl = document.getElementById('productImageUrl').value.trim();
  const precio = parseFloat(document.getElementById('productPrice').value);
  const nombre_categoria = document.getElementById('productCategory').value;
  const nombre_marca = document.getElementById('productBrand').value;
  const id_promocion = document.getElementById('promotionDescription').value;
  const stock = parseInt(document.getElementById('productStock').value);
  const iva = document.getElementById('productIva').value;

  const productData = {
    nombre,
    descripcion,
    imgUrl,
    precio,
    nombre_categoria,
    nombre_marca,
    id_promocion: id_promocion ? parseInt(id_promocion) : null,
    stock,
    iva: iva ? parseInt(iva) : null,
  };

  try {
    const response = await fetch(
      `http://localhost:8000/api/productos/${editingProductId}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
        body: JSON.stringify(productData),
      },
    );

    if (!response.ok) {
      throw new Error('Error al actualizar el producto');
    }

    console.log('Producto actualizado exitosamente');
    hideProductForm();
    loadProducts();
  } catch (error) {
    console.error('Error al actualizar el producto:', error);
    alert('Error al actualizar el producto');
  }
}*/
