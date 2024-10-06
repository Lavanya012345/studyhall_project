import React from 'react';
import RegisterStudyHall from '../components/RegisterStudyHall';

function RegisterPage() {
  const handleRegister = (ownerData) => {
    // Store owner data in the backend
    alert('Successfully registered!');
  };

  return (
    <div>
      <RegisterStudyHall onRegister={handleRegister} />
    </div>
  );
}

export default RegisterPage;
