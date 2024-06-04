const apiUrl = 'http://localhost:8000/api/productos';

function showAddProductForm() {
  // Reiniciamos el identificador de edición
  editingProductId = null;
  // Configuramos el título del formulario
  document.getElementById('formTitle').innerText = 'Añadir Nuevo Producto';
  // Reiniciamos el formulario
  document.getElementById('productForm').reset();
  // Mostramos el contenedor del formulario
  document.getElementById('productFormContainer').style.display = 'block';
}
async function saveProduct() {
  const nombre1 = document.getElementById('productName').value;
  const descripcion1 = document.getElementById('productDescription').value;
  const precio1 = parseFloat(document.getElementById('productPrice').value); // Convertimos a número
  const imgUrl1 = document.getElementById('productImage').files[0];
  const categorias = document.getElementById('productCategory');
  const id_categoria = categorias.options[categorias.selectedIndex].text;
  alert(id_categoria);
  try {
    const response = await fetch('http://localhost:8000/api/productos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nombre: nombre1 + '',
        descripcion: descripcion1 + '',
        imgUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5_0ad2TMs_rUEGdITOdq24e6r6vyFHixwlA&usqp=CAU',
        precio: precio1,
        id_categoria: id_categoria + '',
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
