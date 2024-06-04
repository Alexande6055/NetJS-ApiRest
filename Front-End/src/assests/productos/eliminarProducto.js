function deleteProduct(id) {
  const apiUrl = `http://localhost:8000/api/productos/${id}`;

  fetch(apiUrl, {
    method: 'DELETE',
  })
    .then((response) => response.json())
    .then((data) => {
      loadProducts();
    })
    .catch((error) => console.error('Error al eliminar el producto:', error));
}
