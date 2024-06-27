document.addEventListener('DOMContentLoaded', () => {
  const apiEndpoint = 'http://localhost:8000/api/tipo-pagos';
  const paymentTypeForm = document.getElementById('payment-type-form');
  const paymentTypeNameInput = document.getElementById('payment-type-name');
  const paymentTypesList = document.getElementById('payment-types-list');

  // CARGAR DATOS
  const fetchPaymentTypes = async () => {
    try {
      const response = await fetch(apiEndpoint);
      const paymentTypes = await response.json();
      paymentTypesList.innerHTML = '';
      paymentTypes.forEach((paymentType) => {
        const li = document.createElement('li');
        li.textContent = paymentType.nombrePago;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.addEventListener('click', () =>
          deletePaymentType(paymentType.id_pago),
        );
        li.appendChild(deleteButton);
        paymentTypesList.appendChild(li);
      });
    } catch (error) {
      console.error('Error fetching payment types:', error);
    }
  };

  // CREAR TIPO DE PAGO
  const createPaymentType = async (event) => {
    event.preventDefault();
    const paymentTypeName = paymentTypeNameInput.value;
    if (paymentTypeName) {
      try {
        const token = localStorage.getItem('authToken');
        await fetch(apiEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ nombrePago: paymentTypeName }),
        });
        paymentTypeNameInput.value = '';
        fetchPaymentTypes();
      } catch (error) {
        console.error('Error creating payment type:', error);
      }
    }
  };

  // Function to delete a payment type
  const deletePaymentType = async (id) => {
    try {
      await fetch(`${apiEndpoint}/${id}`, {
        method: 'DELETE',
      });
      fetchPaymentTypes();
    } catch (error) {
      console.error('Error deleting payment type:', error);
    }
  };

  // Initialize payment types on page load
  fetchPaymentTypes();

  // Add event listener to form
  paymentTypeForm.addEventListener('submit', createPaymentType);
});
