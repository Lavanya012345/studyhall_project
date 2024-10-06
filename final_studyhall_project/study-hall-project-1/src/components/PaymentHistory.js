import React from 'react';

function PaymentHistory() {
  const payments = [
    { id: 1, date: '2024-08-01', amount: 100 },
    { id: 2, date: '2024-08-02', amount: 50 },
    { id: 3, date: '2024-08-03', amount: 75 },
  ];

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Payment History</h2>
      <ul>
        {payments.map((payment) => (
          <li key={payment.id}>
            Date: {payment.date} | Amount: {payment.amount} INR
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PaymentHistory;
