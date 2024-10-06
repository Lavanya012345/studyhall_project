// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './css/LoginSignup.css';

// function LoginSignup({ isLogin, onSignup }) {
//   const [userId, setUserId] = useState('');
//   const [password, setPassword] = useState('');
//   const [isRegistered, setIsRegistered] = useState(false);
//   const navigate = useNavigate();

//   // const handleLogin = () => {
//   //   axios.post('http://localhost:5000/api/signup',{name:"lavanya",
//   //     email:"lava@test.com",password:"password"
//   //   }, {
//   //     headers: {
//   //       'Content-Type': 'application/json'
//   //     }
//   //   }).then((res)=>{
//   //     console.log(res)
//   //     // if (res.data.success) {
//   //     //           // Login successful, redirect to dashboard
//   //     //           window.location.href = '/dashboard';
//   //     //         } else {
//   //     //           alert('Invalid credentials');
//   //     //         }
//   //   }).catch((err)=>{
//   //     console.log(err)
//   //   })
//   // };
//   const handleLogin = () => {
//     axios.post('http://localhost:5000/api/login', {
//       email: userId,
//       password: password,
//     })
//     .then((res) => {
//       if (res.data.success) {
//         navigate('/dashboard'); // Redirect to the dashboard
//       } else {
//         alert('Invalid credentials');
//       }
//     })
//     .catch((err) => {
//       console.error(err);
//       alert('Login failed. Please try again.');
//     });
//   };
  
//   // const handleSignup = () => {
//   //   // Simulate successful registration
//   //   setIsRegistered(true);
//   //   alert('Registration successful! Please log in.');
//   // };

//   return (
//     <>
//       {/* Navbar with logo on the left and "Register as Study Hall" button on the right */}
//       <nav className="navbar navbar-light bg-light d-flex justify-content-between">
//         <div className="navbar-brand">
//           <img src="/path-to-your-logo.png" alt="Logo" width="100" />
//         </div>
//         <button className="btn btn-success" onClick={() => navigate('/register')}>
//           Register as Study Hall
//         </button>
//       </nav>

//       {/* Centered card with form */}
//       <div className="login-signup-container d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
//         <div className="card text-center p-4" style={{ width: '300px' }}>
//           <h2 className="mb-4">Create an account</h2>
//           <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="User ID"
//             className="form-control mb-3"
//             value={userId}
//             onChange={(e) => setUserId(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="form-control mb-3"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button className="btn btn-primary mt-3 mb-3" onClick={handleLogin}>
//             Login
//           </button>
//           {!isRegistered && (
//             <a href="/registeruser" onClick={() => setIsRegistered(true)}>
//               Register as User
//             </a>
//           )}
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// export default LoginSignup;



//frnt with 
// import React, { useState } from 'react';
// import axios from 'axios';
// import '../components/css/LoginSignup.css';

// function LoginSignup({ isLogin, onSignup }) {
//   const [userId, setUserId] = useState('');
//   const [password, setPassword] = useState('');
//   const [isRegistered, setIsRegistered] = useState(false);

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post('/api/login', {
//         email: userId,
//         password,
//       });

//       if (response.data.success) {
//         // Login successful, redirect to dashboard
//         window.location.href = '/dashboard';
//       } else {
//         alert('Invalid credentials');
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleSignup = async () => {
//     try {
//       const response = await axios.post('/api/signup', {
//         name: userId,
//         email: userId,
//         password,
//       });

//       if (response.data.success) {
//         // Signup successful, switch to login view
//         setIsRegistered(true);
//       } else {
//         alert('Registration failed');
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   // ...
// }
// export default LoginSignup;





//new code from BB//

// import { useState } from 'react';
// import axios from 'axios';
// import '../components/css/LoginSignup.css';

// function LoginSignup({ isLogin, onSignup }) {
//   const [userId, setUserId] = useState('');
//   const [password, setPassword] = useState('');
//   const [isRegistered, setIsRegistered] = useState(false);
//   console.log(isRegistered)

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/login', {
//         email: userId,
//         password,
//       });

//       if (response.data.success) {
//         // Login successful, redirect to dashboard
//         window.location.href = '/dashboard';
//       } else {
//         alert('Invalid credentials');
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleSignup = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/signup', {
//         name: 'lavanya',
//         email: 'lavanya@gmail.com',
//         password: 'lava123',
//       });

//       if (response.data.success) {
//         // Signup successful, switch to login view
//         setIsRegistered(true);
//       } else {
//         alert('Registration failed');
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
//       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       {isLogin ? (
//         <button onClick={handleLogin}>Login</button>
//       ) : (
//         <button onClick={handleSignup}>Signup</button>
//       )}
//       <p>hello</p>
//     </div>
//   );
// }

// export default LoginSignup;









// import React, { useState } from 'react';
// import axios from 'axios';
// import '../components/css/LoginSignup.css'; // Make sure this path is correct

// function LoginSignup({ isLogin, onSignup }) {
//   const [userId, setUserId] = useState('');
//   const [password, setPassword] = useState('');
//   // const [isRegistered, setIsRegistered] = useState(false);
//   const [message, setMessage] = useState('');

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post('/api/login', {
//         email: userId,
//         password,
//       });

//       if (response.data.success) {
//         setMessage('Login successful!');
//         window.location.href = '/dashboard';
//       } else {
//         setMessage('Invalid credentials');
//       }
//     } catch (error) {
//       console.error(error);
//       setMessage('An error occurred during login');
//     }
//   };

//   const handleSignup = async () => {
//     try {
//       const response = await axios.post('/api/signup', {
//         name: 'lavanya',
//         email: 'lavanya@gmail.com',
//         password: 'lava123',
//       });

//       if (response.data.success) {
//         setMessage('Signup successful! Please log in.');
//         // setIsRegistered(true);
//       } else {
//         setMessage('Registration failed');
//       }
//     } catch (error) {
//       console.error(error);
//       setMessage('An error occurred during signup');
//     }
//   };

//   return (
//     <div className="login-signup-container">
//       <h2>{isLogin ? 'Login' : 'Signup'}</h2>
//       <input
//         type="text"
//         placeholder="Email"
//         value={userId}
//         onChange={(e) => setUserId(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       {isLogin ? (
//         <button onClick={handleLogin}>Login</button>
//       ) : (
//         <button onClick={handleSignup}>Signup</button>
//       )}
//       {message && <p>{message}</p>}
//     </div>
//   );
// }

// export default LoginSignup;














//final code//
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './css/LoginSignup.css';

// const LoginSignup = () => {
//   const [isSignup, setIsSignup] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const url = isSignup ? 'http://localhost:5000/api/signup' : 'http://localhost:5000/api/login';
//     const data = isSignup ? { name, email, password } : { email, password };

//     try {
//       const response = await axios.post(url, data);
//       if (response.status === 200 && !isSignup) {
//         // if (response.data.user) {
//         // localStorage.setItem('user', JSON.stringify(response.data.user));
//         // navigate('/home');}
//         navigate('/dashboard', { state: { user: response.data.user } });
//       }
//         // else {
//         //   alert('Login data not found.');
//         // }
//        else if (response.status === 201 && isSignup) {
//         alert('Signup successful! Please log in.');
//         setIsSignup(false);
//       }
//     } catch (error) {
//       alert('Authentication failed!');
//     }
//   };

//   return (
//     <div>
//       <nav className="navbar navbar-light bg-light d-flex justify-content-between">
//          <div className="navbar-brand">
//            <img src="/path-to-your-logo.png" alt="Logo" width="100" />
//         </div>
//          <button className="btn btn-success " onClick={() => navigate('/register')}>
//           Register as Study Hall
//         </button>
//        </nav>

//       <div className="login-signup-container d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
//          <div className="card text-center p-4" >
           

//             <h2>{isSignup ? 'Sign Up' : 'Log In'}</h2>
//             <form onSubmit={handleSubmit}>
//               {isSignup && (
//                 <div>
//                   {/* <label>Name:</label> */}
//                   <input
//                   placeholder="Name"
//                   className="form-control mb-3"
//                     type="text"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     required
//                   />
//                 </div>
//               )}
//               <div>
//                 {/* <label>Email:</label> */}
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   className="form-control mb-3"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//               </div>
//               <div>
//                 {/* <label>Password:</label> */}
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   className="form-control mb-3"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                 />
//               </div>
//               <button className='btn btn-success' type="submit">{isSignup ? 'Sign Up' : 'Log In'}</button>
//             </form>
//             <a href='#' onClick={() => setIsSignup(!isSignup)}>
//               {isSignup ? 'Already have an account? Log In' : 'Don’t have an account? Sign Up'}
//             </a>
//           </div>
//       </div>
//     </div>
//   );
// };

// export default LoginSignup;














import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './css/LoginSignup.css'; // Ensure this points to the correct CSS file

const LoginSignup = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isSignup ? 'http://localhost:5000/api/signup' : 'http://localhost:5000/api/login';
    const data = isSignup ? { name, email, password } : { email, password };

    try {
      const response = await axios.post(url, data);
      if (response.status === 200 && !isSignup) {
        navigate('/dashboard', { state: { user: response.data.user } });
      } else if (response.status === 201 && isSignup) {
        alert('Signup successful! Please log in.');
        setIsSignup(false);
      }
    } catch (error) {
      alert('Authentication failed!');
    }
  };

  return (
    <div className='bg'>
      <nav className="navbar navbar-light">
        <div className="navbar-brand">
          <img src="/path-to-your-logo.png" alt="Logo" width="100" />
        </div>
        <button className="btn btn-success" onClick={() => navigate('/register')}>
          Register as Study Hall
        </button>
      </nav>

      <div className="login-signup-container">
        <div className="login_card">
          <h2 className='text-center text-white'>{isSignup ? 'Sign Up' : 'Log In'}</h2>
          <form onSubmit={handleSubmit}>
            {isSignup && (
              <input
                placeholder="Name"
                className="form-control"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            )}
            <input
              type="email"
              placeholder="Email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className="btn btn-success_1" type="submit">
              {isSignup ? 'Sign Up' : 'Log In'}
            </button>
          </form>
          <a href="#" onClick={() => setIsSignup(!isSignup)}><br/>
            {isSignup ? 'Already have an account? Log In' : 'Don’t have an account? Sign Up'}
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
