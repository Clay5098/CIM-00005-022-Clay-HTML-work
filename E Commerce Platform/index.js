    document.getElementById('paymentForm').addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent form submission

      // Get selected payment method and amount
      const paymentMethod = document.getElementById('paymentMethod').value;
      const amount = document.getElementById('amount').value;
      const statusDiv = document.getElementById('status');

      // Validate inputs
      if (!paymentMethod || !amount) {
        statusDiv.style.color = 'red';
        statusDiv.textContent = 'Please fill in all fields.';
        return;
      }

      // Simulate payment processing
      statusDiv.style.color = 'green';
      statusDiv.textContent = `Processing ${paymentMethod} payment of $${amount}...`;

      // Mock API call
      setTimeout(() => {
        statusDiv.textContent = `Payment of $${amount} via ${paymentMethod} was successful!`;
      }, 2000);
    });