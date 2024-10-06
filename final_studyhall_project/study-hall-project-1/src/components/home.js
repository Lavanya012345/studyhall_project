import React from 'react';
import { useLocation } from 'react-router-dom';


const Home = () => {
  // const loginsignup = JSON.parse(localStorage.getItem('loginsignup'));
  // if (!loginsignup) {
  //   return <h2>Please log in to view your information.</h2>;
  // }
  
  // const loginsignupData = localStorage.getItem('user');
  // let user = null;

  // if (loginsignupData) {
  //   try {
  //     user = JSON.parse(loginsignupData);
  //   } catch (error) {
  //     console.error("Error parsing JSON:", error);
  //   }
  // }

  // if (!user) {
  //   return <h2>Please log in to view your information.</h2>;
  // }
  const location = useLocation();
  const { user } = location.state || {};

  if (!user) {
    return <h2>Please log in to view your information.</h2>;
  }


  return (
  <div>
  <h1>Welcome to the Home Page!</h1>;
  <h2>WELCOME, {user.name} </h2>
  <p>your email: {user.email} </p>
  <p>successful saved details!!</p>
  {/* <p>your password: {loginsignup.password}</p> */}
  </div>
  )
};

export default Home;
