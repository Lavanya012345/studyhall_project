import React, { useState } from 'react';
import LoginSignup from '../components/LoginSignup';

function LoginSignupPage() {
  const [isLogin, setIsLogin] = useState(false);

  const handleSignup = (userData) => {
    // Store user data in the backend and switch to login view
    setIsLogin(true);
  };

  return (
    <div>
      <LoginSignup isLogin={isLogin} onSignup={handleSignup} />
    </div>
  );
}

export default LoginSignupPage;
