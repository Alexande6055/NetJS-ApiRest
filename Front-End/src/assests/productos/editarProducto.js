async function editProduct(id) {
  const apiUrl = `http://localhost:8000/api/productos/${id}`;

  // Obtenemos los datos del producto para editar
  const response = await fetch(apiUrl);
  const data = await response.json();
  // Mostramos los datos del producto en el formulario
  editingProductId = id;
  document.getElementById('formTitle').innerText = 'Editar Producto';
  document.getElementById('productName').value = data.nombre;
  document.getElementById('productDescription').value = data.descripcion;
  document.getElementById('productPrice').value = data.precio;
  document.getElementById('productCategory').value = data.categoria;
  document.getElementById('productStock').value = data.stock;
  document.getElementById('productImage').value = null;
  document.getElementById('productFormContainer').style.display = 'block';
  document
    .getElementById('saveProductButton')
    .addEventListener('click', updateProduct);
}
async function updateProduct() {
  const nombre1 = document.getElementById('productName').value;
  const descripcion1 = document.getElementById('productDescription').value;
  const precio1 = parseFloat(document.getElementById('productPrice').value); // Convertimos a número
  const imgUrl1 = document.getElementById('productImage').files[0];

  try {
    const response = await fetch('http://localhost:8000/api/productos', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nombre: nombre1 + '',
        descripcion: descripcion1 + '',
        imgUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5_0ad2TMs_rUEGdITOdq24e6r6vyFHixwlA&usqp=CAU',
        precio: precio1,
      }),
    });

    if (!response.ok) {
      throw new Error('Error al guardar el producto');
    }

    const data = await response.json();

    console.log('Producto guardado exitosamente');

    // Ocultamos el formulario
    hideProductForm();

    // Recargamos la lista de productos
    loadProducts();
  } catch (error) {
    console.error('Error al guardar el producto:', error);
    alert('Error al guardar el producto');
  }
}

function hideProductForm() {
  document.getElementById('productFormContainer').style.display = 'none';
}
