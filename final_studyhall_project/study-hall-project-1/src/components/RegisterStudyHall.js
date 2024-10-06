// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './css/RegisterStudyHall.css';

// function RegisterStudyHall({ onRegister }) {
//   const [name, setName] = useState('');
//   const [studyhallname, setStudyhallname] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [email, setEmail] = useState('');
//   const [address, setAddress] = useState('');
//   const [password, setPassword] = useState('');
//   // const [otp, setOtp] = useState('');
//   const navigate = useNavigate();


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!name.trim() || !studyhallname.trim() || !mobile.trim() || !email.trim() || !address.trim() || !password.trim()) {
//       alert('Please fill all fields');
//       return;
//     }
//     const url =  'http://localhost:5000/api/register';
//     const data =  { name,studyhallname,mobile, email,address, password};
//     // console.log('Submitting data:', data);
//     console.log("Submitting with state:", { name, studyhallname, mobile, email, address, password }); // Add this line
//     try {
//       const response = await axios.post(url, data);
//       console.log('Response from server:', response);
//       if (response.status === 201) {
//         // if (response.data.user) {
//         // localStorage.setItem('user', JSON.stringify(response.data.user));
//         // navigate('/home');}
//         alert('Register successful!');
//         navigate('/admin-dashboard', { state: { user: response.data} });
//       }
//         else {
//           alert('Register failed! Server did not return a success status.');
//         }
//     } catch (error) {
//       console.error('Registration failed:', error.response ? error.response.data : error.message);
//       alert(`Register failed! ${error.response ? error.response.data.error : 'Unknown error occurred.'}`);
//     }
//   };


//   return (
//     <div className="register-container">
//       <div className="card">
//         <h2>Register Study Hall</h2>
//         <form onSubmit={handleSubmit}>

//         <input
//           type="text"
//           placeholder="UserName"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <br/>
//         <input
//           type="text"
//           placeholder="Studyhall Name"
//           value={studyhallname}
//           onChange={(e) => setStudyhallname(e.target.value)}
//         />
//         <br/>
//         <input
//           type="text"
//           placeholder="Mobile No"
//           value={mobile}
//           onChange={(e) => setMobile(e.target.value)}
//         /><br/>
//         <input
//           type="email"
//           placeholder="Email ID"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         /><br/>
//         <input
//           type="text"
//           placeholder="Address"
//           value={address}
//           onChange={(e) => setAddress(e.target.value)}
//         />
//         <br/>
//         <input
//           type="password"
//           placeholder="Create Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         /><br/>
//         {/* <input
//           type="password"
//           placeholder="Re-enter Password"
//           value={otp}
//           onChange={(e) => setOtp(e.target.value)}
//         /><br/> */}
//         <button  type="submit">
//           Register
//         </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default RegisterStudyHall;















//new register-login//
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './css/RegisterStudyHall.css';

function RegisterStudyHall({ onRegister }) {
  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState('');
  const [studyhallname, setStudyhallname] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [seatcount, setSeatcount]= useState('');
  // const [otp, setOtp] = useState('');
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isRegister ? 'http://localhost:5000/api/register' : 'http://localhost:5000/api/owner-login';
    const data = isRegister ? { name,studyhallname, seatcount: parseInt(seatcount, 10),mobile,address, email,password} : { email, password };

    if(isRegister){
    if (!name.trim() || !studyhallname.trim()|| !seatcount.trim() || !mobile.trim() || !email.trim() || !address.trim() || !password.trim()) {
      alert('Please fill all fields');
      return;
    }
  }else{
    if (!email.trim() || !password.trim()) {
      alert('Please fill both email and password');
      return;
  }
}
    // const url =  'http://localhost:5000/api/register';
    // const data =  { name,studyhallname,mobile, email,address, password};
    // console.log('Submitting data:', data);
    console.log("Submitting with state:", { name, studyhallname, seatcount, mobile, address,email, password }); // Add this line
    try {
      const response = await axios.post(url, data);
      console.log('Response from server:', response);
      if (response.status === 200 && !isRegister) {
        // if (response.data.user) {
        // localStorage.setItem('user', JSON.stringify(response.data.user));
        // navigate('/home');}
        alert('Login successful!');
        navigate('/admin-dashboard', { state: { owner: response.data.owner} });
      }
      else if (response.status === 201 && isRegister) {
        alert('Signup successful! Please log in.');
        setIsRegister(false);
      }
        else {
          alert('Register failed! Server did not return a success status.');
        }
    } catch (error) {
      console.error('Registration/Login failed:', error);
        if (error.response) {
            alert(`Error: ${error.response.data.error || error.response.statusText}`);
        } else if (error.request) {
            alert('No response received from server. Please check your network.');
        } else {
            alert(`Error: ${error.message}`);
        }
    }
  };



  return (
    <div className="register-container">
      <div className='d-flex flex-row justify-content-center'>
        
        <div className='left-side'>
          <img src='https://static.wixstatic.com/media/8a9f72_049b8a537c7e4a2baa2bd7ea14de2645~mv2.jpg'/>
        </div>

      
        <div className="card_ rigt-side">
          <h2>{isRegister ? 'Register as Studyhall' : 'Log In'}</h2>
          <form onSubmit={handleSubmit}>
            {isRegister && (
          <div>
          <input
            type="text"
            placeholder="UserName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br/>
          <input
            type="text"
            placeholder="Studyhall Name"
            value={studyhallname}
            onChange={(e) => setStudyhallname(e.target.value)}
          />
          <br/>
          <input
            type="text"
            placeholder="No. of Seats"
            value={seatcount}
            onChange={(e) => setSeatcount(e.target.value)}
          />
          <br/>
          <input
            type="text"
            placeholder="Mobile No"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          /><br/>
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          /><br/>
          </div>
            )}
          
          <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br/>

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /><br/>
          </div>
          
          <button  type="submit">
          {isRegister ? 'Register' : 'Log In'}
          </button>
          </form>
          <a href='#' onClick={() => setIsRegister(!isRegister)}>
                {isRegister ? 'Already have an account? Log In' : 'Don’t have an account? Register'}
          </a>
        </div>
      </div>
    </div>
  );
}

export default RegisterStudyHall;
