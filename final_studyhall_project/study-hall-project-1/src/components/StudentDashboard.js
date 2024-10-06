// import React from 'react';
// import  { useEffect, useState } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import axios from 'axios';

// function StudentDashboard() {
//   const navigate = useNavigate();
  
//   const location = useLocation();
//   const { user } = location.state || {};
//    // Retrieve user data from location.state

//   const [studyHalls, setStudyHalls] = useState([])
//     // { id: 1, name: 'Vasavi Study Hall', location: 'Ameerpet', seats: 100, type: 'AC' },
//     // { id: 2, name: 'Oxford Study Hall', location: 'Madhapur', seats: 150, type: 'Non-AC' },
//     // Add more study halls as needed
//     // { id: 1, name: 'Vasavi Study Hall', location: 'Ameerpet', seats: 100, ac: true },
//     // { id: 2, name: 'Bharathi Study Hall', location: 'Kukatpally', seats: 80, ac: false },
//     // { id: 3, name: 'Sri Chaitanya Study Hall', location: 'Madhapur', seats: 120, ac: true },
//     // { id: 4, name: 'Narayana Study Hall', location: 'Gachibowli', seats: 90, ac: false },
//   ;
//   useEffect(() => {
//     // Fetch study halls when the component mounts
//     const fetchStudyHalls = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/studyhalls');
//         console.log('Fetched study halls:', response.data);
//         setStudyHalls(response.data); // Set fetched data to state
//       } catch (error) {
//         console.error('Failed to fetch study halls:', error);
//       }
//     };

//     fetchStudyHalls();
//   }, []);

//   const handleCardClick = (id) => {
//     // Navigate to the details page and pass the user data along with the hall id
    
//     navigate(`/details/${id}`, { state: {user} });
//   };
//   return (
    
//     <div>
//       <div style={{ textAlign: 'center', padding: '20px' }}>
//         <h2>Student Dashboard</h2>
//         <div style={{ marginBottom: '20px' }}>
//           <button>AC</button>
//           <button>Non-AC</button>
//           <button>Sort by</button>
//           <button>Location</button>
//         </div>
//         <div>
          
//         {studyHalls.length > 0 ? (
//         studyHalls.map((hall) => (
//           <div className='box-container-id'
//             key={hall.id}
//             onClick={() => handleCardClick(hall.id, hall.studyhallname, hall.address)}
//             style={{
//               border: '1px solid #ccc',
//               margin: '10px',
//               padding: '10px',
//               cursor: 'pointer'
//             }}
//           >
//             <h3>{hall.studyhallname}</h3>
//             <p>address: {hall.address}</p>
//             <p>Seats Available: {hall.seatcount}</p>
//             </div>
        
//         ))
//       ):(
//         <p>No study halls available.</p>
//       )}
//         </div>
//       </div>
//     </div>
//   );
  
// }

// export default StudentDashboard;









//new code after applying filter//


// import React, { useEffect, useState } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import axios from 'axios';
// import './css/StudentDashboard.css'

// function StudentDashboard() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { user } = location.state || {}; // Retrieve user data from location.state

//   const [studyHalls, setStudyHalls] = useState([]);
//   const [filterLocation, setFilterLocation] = useState(''); // State to hold the selected location
//   const [locations, setLocations] = useState([]); // State to hold distinct locations

//   useEffect(() => {
//     // Fetch study halls when the component mounts
//     const fetchStudyHalls = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/studyhalls');
//         const studyHallsData = response.data;

//         // Sort study halls in ascending order by study hall name
//         const sortedStudyHalls = studyHallsData.sort((a, b) =>
//           a.studyhallname.localeCompare(b.studyhallname)
//         );

//         setStudyHalls(sortedStudyHalls);

//         // Extract distinct locations for the dropdown
//         const distinctLocations = [...new Set(studyHallsData.map(hall => hall.address))];
//         setLocations(distinctLocations); // Set distinct locations to state
//       } catch (error) {
//         console.error('Failed to fetch study halls:', error);
//       }
//     };

//     fetchStudyHalls();
//   }, []);

//   const handleCardClick = (id) => {
//     // Navigate to the details page and pass the user data along with the hall id
//     navigate(`/details/${id}`, { state: { user } });
//   };

//   // Filter study halls by location
//   const filteredStudyHalls = studyHalls.filter((hall) => 
//     filterLocation === '' || hall.address === filterLocation
//   );

//   return (
//     <div style={{marginLeft:'50px', marginRight:'50px'}}>
//       <div style={{ padding: '20px' }}>
//         <h2 className='text-center'>Student Dashboard</h2>
        
//         {/* Dropdown for filtering by location */}
//         <div style={{ marginBottom: '20px' }}>
//           <select
//             value={filterLocation}
//             onChange={(e) => setFilterLocation(e.target.value)} // Update filter state
//             style={{ padding: '10px', width: '200px' }}
//           >
//             <option value="">Select Location</option>
//             {locations.map((location, index) => (
//               <option key={index} value={location}>
//                 {location}
//               </option>
//             ))}
//           </select>

//           <button 
//             onClick={() => setFilterLocation('')} 
//             style={{ marginLeft: '10px', padding: '10px' }}
//           >
//             Clear Filter
//           </button>
//         </div>

//         {/* Display study halls based on the filter */}
//         <div >
//           {filteredStudyHalls.length > 0 ? (
//             filteredStudyHalls.map((hall) => (
//               <div
//                 className="box-container-id d-flex flex-column justify-content-center" 
//                 key={hall.id}
//                 onClick={() => handleCardClick(hall.id)}
//                 style={{
//                   border: '1px solid #ccc',
//                   margin: '10px',
//                   padding: '10px',
//                   width: '800px',
//                   cursor: 'pointer',
//                 }}
//               >
//                 <h3>{hall.studyhallname}</h3>
//                 <p>Address: {hall.address}</p>
//                 <p>Seats Available: {hall.seatcount}</p>
//               </div>
//             ))
//           ) : (
//             <p>No study halls available.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default StudentDashboard;









import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import './css/StudentDashboard.css'

function StudentDashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = location.state || {}; // Retrieve user data from location.state

  const [studyHalls, setStudyHalls] = useState([]);
  const [filterLocation, setFilterLocation] = useState(''); // State to hold the selected location
  const [locations, setLocations] = useState([]); // State to hold distinct locations

  useEffect(() => {
    // Fetch study halls when the component mounts
    const fetchStudyHalls = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/studyhalls');
        const studyHallsData = response.data;

        // Sort study halls in ascending order by study hall name
        const sortedStudyHalls = studyHallsData.sort((a, b) =>
          a.studyhallname.localeCompare(b.studyhallname)
        );

        setStudyHalls(sortedStudyHalls);

        // Extract distinct locations for the dropdown
        const distinctLocations = [...new Set(studyHallsData.map(hall => hall.address))];
        setLocations(distinctLocations); // Set distinct locations to state
      } catch (error) {
        console.error('Failed to fetch study halls:', error);
      }
    };

    fetchStudyHalls();
  }, []);

  const handleCardClick = (id) => {
    // Navigate to the details page and pass the user data along with the hall id
    navigate(`/details/${id}`, { state: { user } });
  };

  // Filter study halls by location
  const filteredStudyHalls = studyHalls.filter((hall) => 
    filterLocation === '' || hall.address === filterLocation
  );

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <h2 className='text-center'>Student Dashboard</h2>
        
        {/* Dropdown for filtering by location */}
        <div className="filter-container">
          <select
            value={filterLocation}
            onChange={(e) => setFilterLocation(e.target.value)} // Update filter state
            style={{ padding: '10px', width: '200px' }}
          >
            <option value="">Select Location</option>
            {locations.map((location, index) => (
              <option key={index} value={location}>
                {location}
              </option>
            ))}
          </select>

          <button 
            onClick={() => setFilterLocation('')} 
            style={{ marginLeft: '10px', padding: '10px' }}
          >
            Clear Filter
          </button>
        </div>

        {/* Display study halls based on the filter */}
        <div className="studyhall-list">
          {filteredStudyHalls.length > 0 ? (
            filteredStudyHalls.map((hall) => (
              <div
                className="box-container-id" 
                key={hall.id}
                onClick={() => handleCardClick(hall.id)}
              >
                <h3>{hall.studyhallname}</h3>
                <p>Address: {hall.address}</p>
                <p>Seats Available: {hall.availableSeats}</p>
                <hr/>
                <div className="amenities">
          <div className="amenity">
            <i className="fas fa-parking"></i> Parking
          </div>
          <div className="amenity">
            <i className="fas fa-cookie-bite"></i> Snacks
          </div>
          <div className="amenity">
            <i className="fas fa-wifi"></i> WiFi
          </div>
        </div>
      </div>
             
            ))
          ) : (
            <p>No study halls available.</p>

            
          )}
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
