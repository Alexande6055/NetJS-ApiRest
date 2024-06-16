document.addEventListener('DOMContentLoaded', () => {
  const apiEndpoint = 'http://localhost:8000/api/categorias';
  const categoryForm = document.getElementById('category-form');
  const categoryNameInput = document.getElementById('category-name');
  const categoryDescriptionInput = document.getElementById(
    'category-description',
  );
  const categoriesList = document.getElementById('categories-list');

  // Function to fetch and display categories
  const fetchCategories = async () => {
    try {
      const response = await fetch(apiEndpoint);
      const categories = await response.json();
      categoriesList.innerHTML = '';
      categories.forEach((category) => {
        const li = document.createElement('li');
        li.textContent = `${category.nombre} - ${category.descripcion}`;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.addEventListener('click', () =>
          deleteCategory(parseInt(category.id_categoria)),
        );
        li.appendChild(deleteButton);
        categoriesList.appendChild(li);
      });
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  // crear categoria
  const createCategory = async (event) => {
    event.preventDefault();
    const categoryName = categoryNameInput.value;
    const categoryDescription = categoryDescriptionInput.value;
    if (categoryName && categoryDescription) {
      try {
        await fetch(apiEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nombre: categoryName + '',
            descripcion: categoryDescription + '',
          }),
        });
        categoryNameInput.value = '';
        categoryDescriptionInput.value = '';
        fetchCategories();
      } catch (error) {
        console.error('Error creating category:', error);
      }
    }
  };

  // Function to delete a category
  const deleteCategory = async (id) => {
    try {
      await fetch(apiEndpoint + '/' + id, {
        method: 'DELETE',
      });
      fetchCategories();
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  // Initialize categories on page load
  fetchCategories();

  // Add event listener to form
  categoryForm.addEventListener('submit', createCategory);
});
