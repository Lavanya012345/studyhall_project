import React from 'react';

function Payment() {
  const handlePayment = () => {
    // Simulate payment process
    alert('Payment successful');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Payment Interface</h2>
      <div>
        <p>Pay via UPI</p>
        <button onClick={handlePayment}>Complete Payment</button>
      </div>
    </div>
  );
}

export default Payment;
