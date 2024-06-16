let editingProductId = null;

function showAddProductForm() {
  editingProductId = null;
  document.getElementById('formTitle').innerText = 'Añadir Nuevo Producto';
  document.getElementById('productForm').reset();
  document.getElementById('productFormContainer').style.display = 'block';
}

function hideProductForm() {
  document.getElementById('productFormContainer').style.display = 'none';
}

async function saveProduct() {
  const nombre = document.getElementById('productName').value;
  const descripcion = document.getElementById('productDescription').value;
  const precio = parseFloat(document.getElementById('productPrice').value);
  const imagen = document.getElementById('productImage').files[0];
  const categoriaId = document.getElementById('productCategory').value;

  const productData = new FormData();
  productData.append('nombre', nombre);
  productData.append('descripcion', descripcion);
  productData.append('precio', precio);
  productData.append('id_categoria', categoriaId);
  productData.append('imagen', imagen);

  try {
    const response = await fetch('http://localhost:8000/api/productos', {
      method: 'POST',
      body: productData,
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

async function editProduct(id) {
  const apiUrl = `http://localhost:8000/api/productos/${id}`;
  const response = await fetch(apiUrl);
  const data = await response.json();

  editingProductId = id;
  document.getElementById('formTitle').innerText = 'Editar Producto';
  document.getElementById('productName').value = data.nombre;
  document.getElementById('productDescription').value = data.descripcion;
  document.getElementById('productPrice').value = data.precio;
  document.getElementById('productCategory').value = data.id_categoria;
  document.getElementById('productStock').value = data.stock;
  document.getElementById('productFormContainer').style.display = 'block';

  document.getElementById('saveProductButton').onclick = updateProduct;
}

async function updateProduct() {
  const nombre = document.getElementById('productName').value;
  const descripcion = document.getElementById('productDescription').value;
  const precio = parseFloat(document.getElementById('productPrice').value);
  const categoriaId = document.getElementById('productCategory').value;

  const productData = {
    nombre: nombre,
    descripcion: descripcion,
    precio: precio,
    id_categoria: categoriaId,
  };

  try {
    const response = await fetch(
      `http://localhost:8000/api/productos/${editingProductId}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
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
}
