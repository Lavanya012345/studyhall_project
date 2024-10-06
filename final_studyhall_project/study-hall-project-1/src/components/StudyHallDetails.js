


// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation, useParams } from 'react-router-dom';
// import axios from 'axios';
// import './css/StudyHallDetails.css';

// function StudyHallDetails() {
//   const { id: hallId } = useParams();  // Correctly extract 'hallId'
//   const location = useLocation();
//   const { user } = location.state || {};  // Ensure user data is correctly passed
//   const { name, email} = user || {};  // Safely extract user data

//   const [isPaymentDisabled, setIsPaymentDisabled] = useState(true);


//   const navigate = useNavigate();
//   const [seats, setSeats] = useState([]);
//   const [bookedSeats, setBookedSeats] = useState([]); // Seats already booked by others
//   const [selectedSeats, setSelectedSeats] = useState([]);  // Store temporarily selected seats
//   const [studyHallName, setStudyHallName] = useState('');
//   const [address, setAddress] = useState('');
  
//   const [bookingDetails, setBookingDetails] = useState({
//     name: name || '',
//     email: email || '',
//     startdate: '',
//     enddate: '',
//     // startTime: '',
//     // endTime: '',
//     amount: '',
//   });
//   const [totalSeats, setTotalSeats] = useState(0); // Total seats should not change
//   const [availableSeats, setAvailableSeats] = useState(0); 
//   useEffect(() => {
//     const fetchStudyHallDetails = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/studyhall/${hallId}`);
//         console.log('API response:', response.data);
//         const { seatcount, studyhallname, address, bookedSeats,amount} = response.data;

//         setStudyHallName(studyhallname);
//         setAddress(address);
//         setTotalSeats(seatcount); // Set total seats once
//       setAvailableSeats(seatcount - bookedSeats.length);
//       setSeats(Array.from({ length: seatcount }, (_, i) => bookedSeats.includes(i + 1)))
//         setSelectedSeats(bookedSeats || []);   
//         // Assuming 'false' means available
//         setBookingDetails((prevDetails) => ({
//           ...prevDetails,
//           amount: amount,
//            // Update amount with the value fetched from the database
//         }));
//       } catch (error) {
        
//         alert('Could not load study hall details. Please try again later.');
//       }
//     };

//     if (hallId) {
//       fetchStudyHallDetails();
//     }
//   }, [hallId]);

//   // const handleSeatClick = (seatNumber) => {
//   //   if (!seats[seatNumber-1]) {  // Only allow selection if the seat is not already frozen
//   //     const newSelectedSeats = [...selectedSeats];
//   //     if (newSelectedSeats.includes(seatNumber)) {
//   //       setSelectedSeats(newSelectedSeats.filter(seat => seat !== seatNumber));  // Deselect seat
//   //     } else {
//   //       newSelectedSeats.push(seatNumber);  // Select seat
//   //       setSelectedSeats(newSelectedSeats);
//   //     }
//   //   }
//   // };
//   const handleSeatClick = (seatNumber) => {
//     if (!bookedSeats.includes(seatNumber) && !seats[seatNumber - 1]) { // Ensure the seat is not booked or already selected
//       const newSelectedSeats = [...selectedSeats];
//       if (newSelectedSeats.includes(seatNumber)) {
//         setSelectedSeats(newSelectedSeats.filter(seat => seat !== seatNumber)); // Deselect seat
//       } else {
//         newSelectedSeats.push(seatNumber); // Select seat
//         setSelectedSeats(newSelectedSeats);
//       }
//     }
//   };
  
//   const calculateEndDate = (startDate) => {
//     const date = new Date(startDate);
//     date.setMonth(date.getMonth() + 1);  // Add one month
//     return date.toISOString().split('T')[0];  // Format as YYYY-MM-DD
//   };

//   const handleStartDateChange = (e) => {
//     const startdate = e.target.value;
//     const enddate = calculateEndDate(startdate);
//     setBookingDetails({
//       ...bookingDetails,
//       startdate: startdate,
//       enddate: enddate
//     });
//     setIsPaymentDisabled(!startdate);
//   };

// //   const handlePayment = async () => {
// //   //   console.log('Booking details:', bookingDetails);
// //   // console.log('Selected seats:', selectedSeats);
// //   if (selectedSeats.length === 0 || !bookingDetails.startdate) {
// //     alert('Please select a seat and a start date.');
// //     return;
// //   }
// //   const details = {
// //     ownerId: user.ownerId, // Make sure this is being set correctly based on your application's state management
// //     email: bookingDetails.email,
// //     startdate: bookingDetails.startdate,
// //     enddate: bookingDetails.enddate,
// //     amount: bookingDetails.amount,
// //   };

// //  console.log("Request Payload:", { selectedSeats, bookingDetails: details });
// //     try {
// //       const response = await axios.post(`http://localhost:5000/api/bookSeats/${hallId}`, {
// //         selectedSeats, bookingDetails: details
// //       });
// //       console.log('Booking response:', response.data);
  
// //       // Only mark seats as booked after successful payment
// //       if (response.data){
// //         alert('Payment successful, seats have been booked.');
// //         navigate('/history');
// //       }
      
// //       const updatedSeats = [...seats];
// //       selectedSeats.forEach(seatNumber => {
// //         updatedSeats[seatNumber -1] = true;  // Mark as frozen
// //       });
  
// //       setSeats(updatedSeats);  // Update seat status in frontend
// //       setBookedSeats( [...bookedSeats, ...selectedSeats]); // Update booked seats
// //       setSelectedSeats([]);  // Clear the temporary selections
// //       // alert('Payment successful, seats have been booked.');
      
// //     //   const newSeatCount = seats.filter(seat => !seat).length - selectedSeats.length;
// //     // setSeats(Array(newSeatCount).fill(false)); 
// //         // Redirect to history or any other page
// //     } catch (error) {
// //       console.error('Payment failed:', error);
// //       alert('Payment failed. Please try again.');
// //     }
// //   };
// const handlePayment = async () => {
//   if (selectedSeats.length === 0 || !bookingDetails.startdate) {
//     alert('Please select a seat and a start date.');
//     return;
//   }
//   const details = {
//     ownerId: user.ownerId, // Assuming this is correctly fetched and stored in user's state
//     email: bookingDetails.email,
//     startdate: bookingDetails.startdate,
//     enddate: bookingDetails.enddate,
//     amount: bookingDetails.amount,
//   };

//   try {
//     const response = await axios.post(`http://localhost:5000/api/bookSeats/${hallId}`, {
//       selectedSeats, bookingDetails:details
//     });
//     console.log('Booking response:', response.data);

//     // Only mark seats as booked after successful payment
//     const updatedSeats = [...seats];
//     selectedSeats.forEach(seatNumber => {
//       updatedSeats[seatNumber - 1] = true;  // Mark as frozen
//     });
//     if (response.data) {
//       alert('Payment successful, seats have been booked.');
//       setAvailableSeats(prev => prev - selectedSeats.length); // Update available seats
//       navigate('/history');
//     }

//     // setSeats(updatedSeats);  // Update seat status in frontend
//     // setSelectedSeats([]);  // Clear the temporary selections
//     // alert('Payment successful, seats have been booked.');

//     // // Update the seat count in StudyHallDetails after successful booking
//     // const newSeatCount = seats.filter(seat => !seat).length - selectedSeats.length;
//     // setSeats(Array(newSeatCount).fill(false));  // Reset seat array with new count
//     // navigate('/history');  // Redirect to history or any other page
//   } catch (error) {
//     console.error('Payment failed:', error);
//     alert('Payment failed. Please try again.');
//   }
// };


  
//   // const handlePayment = async () => {
//   //   if (!selectedSeats.length || !bookingDetails.startdate) {
//   //     alert('Please select a seat and enter a start date.');
//   //     return;
//   //   }
  
//   //   try {
//   //     const response = await axios.post(`http://localhost:5000/api/bookSeats/${hallId}`, {
//   //       selectedSeats, bookingDetails
//   //     });
//   //     alert('Payment successful, seats have been booked.');
  
//   //     // // Update the client-side seat and booking state
//   //     // const newBookedSeats = [...bookedSeats, ...selectedSeats];
//   //     // const newSeats = seats.map((seat, index) => newBookedSeats.includes(index + 1) ? true : seat);
  
//   //     // setBookedSeats(newBookedSeats);
//   //     // setSeats(newSeats);
//   //     // setSelectedSeats([]);
      
//   //   // Update local state to reflect the new number of available seats
//   //   setSeats(seats => seats.map((seat, index) => selectedSeats.includes(index + 1) ? null : seat));
//   //   setBookedSeats([...bookedSeats, ...selectedSeats]);
//   //   setSelectedSeats([]);
//   //     navigate('/history'); // Redirect after booking
//   //   } catch (error) {
//   //     console.error('Payment failed:', error);
//   //     alert('Payment failed. Please try again.');
//   //   }
//   // };
  
//   return (
//     <div style={{ textAlign: 'center', marginTop: '20px' }}>
//       <h2>{studyHallName} - {address}</h2>
//       <div className='center-container'>
//         <div className='seat-container'>
//           {seats.map((_, index) => {
//                 const seatNumber = index + 1;  // Convert index to seat number
//                 return (
            
//             <div
//               key={seatNumber}
//               onClick={() => handleSeatClick(seatNumber)}
//               // style={{
//               //   width: '30px',
//               //   height: '30px',
//               //   backgroundColor: selectedSeats.includes(seatNumber) ? 'green' :// Frozen seats are red
//               //   bookedSeats.includes(seatNumber) ? 'red' : 'gray', // Red for booked, green for selected
//               //    // Available seats are gray // Red for frozen, green for selected
//               //   cursor: selectedSeats.includes(seatNumber) ? 'not-allowed' : 'pointer',
//               // }}
//               className={`seat ${selectedSeats.includes(seatNumber) ? 'selected' : ''} ${bookedSeats.includes(seatNumber) ? 'booked' : ''}`}
//             >
//               {seatNumber}
//             </div>
//                 );
//           })}
//         </div>
//       </div>
//       <p>No. of available seats: {seats.length - bookedSeats.length} </p>
//       <div className='box'>
//         <form className='box-container'>
//           <h2>Fill the Below Details</h2>
//           <label>Name:</label>
//           <input type="text" value={bookingDetails.name} readOnly /><br />
//           <label>Email:</label>
//           <input type="email" value={bookingDetails.email} readOnly /><br />
//           <label>Select AC/Non-AC:</label> 
//           <select onChange={(e) => setBookingDetails({ ...bookingDetails, ac: e.target.value })}>
//             <option value={false}>Non-AC</option>
//             <option value={true}>AC</option>
//           </select><br />
//           <label>Start Date:</label>
//           <input type="date" onChange={handleStartDateChange} /><br />
//           <label>End Date:</label>
//           <input type="date" value={bookingDetails.enddate} readOnly /><br />
//           {/* <input type="time" onChange={(e) => setBookingDetails({ ...bookingDetails, startTime: e.target.value })} /><br />
//           <input type="time" onChange={(e) => setBookingDetails({ ...bookingDetails, endTime: e.target.value })} /><br /> */}
//           <p>Amount: {bookingDetails.amount} INR</p>
//           <button type="button" onClick={handlePayment} disabled={isPaymentDisabled}>Make Payment</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default StudyHallDetails;














//success payment code//



// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation, useParams } from 'react-router-dom';
// import axios from 'axios';
// import './css/StudyHallDetails.css';

// function StudyHallDetails() {
//   const { id: hallId } = useParams();
//   const location = useLocation();
//   const { user } = location.state || {};
//   const { name, email } = user || {};
//   const [isPaymentDisabled, setIsPaymentDisabled] = useState(true);
//   const navigate = useNavigate();
//   const [totalSeats, setTotalSeats] = useState();
//   const [availableSeats, setAvailableSeats] = useState(0);
//   const [bookedSeats, setBookedSeats] = useState([]);
//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const [studyHallName, setStudyHallName] = useState('');
//   const [address, setAddress] = useState('');
//   const [bookingDetails, setBookingDetails] = useState({
//     name: name || '',
//     email: email || '',
//     startdate: '',
//     enddate: '',
//     amount: '',
//      // Assuming ownerId is stored in user state
//   });

//   useEffect(() => {
//     const fetchStudyHallDetails = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/studyhall/${hallId}`);
//         const { seatcount, studyhallname, address, bookedSeats, amount } = response.data;
//         setStudyHallName(studyhallname);
//         setAddress(address);
//         setTotalSeats(seatcount);  // Initialize total seats
//         setAvailableSeats(seatcount - bookedSeats.length);
//         setBookedSeats(bookedSeats);
//         setBookingDetails(prev => ({ ...prev, amount }));
//       } catch (error) {
//         alert('Could not load study hall details. Please try again later.');
//       }
//     };

//     if (hallId) {
//       fetchStudyHallDetails();
//     }
//   }, [hallId]);

//   const handleSeatClick = (seatIndex) => {
//     if (!bookedSeats.includes(seatIndex)) {
//       setSelectedSeats(prev => 
//         prev.includes(seatIndex) ? prev.filter(seat => seat !== seatIndex) : [...prev, seatIndex]
//       );
//     }
//   };

//   const calculateEndDate = (startDate) => {
//     const date = new Date(startDate);
//     date.setMonth(date.getMonth() + 1);
//     return date.toISOString().split('T')[0];
//   };

//   const handleStartDateChange = (e) => {
//     const startdate = e.target.value;
//     const enddate = calculateEndDate(startdate);
//     setBookingDetails(prev => ({
//       ...prev,
//       startdate,
//       enddate
//     }));
//     setIsPaymentDisabled(!startdate);
//   };

//   const handlePayment = async () => {
//     if (selectedSeats.length === 0 || !bookingDetails.startdate) {
//       alert('Please select a seat and a start date.');
//       return;
//     }
//     const details = {
//       // ownerId: user.ownerId,
//       email: bookingDetails.email,
//       startdate: bookingDetails.startdate,
//       enddate: bookingDetails.enddate,
//       amount: bookingDetails.amount,
//     };

//     try {
//       const response = await axios.post(`http://localhost:5000/api/bookSeats/${hallId}`, {
//         selectedSeats,
//         bookingDetails:details
//       });

//       if (response.data) {
//         alert('Payment successful, seats have been booked.');
//         const newlyBookedSeats = [...selectedSeats]; // Assuming this is an array of seat indices
//     setBookedSeats(prev => [...prev, ...newlyBookedSeats]);
//     setSelectedSeats([]);
//     setAvailableSeats(prev => prev - newlyBookedSeats.length);
//     navigate('/');
//       }
//     } catch (error) {
//       console.error('Payment failed:', error);
//       alert('Payment failed. Please try again.');
//     }
//   };

//   return (
//     <div style={{ textAlign: 'center', marginTop: '20px' }}>
//       <h2>{studyHallName} - {address}</h2>
//       <div className='center-container'>
//         <div className='seat-container'>
//           {Array.from({ length: totalSeats }, (_, index) => (
//             <div
//               key={index + 1}
//               onClick={() => handleSeatClick(index + 1)}
//               className={`seat ${selectedSeats.includes(index + 1) ? 'selected' : ''} ${bookedSeats.includes(index + 1) ? 'booked' : ''}`}
//             >
//               {index + 1}
//             </div>
//           ))}
//         </div>
//       </div>
//       <p>No. of available seats: {availableSeats}</p>
//       <div className='box'>
//         <form className='box-container'>
//           <h2>Fill the Below Details</h2>
//           <label>Name:</label>
//           <input type="text" value={bookingDetails.name} readOnly /><br />
//           <label>Email:</label>
//           <input type="email" value={bookingDetails.email} readOnly /><br />
//           <label>Select AC/Non-AC:</label>
//           <select onChange={(e) => setBookingDetails({ ...bookingDetails, ac: e.target.value })}>
//             <option value={false}>Non-AC</option>
//             <option value={true}>AC</option>
//           </select><br />
//           <label>Start Date:</label>
//           <input type="date" onChange={handleStartDateChange} /><br />
//           <label>End Date:</label>
//           <input type="date" value={bookingDetails.enddate} readOnly /><br />
//           <p>Amount: {bookingDetails.amount} INR</p>
//           <button type="button" onClick={handlePayment} disabled={isPaymentDisabled}>Make Payment</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default StudyHallDetails;




//razorpay included code//

import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import './css/StudyHallDetails.css';

function StudyHallDetails() {
  const { id: hallId } = useParams();
  const location = useLocation();
  const { user } = location.state || {};
  const { name, email } = user || {};
  const [isPaymentDisabled, setIsPaymentDisabled] = useState(true);
  const navigate = useNavigate();
  const [totalSeats, setTotalSeats] = useState();
  const [availableSeats, setAvailableSeats] = useState(0);
  const [bookedSeats, setBookedSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [studyHallName, setStudyHallName] = useState('');
  const [address, setAddress] = useState('');
  const [bookingDetails, setBookingDetails] = useState({
    name: name || '',
    email: email || '',
    startdate: '',
    enddate: '',
    amount: '',
     // Assuming ownerId is stored in user state
  });

  useEffect(() => {
    const fetchStudyHallDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/studyhall/${hallId}`);
        const { seatcount, studyhallname, address, bookedSeats, amount } = response.data;
        setStudyHallName(studyhallname);
        setAddress(address);
        setTotalSeats(seatcount);  // Initialize total seats
        setAvailableSeats(seatcount - bookedSeats.length);
        setBookedSeats(bookedSeats);
        setBookingDetails(prev => ({ ...prev, amount }));
      } catch (error) {
        alert('Could not load study hall details. Please try again later.');
      }
    };

    if (hallId) {
      fetchStudyHallDetails();
    }
  }, [hallId]);

  const handleSeatClick = (seatIndex) => {
    if (!bookedSeats.includes(seatIndex)) {
      setSelectedSeats(prev => 
        prev.includes(seatIndex) ? prev.filter(seat => seat !== seatIndex) : [...prev, seatIndex]
      );
    }
  };

  const calculateEndDate = (startDate) => {
    const date = new Date(startDate);
    date.setMonth(date.getMonth() + 1);
    return date.toISOString().split('T')[0];
  };

  const handleStartDateChange = (e) => {
    const startdate = e.target.value;
    const enddate = calculateEndDate(startdate);
    setBookingDetails(prev => ({
      ...prev,
      startdate,
      enddate
    }));
    setIsPaymentDisabled(!startdate);
  };

  // const handlePayment = async () => {
  //   if (selectedSeats.length === 0 || !bookingDetails.startdate) {
  //     alert('Please select a seat and a start date.');
  //     return;
  //   }
  //   const details = {
  //     // ownerId: user.ownerId,
  //     email: bookingDetails.email,
  //     startdate: bookingDetails.startdate,
  //     enddate: bookingDetails.enddate,
  //     amount: bookingDetails.amount,
  //   };

  //   try {
  //     // Create the order on the server
  //     const orderResponse = await axios.post(`http://localhost:5000/v1/orders`, {
  //       amount: bookingDetails.amount,
  //       currency: 'INR',
  //       receipt: 'receipt#1',
  //       notes: {}
  //     });

  //     const { id: orderId, amount } = orderResponse.data;

  //     // Razorpay options
  //     const options = {
  //       key: 'rzp_live_0rW9CGohhZRlVK',  // Replace with your Razorpay key_id
  //       amount: amount,  // Amount in paise
  //       currency: 'INR',
  //       name: 'inviictusai',
  //       description: 'Seat Booking',
  //       order_id: orderId,
  //       handler: async (response) => {
  //         const paymentVerification = await axios.post(`http://localhost:5000/verify-payment`, {
  //           razorpay_order_id: response.razorpay_order_id,
  //           razorpay_payment_id: response.razorpay_payment_id,
  //           razorpay_signature: response.razorpay_signature
  //         });

  //         if (paymentVerification.data.status === 'ok') {
  //           alert('Payment successful, seats have been booked.');
  //           const newlyBookedSeats = [...selectedSeats]; 
  //           setBookedSeats(prev => [...prev, ...newlyBookedSeats]);
  //           setSelectedSeats([]);
  //           setAvailableSeats(prev => prev - newlyBookedSeats.length);
  //           navigate('/');
  //         } else {
  //           alert('Payment verification failed. Please try again.');
  //         }
  //       },
  //       prefill: {
  //         name: bookingDetails.name,
  //         email: bookingDetails.email,
  //       },
  //       theme: {
  //         color: '#F37254'
  //       }
  //     };

  //     const rzp = new window.Razorpay(options);
  //     rzp.open();
  //   } catch (error) {
  //     console.error('Payment failed:', error);
  //     alert('Payment failed. Please try again.');
  //   }
    
  // };


  const handlePayment = async () => {
    if (selectedSeats.length === 0 || !bookingDetails.startdate) {
      alert('Please select a seat and a start date.');
      return;
    }
  
    const details = {
      email: bookingDetails.email,
      startdate: bookingDetails.startdate,
      enddate: bookingDetails.enddate,
      amount: bookingDetails.amount,
    };
  
    try {
      // Create the order on the server
      const orderResponse = await axios.post(`http://localhost:5000/v1/orders`, {
        amount: bookingDetails.amount,
        currency: 'INR',
        receipt: 'receipt#1',
        notes: {}
      });
  
      const { id: orderId, amount } = orderResponse.data;
  
      // Razorpay options
      const options = {
        key: 'rzp_live_0rW9CGohhZRlVK',  // Replace with your Razorpay key_id
        amount: amount,  // Amount in paise
        currency: 'INR',
        name: 'inviictusai',
        description: 'Seat Booking',
        order_id: orderId,
        handler: async (response) => {
          // Verify payment
          const paymentVerification = await axios.post(`http://localhost:5000/verify-payment`, {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature
          });
  
          if (paymentVerification.data.status === 'ok') {
            // Payment is successful, now book the seats
            try {
              const bookResponse = await axios.post(`http://localhost:5000/api/bookSeats/${hallId}`, {
                selectedSeats,
                bookingDetails: details
              });
  
              if (bookResponse.data.success) {
                alert('Payment successful, seats have been booked and stored.');
                const newlyBookedSeats = [...selectedSeats]; // Freeze these seats
                
                setBookedSeats(prev => [...prev, ...newlyBookedSeats]);
                setSelectedSeats([]);
                setAvailableSeats(prev => prev - newlyBookedSeats.length);
                navigate('/');
              } else {
                alert('Failed to book seats in the database.');
              }
            } catch (error) {
              console.error('Booking seats failed:', error);
              alert('Failed to book the seats. Please try again.');
            }
          } else {
            alert('Payment verification failed. Please try again.');
          }
        },
        prefill: {
          name: bookingDetails.name,
          email: bookingDetails.email,
        },
        theme: {
          color: '#F37254'
        }
      };
  
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error('Payment initiation failed:', error);
      alert('Payment failed. Please try again.');
    }
  };
  
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>{studyHallName} - {address}</h2>
      <div className='center-container'>
        <div className='seat-container'>
          {Array.from({ length: totalSeats }, (_, index) => (
            <div
              key={index + 1}
              onClick={() => handleSeatClick(index + 1)}
              className={`seat ${selectedSeats.includes(index + 1) ? 'selected' : ''} ${bookedSeats.includes(index + 1) ? 'booked' : ''}`}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>
      <p>No. of available seats: {availableSeats}</p>
      <div className='box'>
        <form className='box-container'>
          <h2>Fill the Below Details</h2>
          <label>Name:</label>
          <input type="text" value={bookingDetails.name} readOnly /><br />
          <label>Email:</label>
          <input type="email" value={bookingDetails.email} readOnly /><br />
          <label>Select AC/Non-AC:</label>
          <select onChange={(e) => setBookingDetails({ ...bookingDetails, ac: e.target.value })}>
            <option value={false}>Non-AC</option>
            <option value={true}>AC</option>
          </select><br />
          <label>Start Date:</label>
          <input type="date" onChange={handleStartDateChange} /><br />
          <label>End Date:</label>
          <input type="date" value={bookingDetails.enddate} readOnly /><br />
          <p>Amount: {bookingDetails.amount} INR</p>
          <button type="button" onClick={handlePayment} disabled={isPaymentDisabled}>Make Payment</button>
        </form>
      </div>
    </div>
  );
}

export default StudyHallDetails;




