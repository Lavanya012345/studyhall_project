import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';

import './css/OwnerDashboard.css'

const OwnerDashboard = () => {
    const navigate = useNavigate();
  const location = useLocation();
  const { owner } = location.state || {};

  const [num_seats, setNoOfSeats] = useState('');
  const [studyhallname, setStudyhallname] = useState('');
  const [amount, setAmount] = useState(''); 

  if (!owner) {
    return <h2>Please log in to view your information.</h2>;
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
    
  //   console.log('Amount1:', amount1);
  //   console.log('Request Payload:', { monthly_amount1:parseInt(amount1) }); 
  //   try {
  //     const response = await axios.post('http://localhost:5000/api/seats_count', {
        
          
  //         monthly_amount1: parseInt(amount1)
  //     },{
  //           headers: {
  //             'Content-Type': 'application/json',
  //           }
          
       
  //     });
  
  //     if (response.status === 201)  {
  //       alert('Study hall details registered successfully!');
  //       navigate('/home'); // Navigate to the details page or dashboard
  //     } else {
  //       alert('Failed to register study hall details.');
  //     }
  //   } catch (error) {
  //     if(error.response){
  //         console.log('Error Response Data:', error.response.data);
  //     }else{
  //       console.error('Error:', error);
  //     }
      
  //     alert('An error occurred while registering study hall details.');
  //   }


    
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
    
  //   if (!amount1) {
  //     alert('Amount is required');
  //     return;
  //   }
  
  //   console.log('Amount1:', amount1);
  //   console.log('Request Payload:', { monthly_amount1: parseInt(amount1) });
  
  //   try {
  //     const response = await axios.post('http://localhost:5000/api/seats_count', {
  //       monthly_amount1: parseInt(amount1)
  //     }, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //       }
  //     });
  
  //     if (response.status === 201) {
  //       alert('Study hall details registered successfully!');
  //       navigate('/home'); 
  //     } else {
  //       alert('Failed to register study hall details.');
  //     }
  //   } catch (error) {
  //     if (error.response) {
  //       console.log('Error Response Data:', error.response.data);
  //     } else {
  //       console.error('Error:', error);
  //     }
  
  //     alert('An error occurred while registering study hall details.');
  //   }
  // };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!studyhallname || !amount || !num_seats) {
      alert('Please fill out all fields.');
      return;
    }

  
    console.log("Submitting data:", { studyhallname, amount, num_seats });
  
    try {
      const response = await axios.post('http://localhost:5000/api/seats_count', {
        studyhallname,
      amount,
      num_seats
      });
      
      if (response.status === 201) {
        alert('Study hall details registered successfully!');
        navigate('/home');  // Redirect after success
      } else {
        alert('Failed to register study hall details.');
      }
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
    alert('An error occurred while registering study hall details.');
    }
  };
  
  
 
  return (
  <div>
    <div class="sidebar">
  <a href="/data"><i class="fa fa-fw fa-home"></i> My profile</a>
  <a href="/analytics"><i class="fa fa-fw fa-wrench"></i> Analyctis</a>
  <a href="#clients"><i class="fa fa-fw fa-user"></i> Help</a>
  <a href="#contact"><i class="fa fa-fw fa-envelope"></i> Contact</a>
  <a className='text-bottom' href='/'>logout</a>
</div>

<div class="main">
  <h1>Welcome! {owner.name} </h1>
  <div className="register-container">
      <div className="card">
        <h2>Fill the below details</h2>
        {/* <p>No.of Seats { owner.seatcount}</p>
        <p>Studyhall Name {owner.studyhallname}</p> */}
        <form onSubmit={handleSubmit}>
        <div> 
          <label>Studyhall Name</label>
        </div>
        <input
          type="text"
          placeholder="Studyhall Name"
          value={studyhallname} 
          onChange={(e) => setStudyhallname(e.target.value)}
          
        />
        <div>
        <label>Set Monthly amount</label>
        </div>
        <input
          type="text"
          placeholder="Amount"
          value={amount} 
          onChange={(e) => setAmount(e.target.value)}
        />
        <br/>

        
        <label>No. of Seats</label><br/>
        <input
          type="text"
          placeholder="No. of Seats"
          value={num_seats}
          onChange={(e) => setNoOfSeats(e.target.value)}
        />
        <br/>
        {/* <label>Monthly(NON-AC)</label><br/>
        <input
          type="text"
          placeholder="Amount2"
          value={amount2}
          onChange={(e) => setAmount2(e.target.value)} 
        /><br/> */}
        <br/>
        <button className='text-center' type="submit">
          Register
        </button>
        </form>
      </div>
    </div>  
</div>

  </div>
  )
};

export default OwnerDashboard;
