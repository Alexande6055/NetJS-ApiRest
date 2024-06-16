document.addEventListener('DOMContentLoaded', () => {
  const apiEndpoint = 'http://localhost:8000/api/promocion';
  const promotionForm = document.getElementById('promotion-form');
  const promotionDescriptionInput = document.getElementById(
    'promotion-description',
  );
  const promotionDiscountInput = document.getElementById('promotion-discount');
  const promotionStartDateInput = document.getElementById(
    'promotion-start-date',
  );
  const promotionEndDateInput = document.getElementById('promotion-end-date');
  const promotionsList = document.getElementById('promotions-list');

  // cargar promociones
  const fetchPromotions = async () => {
    try {
      const response = await fetch(apiEndpoint);
      const promotions = await response.json();
      promotionsList.innerHTML = '';
      promotions.forEach((promotion) => {
        const li = document.createElement('li');
        li.innerHTML = `
                    <div>
                        <strong>${promotion.descripcion}</strong> - ${parseFloat(promotion.descuento) * 100}% de descuento
                        <br>
                        Desde: ${promotion.fecha_inicio} hasta: ${promotion.fecha_fin}
                    </div>
                `;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.addEventListener('click', () =>
          deletePromotion(promotion.id_promocion),
        );
        li.appendChild(deleteButton);
        promotionsList.appendChild(li);
      });
    } catch (error) {
      console.error('Error fetching promotions:', error);
    }
  };

  // crear promocion
  const createPromotion = async (event) => {
    event.preventDefault();
    const description = promotionDescriptionInput.value;
    const discount = parseFloat(promotionDiscountInput.value);
    const startDate = promotionStartDateInput.value;
    const endDate = promotionEndDateInput.value;
    if (description && discount && startDate && endDate) {
      try {
        await fetch(apiEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            descripcion: description + '',
            descuento: discount + '',
            fecha_inicio: startDate + '',
            fecha_fin: endDate + '',
          }),
        });
        promotionDescriptionInput.value = '';
        promotionDiscountInput.value = '';
        promotionStartDateInput.value = '';
        promotionEndDateInput.value = '';
        fetchPromotions();
      } catch (error) {
        console.error('Error creating promotion:', error);
      }
    }
  };

  // eliminar promocion
  const deletePromotion = async (id) => {
    try {
      await fetch(`${apiEndpoint}/${id}`, {
        method: 'DELETE',
      });
      fetchPromotions();
    } catch (error) {
      console.error('Error deleting promotion:', error);
    }
  };

  // iniciar la carga de promociones
  fetchPromotions();

  // agrega elementos
  promotionForm.addEventListener('submit', createPromotion);
});
