document.getElementById('checkout-button').addEventListener('click', async function(event) {
    event.preventDefault();
  
    const cardNumber = document.getElementById('card-number').value;
    const cardExpiry = document.getElementById('card-expiry').value;
    const cardCvc = document.getElementById('card-cvc').value;
  
    const paymentData = {
      cardNumber: cardNumber,
      cardExpiry: cardExpiry,
      cardCvc: cardCvc
    };
  
    try {
      // Aquí podrías realizar una validación básica de los datos de la tarjeta
  
      // Realizar la solicitud para crear el detalle de la factura
      const response = await fetch('http://localhost:8000/api/detalle_facturas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(paymentData)
      });
  
      if (!response.ok) {
        throw new Error('Failed to create invoice detail');
      }
  
      const data = await response.json();
      console.log('Detalle de factura creado:', data);
  
      // Aquí podrías redirigir al usuario a una página de confirmación o realizar otras acciones
      alert('Pago realizado exitosamente');
    } catch (error) {
      console.error('Error al procesar el pago:', error.message);
      alert('Error al procesar el pago. Por favor, inténtalo de nuevo.');
    }
  });
  