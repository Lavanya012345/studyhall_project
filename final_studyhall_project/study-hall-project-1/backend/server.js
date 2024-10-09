// const express = require('express');
// const { Pool } = require('pg');
// const cors = require('cors');
// require('dotenv').config();

// const app = express();
// const port = process.env.PORT || 5000;

// app.use(cors());
// app.use(cors({
//   origin: 'http://localhost:3000',
//   methods: ['GET', 'POST'],
//   credentials: true
// }));

// app.use(express.json());

// // Database connection
// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
// });

// // Sample route to fetch users
// // app.get('/api/users', async (req, res) => {
// //   try {
// //     const result = await pool.query('SELECT * FROM users');
// //     res.json(result.rows);
// //   } catch (err) {
// //     console.error(err.message);
// //     res.status(500).send('Server error');
// //   }
// // });
// app.get('/api/signup', (req, res) => {
//   res.status(405).send('Method Not Allowed');
// });

// function validateUserData(data) {
//   if (!data.name || !data.email || !data.password) {
//     return false;
//   }
//   return true;
// }

// // server.js
// // app.post('/api/login', async (req, res) => {
// //   try {
// //     const { email, password } = req.body;
// //     // Authenticate user using your database or authentication mechanism
// //     const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
// //     if (user.rows.length === 0 || !user.rows[0].password === password) {
// //       res.status(401).send('Invalid credentials');
// //     } else {
// //       res.json({ success: true });
// //     }
// //   } catch (err) {
// //     console.error(err.message);
// //     res.status(500).send('Server error');
// //   }
// // });

// // app.post('/api/signup', async (req, res) => {
// //   try {
// //     const { name, email, password } = req.body;
// //     // Create a new user in your database
// //     await pool.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3)', [name, email, password]);
// //     res.json({ success: true });
// //   } catch (err) {
// //     console.error(err.message);
// //     res.status(500).send('Server error');
// //   }
// // });
// app.post('/api/signup', async (req, res) => {
//   try {
//     const userData = req.body;
//     if (!validateUserData(userData)) {
//       res.status(400).send('Invalid user data');
//       return;
//     }
//     const { name, email, password } = userData;
//     await pool.query('INSERT INTO logindata (name, email, password) VALUES ($1, $2, $3)', [name, email, password]);
//     res.json({ success: true });
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server error');
//   }
// });

// // Login a user
// app.post('/api/login', async (req, res) => {
//   try {
//     const userData = req.body;
//     if (!userData.email || !userData.password) {
//       res.status(400).send('Invalid user data');
//       return;
//     }
//     const { email, password } = userData;
//     const user = await pool.query('SELECT * FROM logindata WHERE email = $1', [email]);
//     if (user.rows.length === 0 || !user.rows[0].password === password) {
//       res.status(401).send('Invalid credentials');
//     } else {
//       res.json({ success: true });
//     }
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server error');
//   }
// });
// // Start server
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });


// // can u analysi this server.js file?
// //// can u analysi this server.js file?











//new-200-resolved//

// const express = require('express');
// const path = require('path');
// const { Pool } = require('pg');
// require('dotenv').config();

// const app = express();
// const cors = require('cors');
// app.use(cors());
// const port = process.env.PORT || 5000;

// // Database connection
// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
// });

// // Serve static files from the React app
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// // Serve React frontend
// // app.get('*', (req, res) => {
// //   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// // });

// // Handle form submission directly in the server
// // app.post('/api/login', async (req, res) => {
// //   try {
// //     const { email, password } = req.body;
// //     const user = await pool.query('SELECT * FROM logindata WHERE email = $1', [email]);
// //     if (user.rows.length === 0 || user.rows[0].password !== password) {
// //       res.redirect('Error');  // Redirect with error query
// //     } else {
// //       // res.redirect('Success');  // Redirect to dashboard on success

      
// //       return res.status(200).json({ success: true, redirectUrl: '/dashboard' });

      
      
// //     }
// //   } catch (err) {
// //     console.error(err.message);
// //     res.status(500).send('Server error');
// //   }
// // });

// // app.post('/api/signup', async (req, res) => {
// //   try { 
// //     console.log(req)
// //     const { name, email, password } = req.body;
    
// //     await pool.query('INSERT INTO logindata (name, email, password) VALUES ($1, $2, $3)', [name, email, password]);
// //     res.redirect('/?signup=success');  // Redirect with signup success query
// //   } catch (err) {
// //     console.error(err.message);
// //     res.status(500).send('Server error');
// //   }
// // });





// app.post('/api/login', async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await pool.query('SELECT * FROM logindata WHERE email = $1', [email]);
//     if (user.rows.length === 0 || user.rows[0].password !== password) {
//       return res.status(401).json({ success: false, message: 'Invalid credentials' });
//     }
//     res.status(200).json({ success: true });
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).json({ success: false, message: 'Server error' });
//   }
// });

// app.post('/api/signup', async (req, res) => {
//   try {
//     const { name, email, password } = req.body;
//     await pool.query('INSERT INTO logindata (name, email, password) VALUES ($1, $2, $3)', [name, email, password]);
//     res.status(201).json({ success: true });
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).json({ success: false, message: 'Server error' });
//   }
// });

// // Catch-all handler to send back React's index.html for any requests
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });










//final code//

//   const express = require('express');
//   const cors = require('cors');
//   const bodyParser = require('body-parser');
//   const bcrypt = require('bcryptjs');
//   const { Pool } = require('pg');

//   const app = express();
//   app.use(cors());
//   app.use(bodyParser.json());
//   app.use(express.json());

//   app.use(cors({
//     origin: 'http://localhost:3000', // or wherever your frontend is running
//     methods: ['GET', 'POST']
//   }));
//   const pool = new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'UserLogin',
//     password: 'Lava@123',
//     port: 5432,
//   });

//   //LoginSignUP//
//   app.post('/api/signup', async (req, res) => {
//     const { name, email, password } = req.body;
//     const hashedPassword = await bcrypt.hash(password, 10);

//     try {
//       const result = await pool.query(
//         'INSERT INTO loginsignup (name, email, password) VALUES ($1, $2, $3) RETURNING *',
//         [name, email, hashedPassword]
//       );
//       res.status(201).json(result.rows[0]);
//     } catch (error) {
//       res.status(500).json({ error: 'Database error' });
//     }
//   });


//   app.post('/api/login', async (req, res) => {
//     const { email, password } = req.body;

//     try {
//       const result = await pool.query('SELECT * FROM loginsignup WHERE email = $1', [email]);
//       if (result.rows.length > 0) {
//         const user = result.rows[0];
//         const validPassword = await bcrypt.compare(password, user.password);
//         if (validPassword) {
//           const { password, ...userData } = user;
//           res.status(200).json({ message: 'Login successful',  user: userData });
//         } else {
//           res.status(401).json({ error: 'Invalid credentials' });
//         }
//       } else {
//         res.status(401).json({ error: 'Invalid credentials' });
//       }
//     } catch (error) {
//       res.status(500).json({ error: 'Database error' });
//     }
//   });


//   //registerOwner//

//   app.post('/api/register', async (req, res) => {
//     const { name, studyhallname,seatcount, mobile, email, address, password} = req.body;
//     console.log('Received data:', req.body);
//     try {
//       // Hash the password before storing it in the database
//       const hashedPassword = await bcrypt.hash(password, 10);

//       // Insert the owner data into the registerowner table
//       const result = await pool.query(
//         'INSERT INTO registerowner (name, studyhallname, seatcount, mobile, address, email, password) VALUES ($1, $2, $3, $4, $5, $6,$7) RETURNING *',
//         [name, studyhallname, seatcount,mobile, address,email, hashedPassword]
//       );
//       console.log('Database insert result:', result.rows[0]);

//       res.status(201).json(result.rows[0]); // Return the newly created record
//     } catch (error) {
//       console.error('Database error:',error.message);
//       res.status(500).json({ error: 'Database error' });
//     }
//   });

//   app.post('/api/owner-login', async (req, res) => {
//     const { email, password } = req.body;

//     try {
//       const result = await pool.query('SELECT * FROM registerowner WHERE email = $1', [email]);
//       if (result.rows.length > 0) {
//         const owner = result.rows[0];
//         const validPassword = await bcrypt.compare(password, owner.password);
//         if (validPassword) {
//           const { password, ...ownerData } = owner;
//           res.status(200).json({ message: 'Login successful',  owner: ownerData });
//         } else {
//           res.status(401).json({ error: 'Invalid credentials' });
//         }
//       } else {
//         res.status(401).json({ error: 'Invalid credentials' });
//       }
//     } catch (error) {
//       res.status(500).json({ error: 'Database error' });
//     }
//   });

//   // Fetch all study halls
//   // app.get('/api/studyhalls', async (req, res) => {
//   //   try {
//   //     const result = await pool.query('SELECT id, studyhallname, address, seatcount FROM registerowner');
//   //     res.status(200).json(result.rows);
//   //   } catch (error) {
//   //     res.status(500).json({ error: 'Database error' });
//   //   }
//   // });

//   app.get('/api/studyhalls', async (req, res) => {
//   try {
//     const result = await pool.query(`
//        SELECT r.id, r.studyhallname, r.address, r.seatcount, 
//         r.seatcount - COALESCE((SELECT COUNT(*) FROM seat_bookings WHERE hall_id = r.id), 0) AS availableseats
//       FROM registerowner r
      
//     `);
//     res.status(200).json(result.rows);
//   } catch (error) {
//     res.status(500).json({ error: 'Database error' });
//   }
// });

//   //Fetching NO.of seats //
//   // Endpoint to save seat count and study hall details
//   // app.post('/api/seats_count', async (req, res) => {
//   //   const {studyhallname, monthly_amount1, monthly_amount2 } = req.body;
    
//   //   try {
//   //     const result = await pool.query(
//   //       'INSERT INTO seats_count (studyhallname, monthly_amount1, monthly_amount2) VALUES ($1, $2, $3) RETURNING *',
//   //       [studyhallname, monthly_amount1, monthly_amount2]
//   //     );
//   //     res.status(201).json(result.rows[0]); // Return the newly inserted row
//   //   } catch (error) {
//   //     console.error('Database error:', error.message);
//   //     res.status(500).json({ error: 'Database error' });
//   //   }
//   // });



//   // Endpoint to get study hall details by ID
//   // app.get('/api/studyhall/:id', async (req, res) => {
//   //   const { id } = req.params;

//   //   try {
//   //     const result = await pool.query('SELECT * FROM registerowner WHERE id = $1', [id]);
      
      
//   //     if (result.rows.length > 0) {
//   //       res.status(200).json(result.rows[0]);
//   //     } else {
//   //       res.status(404).json({ error: 'Study hall not found' });
//   //     }
//   //   } catch (error) {
//   //     console.error('Database error:', error.message);
//   //     res.status(500).json({ error: 'Database error' });
//   //   }
//   // });

//   app.get('/api/studyhall/:id', async (req, res) => {
//     const { id } = req.params;

//     try {
//       const studyHallResult = await pool.query('SELECT * FROM registerowner WHERE id = $1', [id]);
//       const bookedSeatsResult = await pool.query('SELECT seat_index FROM seat_bookings WHERE hall_id = $1', [id]);
//       const amountResult = await pool.query('SELECT amount FROM seats_count WHERE studyhallname = $1 LIMIT 1', [studyHallResult.rows[0].studyhallname]);
//       const availableSeats = studyHallResult.rows[0].seatcount - bookedSeatsResult.rows.length;
//       if (amountResult.rows.length === 0) {
//         return res.status(404).json({ error: 'Seats count not found for this study hall' });
//       }
      
//         res.status(200).json({
//           ...studyHallResult.rows[0],
//           bookedSeats: bookedSeatsResult.rows.map(row => row.seat_index), // Array of booked seat indices
//           availableSeats,
//           amount: amountResult.rows[0].amount, // Include the amount from the 'seats_count' table
//         });
      
//     } catch (error) {
//       console.error('Database error:', error.message);
//       res.status(500).json({ error: 'Database error' });
//     }
//   });


//   //seatbooking//
//   // app.post('/api/bookSeats/:hallId', async (req, res) => {
//   //   const { hallId } = req.params;
//   //   const { selectedSeats, bookingDetails } = req.body; // Seat indices and booking info

//   //   try {
//   //     for (const seatNumber of selectedSeats) {
//   //       await pool.query(
//   //         'INSERT INTO seat_bookings (owner_id, hall_id, seat_index, user_email,startdate, enddate, amount) VALUES ($1, $2, $3, $4, $5, $6, $7)',
//   //         [bookingDetails.ownerId, hallId, seatNumber, bookingDetails.email, bookingDetails.startdate, bookingDetails.enddate, bookingDetails.amount]
//   //       );
//   //     }
//   //     // const seatCountResult = await pool.query(
//   //     //   'SELECT seatcount FROM registerowner WHERE id = $1',
//   //     //   [hallId]
//   //     // );
      
//   //     // const currentSeatCount = seatCountResult.rows[0].seatcount;
//   //     // const newSeatCount = currentSeatCount - selectedSeats.length;

//   //     // await pool.query(
//   //     //   'UPDATE registerowner SET seatcount = $1 WHERE id = $2',
//   //     //   [newSeatCount, hallId]
//   //     // );

//   //     res.status(200).json({ message: 'Seats booked successfully!' });
//   //   } catch (error) {
//   //     console.error('Booking failed:', error);
//   //     res.status(500).json({ error: 'Database error while booking seats' });
//   //   }
//   // });


//   app.post('/api/bookSeats/:hallId', async (req, res) => {
//     const { hallId } = req.params;
//     const { selectedSeats, bookingDetails } = req.body; // Seat indices and booking info

//     try {
//       for (const seatNumber of selectedSeats) {
//         await pool.query(
//           'INSERT INTO seat_bookings (hall_id, seat_index, user_email,startdate, enddate, amount) VALUES ($1, $2, $3, $4, $5, $6)',
//           [hallId, seatNumber, bookingDetails.email, bookingDetails.startdate, bookingDetails.enddate, bookingDetails.amount]
//         );
//       }
//       // const seatCountResult = await pool.query(
//       //   'SELECT seatcount FROM registerowner WHERE id = $1',
//       //   [hallId]
//       // );
      
//       // const currentSeatCount = seatCountResult.rows[0].seatcount;
//       // const newSeatCount = currentSeatCount - selectedSeats.length;

//       // await pool.query(
//       //   'UPDATE registerowner SET seatcount = $1 WHERE id = $2',
//       //   [newSeatCount, hallId]
//       // );

//       res.status(200).json({ message: 'Seats booked successfully!' });
//     } catch (error) {
//       console.error('Booking failed:', error);
//       res.status(500).json({ error: 'Database error while booking seats' });
//     }
//   });



//   // app.post('/api/bookSeats/:hallId', async (req, res) => {
//   //   const { hallId } = req.params;
//   //   const { selectedSeats, bookingDetails } = req.body;

//   //   console.log("Received:", { hallId, selectedSeats, bookingDetails });

    
//   //   if (!selectedSeats || !Array.isArray(selectedSeats) || selectedSeats.length === 0) {
//   //     return res.status(400).json({ error: 'Selected seats are missing or invalid.' });
//   //   }

//   //   if (!bookingDetails || !bookingDetails.startdate || !bookingDetails.enddate || !bookingDetails.amount  || !bookingDetails.ownerId){
//   //     return res.status(400).json({ error: 'Booking details are incomplete.' });
//   //   }
    
//   //   try {

//   //     // Ensure none of the selected seats are already booked
//   //     // await pool.query('BEGIN');
//   //     const existingBookings = await pool.query('SELECT seat_index FROM seat_bookings WHERE hall_id = $1 AND seat_index = ANY($2)', [hallId, selectedSeats]);
      
//   //     if (existingBookings.rows.length > 0) {
//   //       await pool.query('ROLLBACK');
//   //       const bookedSeats = existingBookings.rows.map(row => row.seat_index);
//   //       return res.status(400).json({ error: 'Some seats are already booked.', bookedSeats });
//   //     }

//   //     // Insert seat bookings
//   //     for (const seatNumber of selectedSeats) {
//   //       await pool.query(
//   //         'INSERT INTO seat_bookings (owner_id, hall_id, seat_index, user_email,amount, startdate, enddate) VALUES ($1, $2, $3, $4, $5, $6, $7)',
//   //         [bookingDetails.ownerId, hallId, seatNumber, bookingDetails.email, bookingDetails.amount, bookingDetails.startdate, bookingDetails.enddate]
//   //       );
//   //     }
//   //     // await pool.query('BEGIN');

//   //     // const insertQuery = 'INSERT INTO seat_bookings (owner_id, hall_id, seat_index, user_email, amount, startdate, enddate) VALUES ($1, $2, $3, $4, $5, $6, $7)';
//   //     // for (const seatIndex of selectedSeats) {
//   //     //   await pool.query(insertQuery, [
//   //     //     bookingDetails.ownerId,
//   //     //     hallId,
//   //     //     seatIndex,
//   //     //     bookingDetails.email,
//   //     //     bookingDetails.amount,
//   //     //     bookingDetails.startdate,
//   //     //     bookingDetails.enddate
//   //     //   ]);
//   //     // }
//   //     // await pool.query('COMMIT');
//   //     res.status(200).json({ message: 'Seats booked successfully!' });
//   //   } catch (error) {
//   //     // await pool.query('ROLLBACK');
//   //     console.error('Booking failed:', error);
//   //     res.status(500).json({ error: 'Database error while booking seats' });
//   //   }
//   // });
//   // app.post('/api/bookSeats/:hallId', async (req, res) => {
//   //   const { hallId } = req.params;
//   //   const { selectedSeats, bookingDetails } = req.body;
//   //   console.log("Booking request received:", req.body);
//   //   if (!req.body.selectedSeats || req.body.selectedSeats.length === 0) {
//   //     console.log("Error: No seats selected.");
//   //     return res.status(400).json({ error: 'No seats selected.' });
//   //   }

//   //   if (!req.body.bookingDetails || !req.body.bookingDetails.startdate) {
//   //     console.log("Error: Booking details incomplete.", req.body.bookingDetails);
//   //     return res.status(400).json({ error: 'Booking details are incomplete.' });
//   //   }

//   //   try {
//   //     const existingBookings = await pool.query(
//   //       'SELECT seat_index FROM seat_bookings WHERE hall_id = $1 AND seat_index = ANY($2)',
//   //       [hallId, selectedSeats]
//   //     );

//   //     if (existingBookings.rows.length > 0) {
//   //       return res.status(400).json({ error: 'One or more selected seats are already booked.' });
//   //     }

//   //     // Begin a transaction
//   //     await pool.query('BEGIN');

//   //     const bookings = selectedSeats.map(seatIndex =>
//   //       pool.query(
//   //         'INSERT INTO seat_bookings (hall_id, seat_index, user_email, amount, start_date, end_date) VALUES ($1, $2, $3, $4, $5, $6)',
//   //         [hallId, seatIndex, bookingDetails.email, bookingDetails.amount, bookingDetails.startdate, bookingDetails.enddate]
//   //       )
//   //     );

//   //     await Promise.all(bookings);

//   //     // Update the seat count in 'registerowner'
//   //     await pool.query(
//   //       'UPDATE registerowner SET seatcount = seatcount - $1 WHERE id = $2',
//   //       [selectedSeats.length, hallId]
//   //     );

//   //     await pool.query('COMMIT');

//   //     res.status(200).json({ message: 'Seats booked successfully!' });
//   //   } catch (error) {
//   //     await pool.query('ROLLBACK');
//   //     console.error('Booking failed:', error);
//   //     res.status(500).json({ error: 'Database error while booking seats' });
//   //   }
//   // });



//   //storing amount value//
//   // app.post('/api/seats_count', async (req, res) => {
//   //   const { studyhallname, monthly_amount1, num_seats, ownerId } = req.body;

//   //   if (!studyhallname || !monthly_amount1 || !num_seats || !ownerId) {
//   //     return res.status(400).json({ error: 'Please provide all required fields.' });
//   //   }

//   //   try {
//   //     const query = `
//   //       INSERT INTO seats_count (studyhallname, monthly_amount1,  num_seats, owner_id)
//   //       VALUES ($1, $2, $3, $4)
//   //       RETURNING id;
//   //     `;
//   //     const values = [studyhallname, monthly_amount1, num_seats, ownerId];
//   //     const result = await pool.query(query, values);

//   //     res.status(201).json({ message: 'Study hall details saved successfully', id: result.rows[0].id });
//   //   } catch (err) {
//   //     console.error('Error saving study hall details:', err);
//   //     res.status(500).json({ error: 'Internal server error' });
//   //   }
//   // });

//   // app.post('/api/seats_count', async (req, res) => {
//   //   console.log('Received Body:', req.body);
//   //   const { monthly_amount1 } = req.body;
//   //   // console.log('Monthly Amount1:', monthly_amount1);
//   //   if (!monthly_amount1 || isNaN(Number(monthly_amount1))) {
      
//   //     console.error('Invalid field: monthly_amount1:', monthly_amount1);
//   //     return res.status(400).json({ error: 'Please provide a valid amount.' });
//   //   }

//   //   try {
//   //     const query = `
//   //       INSERT INTO seats_count (monthly_amount1)
//   //       VALUES ($1);
//   //       ;
//   //     `;
//   //     const values = [parseInt(monthly_amount1)];
//   //     await pool.query(query, values);

//   //     res.status(201).json({ message: 'Study hall details saved successfully' });
//   //   } catch (err) {
//   //     console.error('Error saving study hall details:', err);
//   //     res.status(500).json({ error: 'Internal server error' });
//   //   }
//   // });


//   app.post('/api/seats_count', async (req, res) => {
//     const { studyhallname, amount , num_seats} = req.body;
//     console.log("Received data:", { studyhallname, amount, num_seats }); 
//     // if (!studyhallname|| isNaN(parseInt(amount)) || !num_seats) {
//     //   return res.status(400).json({ error: 'Invalid amount provided' });
//     // }
//     if (!studyhallname) {
//       return res.status(400).json({ error: 'Studyhall name is missing' });
//     }
//     if (!amount || isNaN(Number(amount))) {
//       return res.status(400).json({ error: 'Amount is missing or invalid' });
//     }
//     if (!num_seats || isNaN(Number(num_seats))) {
//       return res.status(400).json({ error: 'Number of seats is missing or invalid' });
//     }
//     const query = 'INSERT INTO seats_count (studyhallname, amount, num_seats) VALUES ($1, $2, $3) RETURNING *';
//     console.log("Executing query:", query, [studyhallname, amount, num_seats]);
//     try {
//       // Insert the amount into the new owner_amounts table
//       // const result = await pool.query(
        
//       //   'INSERT INTO seats_count (studyhallname, amount, num_seats) VALUES ($1, $2, $3) RETURNING *',
//       //   [studyhallname,parseInt(amount), parseInt(num_seats)]
//       // );
     
    
//     const result = await pool.query(query, [studyhallname, parseInt(amount), parseInt(num_seats)]);
//     res.status(201).json({ message: 'Study hall details saved successfully', data: result.rows[0] });

//       // res.status(201).json({ message: 'Monthly amount saved successfully', data: result.rows[0] });
//     } catch (error) {
//       console.error('Error saving amount:', error.message);
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   });


// //code for analystics//
// // API endpoint to fetch booking data for analysis
// app.get('/api/booking-data', async (req, res) => {
//   try {
//     const result = await pool.query('SELECT * FROM seat_bookings');
//     res.json(result.rows);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Error fetching data');
// }
// });


//   const PORT = 5000;
//   app.listen(PORT, () => console.log(`Server running on port ${PORT}`));







//razor pay included code//
const Razorpay = require('razorpay'); 
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const { Pool } = require('pg');

const fs = require('fs');
const path = require('path');
const { validateWebhookSignature } = require('razorpay/dist/utils/razorpay-utils');

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));

app.use(cors({
  origin: 'http://localhost:3000', // or wherever your frontend is running
  methods: ['GET', 'POST', 'PUT'],
  allowedHeaders: ['Content-Type'],
}));
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'UserLogin',
  password: 'Lava@123',
  port: 5432,
});



const razorpay = new Razorpay({
  key_id: 'rzp_live_0rW9CGohhZRlVK',
  key_secret: 'NL5UdQRbPlC45yuss8vRfy4s',
});


const readData = () => {
  if (fs.existsSync('orders.json')) {
    const data = fs.readFileSync('orders.json');
    return JSON.parse(data);
  }
  return [];
};

// Function to write orders to a file
const writeData = (data) => {
  fs.writeFileSync('orders.json', JSON.stringify(data, null, 2));
};

// Initialize orders.json if not present
if (!fs.existsSync('orders.json')) {
  writeData([]);
}



//LoginSignUP//
app.post('/api/signup', async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const result = await pool.query(
      'INSERT INTO loginsignup (name, email, password) VALUES ($1, $2, $3) RETURNING *',
      [name, email, hashedPassword]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
});


app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query('SELECT * FROM loginsignup WHERE email = $1', [email]);
    if (result.rows.length > 0) {
      const user = result.rows[0];
      const validPassword = await bcrypt.compare(password, user.password);
      if (validPassword) {
        const { password, ...userData } = user;
        res.status(200).json({ message: 'Login successful',  user: userData });
      } else {
        res.status(401).json({ error: 'Invalid credentials' });
      }
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
});


//registerOwner//

app.post('/api/register', async (req, res) => {
  const { name, studyhallname,seatcount, mobile, email, address, password} = req.body;
  console.log('Received data:', req.body);
  try {
    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the owner data into the registerowner table
    const result = await pool.query(
      'INSERT INTO registerowner (name, studyhallname, seatcount, mobile, address, email, password) VALUES ($1, $2, $3, $4, $5, $6,$7) RETURNING *',
      [name, studyhallname, seatcount,mobile, address,email, hashedPassword]
    );
    console.log('Database insert result:', result.rows[0]);

    res.status(201).json(result.rows[0]); // Return the newly created record
  } catch (error) {
    console.error('Database error:',error.message);
    res.status(500).json({ error: 'Database error' });
  }
});

app.post('/api/owner-login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query('SELECT * FROM registerowner WHERE email = $1', [email]);
    if (result.rows.length > 0) {
      const owner = result.rows[0];
      const validPassword = await bcrypt.compare(password, owner.password);
      if (validPassword) {
        const { password, ...ownerData } = owner;
        res.status(200).json({ message: 'Login successful',  owner: ownerData });
      } else {
        res.status(401).json({ error: 'Invalid credentials' });
      }
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
});

// Fetch all study halls
// app.get('/api/studyhalls', async (req, res) => {
//   try {
//     const result = await pool.query('SELECT id, studyhallname, address, seatcount FROM registerowner');
//     res.status(200).json(result.rows);
//   } catch (error) {
//     res.status(500).json({ error: 'Database error' });
//   }
// });

app.get('/api/studyhalls', async (req, res) => {
try {
  const result = await pool.query(`
     SELECT r.id, r.studyhallname, r.address, r.seatcount, 
      r.seatcount - COALESCE((SELECT COUNT(*) FROM seat_bookings WHERE hall_id = r.id), 0) AS availableseats
    FROM registerowner r
    
  `);
  res.status(200).json(result.rows);
} catch (error) {
  res.status(500).json({ error: 'Database error' });
}
});

//Fetching NO.of seats //
// Endpoint to save seat count and study hall details
// app.post('/api/seats_count', async (req, res) => {
//   const {studyhallname, monthly_amount1, monthly_amount2 } = req.body;
  
//   try {
//     const result = await pool.query(
//       'INSERT INTO seats_count (studyhallname, monthly_amount1, monthly_amount2) VALUES ($1, $2, $3) RETURNING *',
//       [studyhallname, monthly_amount1, monthly_amount2]
//     );
//     res.status(201).json(result.rows[0]); // Return the newly inserted row
//   } catch (error) {
//     console.error('Database error:', error.message);
//     res.status(500).json({ error: 'Database error' });
//   }
// });



// Endpoint to get study hall details by ID
// app.get('/api/studyhall/:id', async (req, res) => {
//   const { id } = req.params;

//   try {
//     const result = await pool.query('SELECT * FROM registerowner WHERE id = $1', [id]);
    
    
//     if (result.rows.length > 0) {
//       res.status(200).json(result.rows[0]);
//     } else {
//       res.status(404).json({ error: 'Study hall not found' });
//     }
//   } catch (error) {
//     console.error('Database error:', error.message);
//     res.status(500).json({ error: 'Database error' });
//   }
// });

app.get('/api/studyhall/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const studyHallResult = await pool.query('SELECT * FROM registerowner WHERE id = $1', [id]);
    const bookedSeatsResult = await pool.query('SELECT seat_index FROM seat_bookings WHERE hall_id = $1', [id]);
    const amountResult = await pool.query('SELECT amount FROM seats_count WHERE studyhallname = $1 LIMIT 1', [studyHallResult.rows[0].studyhallname]);
    const availableSeats = studyHallResult.rows[0].seatcount - bookedSeatsResult.rows.length;
    if (amountResult.rows.length === 0) {
      return res.status(404).json({ error: 'Seats count not found for this study hall' });
    }
    
      res.status(200).json({
        ...studyHallResult.rows[0],
        bookedSeats: bookedSeatsResult.rows.map(row => row.seat_index), // Array of booked seat indices
        availableSeats,
        amount: amountResult.rows[0].amount, // Include the amount from the 'seats_count' table
      });
    
  } catch (error) {
    console.error('Database error:', error.message);
    res.status(500).json({ error: 'Database error' });
  }
});


//seatbooking//
// app.post('/api/bookSeats/:hallId', async (req, res) => {
//   const { hallId } = req.params;
//   const { selectedSeats, bookingDetails } = req.body; // Seat indices and booking info

//   try {
//     for (const seatNumber of selectedSeats) {
//       await pool.query(
//         'INSERT INTO seat_bookings (owner_id, hall_id, seat_index, user_email,startdate, enddate, amount) VALUES ($1, $2, $3, $4, $5, $6, $7)',
//         [bookingDetails.ownerId, hallId, seatNumber, bookingDetails.email, bookingDetails.startdate, bookingDetails.enddate, bookingDetails.amount]
//       );
//     }
//     // const seatCountResult = await pool.query(
//     //   'SELECT seatcount FROM registerowner WHERE id = $1',
//     //   [hallId]
//     // );
    
//     // const currentSeatCount = seatCountResult.rows[0].seatcount;
//     // const newSeatCount = currentSeatCount - selectedSeats.length;

//     // await pool.query(
//     //   'UPDATE registerowner SET seatcount = $1 WHERE id = $2',
//     //   [newSeatCount, hallId]
//     // );

//     res.status(200).json({ message: 'Seats booked successfully!' });
//   } catch (error) {
//     console.error('Booking failed:', error);
//     res.status(500).json({ error: 'Database error while booking seats' });
//   }
// });


app.post('/api/bookSeats/:hallId', async (req, res) => {
  const { hallId } = req.params;
  const { selectedSeats, bookingDetails } = req.body; // Seat indices and booking info

  try {

    const result = await pool.query('SELECT * FROM seat_bookings WHERE hall_id = $1', [hallId]);
    for (const seatNumber of selectedSeats) {
      await pool.query(
        'INSERT INTO seat_bookings (hall_id, seat_index, user_email,startdate, enddate, amount) VALUES ($1, $2, $3, $4, $5, $6)',
        [hallId, seatNumber, bookingDetails.email, bookingDetails.startdate, bookingDetails.enddate, bookingDetails.amount]
      );
    }
    // const seatCountResult = await pool.query(
    //   'SELECT seatcount FROM registerowner WHERE id = $1',
    //   [hallId]
    // );
    
    // const currentSeatCount = seatCountResult.rows[0].seatcount;
    // const newSeatCount = currentSeatCount - selectedSeats.length;

    // await pool.query(
    //   'UPDATE registerowner SET seatcount = $1 WHERE id = $2',
    //   [newSeatCount, hallId]
    // );

    res.status(200).json({ message: 'Seats booked successfully!' });
  } catch (error) {
    console.error('Booking failed:', error);
    res.status(500).json({ error: 'Database error while booking seats' });
  }
});



// app.post('/api/bookSeats/:hallId', async (req, res) => {
//   const { hallId } = req.params;
//   const { selectedSeats, bookingDetails } = req.body;

//   console.log("Received:", { hallId, selectedSeats, bookingDetails });

  
//   if (!selectedSeats || !Array.isArray(selectedSeats) || selectedSeats.length === 0) {
//     return res.status(400).json({ error: 'Selected seats are missing or invalid.' });
//   }

//   if (!bookingDetails || !bookingDetails.startdate || !bookingDetails.enddate || !bookingDetails.amount  || !bookingDetails.ownerId){
//     return res.status(400).json({ error: 'Booking details are incomplete.' });
//   }
  
//   try {

//     // Ensure none of the selected seats are already booked
//     // await pool.query('BEGIN');
//     const existingBookings = await pool.query('SELECT seat_index FROM seat_bookings WHERE hall_id = $1 AND seat_index = ANY($2)', [hallId, selectedSeats]);
    
//     if (existingBookings.rows.length > 0) {
//       await pool.query('ROLLBACK');
//       const bookedSeats = existingBookings.rows.map(row => row.seat_index);
//       return res.status(400).json({ error: 'Some seats are already booked.', bookedSeats });
//     }

//     // Insert seat bookings
//     for (const seatNumber of selectedSeats) {
//       await pool.query(
//         'INSERT INTO seat_bookings (owner_id, hall_id, seat_index, user_email,amount, startdate, enddate) VALUES ($1, $2, $3, $4, $5, $6, $7)',
//         [bookingDetails.ownerId, hallId, seatNumber, bookingDetails.email, bookingDetails.amount, bookingDetails.startdate, bookingDetails.enddate]
//       );
//     }
//     // await pool.query('BEGIN');

//     // const insertQuery = 'INSERT INTO seat_bookings (owner_id, hall_id, seat_index, user_email, amount, startdate, enddate) VALUES ($1, $2, $3, $4, $5, $6, $7)';
//     // for (const seatIndex of selectedSeats) {
//     //   await pool.query(insertQuery, [
//     //     bookingDetails.ownerId,
//     //     hallId,
//     //     seatIndex,
//     //     bookingDetails.email,
//     //     bookingDetails.amount,
//     //     bookingDetails.startdate,
//     //     bookingDetails.enddate
//     //   ]);
//     // }
//     // await pool.query('COMMIT');
//     res.status(200).json({ message: 'Seats booked successfully!' });
//   } catch (error) {
//     // await pool.query('ROLLBACK');
//     console.error('Booking failed:', error);
//     res.status(500).json({ error: 'Database error while booking seats' });
//   }
// });
// app.post('/api/bookSeats/:hallId', async (req, res) => {
//   const { hallId } = req.params;
//   const { selectedSeats, bookingDetails } = req.body;
//   console.log("Booking request received:", req.body);
//   if (!req.body.selectedSeats || req.body.selectedSeats.length === 0) {
//     console.log("Error: No seats selected.");
//     return res.status(400).json({ error: 'No seats selected.' });
//   }

//   if (!req.body.bookingDetails || !req.body.bookingDetails.startdate) {
//     console.log("Error: Booking details incomplete.", req.body.bookingDetails);
//     return res.status(400).json({ error: 'Booking details are incomplete.' });
//   }

//   try {
//     const existingBookings = await pool.query(
//       'SELECT seat_index FROM seat_bookings WHERE hall_id = $1 AND seat_index = ANY($2)',
//       [hallId, selectedSeats]
//     );

//     if (existingBookings.rows.length > 0) {
//       return res.status(400).json({ error: 'One or more selected seats are already booked.' });
//     }

//     // Begin a transaction
//     await pool.query('BEGIN');

//     const bookings = selectedSeats.map(seatIndex =>
//       pool.query(
//         'INSERT INTO seat_bookings (hall_id, seat_index, user_email, amount, start_date, end_date) VALUES ($1, $2, $3, $4, $5, $6)',
//         [hallId, seatIndex, bookingDetails.email, bookingDetails.amount, bookingDetails.startdate, bookingDetails.enddate]
//       )
//     );

//     await Promise.all(bookings);

//     // Update the seat count in 'registerowner'
//     await pool.query(
//       'UPDATE registerowner SET seatcount = seatcount - $1 WHERE id = $2',
//       [selectedSeats.length, hallId]
//     );

//     await pool.query('COMMIT');

//     res.status(200).json({ message: 'Seats booked successfully!' });
//   } catch (error) {
//     await pool.query('ROLLBACK');
//     console.error('Booking failed:', error);
//     res.status(500).json({ error: 'Database error while booking seats' });
//   }
// });



//storing amount value//
// app.post('/api/seats_count', async (req, res) => {
//   const { studyhallname, monthly_amount1, num_seats, ownerId } = req.body;

//   if (!studyhallname || !monthly_amount1 || !num_seats || !ownerId) {
//     return res.status(400).json({ error: 'Please provide all required fields.' });
//   }

//   try {
//     const query = `
//       INSERT INTO seats_count (studyhallname, monthly_amount1,  num_seats, owner_id)
//       VALUES ($1, $2, $3, $4)
//       RETURNING id;
//     `;
//     const values = [studyhallname, monthly_amount1, num_seats, ownerId];
//     const result = await pool.query(query, values);

//     res.status(201).json({ message: 'Study hall details saved successfully', id: result.rows[0].id });
//   } catch (err) {
//     console.error('Error saving study hall details:', err);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// app.post('/api/seats_count', async (req, res) => {
//   console.log('Received Body:', req.body);
//   const { monthly_amount1 } = req.body;
//   // console.log('Monthly Amount1:', monthly_amount1);
//   if (!monthly_amount1 || isNaN(Number(monthly_amount1))) {
    
//     console.error('Invalid field: monthly_amount1:', monthly_amount1);
//     return res.status(400).json({ error: 'Please provide a valid amount.' });
//   }

//   try {
//     const query = `
//       INSERT INTO seats_count (monthly_amount1)
//       VALUES ($1);
//       ;
//     `;
//     const values = [parseInt(monthly_amount1)];
//     await pool.query(query, values);

//     res.status(201).json({ message: 'Study hall details saved successfully' });
//   } catch (err) {
//     console.error('Error saving study hall details:', err);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });


app.post('/api/seats_count', async (req, res) => {
  const { studyhallname, amount , num_seats} = req.body;
  console.log("Received data:", { studyhallname, amount, num_seats }); 
  // if (!studyhallname|| isNaN(parseInt(amount)) || !num_seats) {
  //   return res.status(400).json({ error: 'Invalid amount provided' });
  // }
  if (!studyhallname) {
    return res.status(400).json({ error: 'Studyhall name is missing' });
  }
  if (!amount || isNaN(Number(amount))) {
    return res.status(400).json({ error: 'Amount is missing or invalid' });
  }
  if (!num_seats || isNaN(Number(num_seats))) {
    return res.status(400).json({ error: 'Number of seats is missing or invalid' });
  }
  const query = 'INSERT INTO seats_count (studyhallname, amount, num_seats) VALUES ($1, $2, $3) RETURNING *';
  console.log("Executing query:", query, [studyhallname, amount, num_seats]);
  try {
    // Insert the amount into the new owner_amounts table
    // const result = await pool.query(
      
    //   'INSERT INTO seats_count (studyhallname, amount, num_seats) VALUES ($1, $2, $3) RETURNING *',
    //   [studyhallname,parseInt(amount), parseInt(num_seats)]
    // );
   
  
  const result = await pool.query(query, [studyhallname, parseInt(amount), parseInt(num_seats)]);
  res.status(201).json({ message: 'Study hall details saved successfully', data: result.rows[0] });

    // res.status(201).json({ message: 'Monthly amount saved successfully', data: result.rows[0] });
  } catch (error) {
    console.error('Error saving amount:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});


//code for analystics//
// API endpoint to fetch booking data for analysis
app.get('/api/booking-data', async (req, res) => {
try {
  const result = await pool.query('SELECT * FROM seat_bookings');
  res.json(result.rows);
} catch (error) {
  console.error(error);
  res.status(500).send('Error fetching data');
}
});


//payments
app.post('/v1/orders', async (req, res) => {
  try {
    const { amount, currency, receipt, notes } = req.body;

    const options = {
      amount: amount * 100,  // Amount in paise
      currency,
      receipt,
      notes,
    };

    const order = await razorpay.orders.create(options);
    if (!order) {
      return res.status(500).json({ error: 'Order creation failed' });
    }

    // Store the order details
    const orders = readData();
    orders.push({
      order_id: order.id,
      amount: order.amount,
      currency: order.currency,
      receipt: order.receipt,
      status: 'created',
    });
    writeData(orders);

    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating order' });
  }
});

// Payment verification route
app.post('/verify-payment', (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

  const secret = razorpay.key_secret;
  const body = razorpay_order_id + '|' + razorpay_payment_id;

  try {
    const isValidSignature = validateWebhookSignature(body, razorpay_signature, secret);
    if (isValidSignature) {
      const orders = readData();
      const order = orders.find(o => o.order_id === razorpay_order_id);
      if (order) {
        order.status = 'paid';
        order.payment_id = razorpay_payment_id;
        writeData(orders);
      }
      res.status(200).json({ status: 'ok' });
    } else {
      res.status(400).json({ status: 'verification_failed' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: 'Error verifying payment' });
  }
});

// Serve success page
app.get('/payment-success', (req, res) => {
  res.sendFile(path.join(__dirname, '/payments'));
});




app.get("/api/profile/:userId", (req, res) => {
  const userId = req.params.userId; // Retrieve user ID from URL parameter
  pool.query("SELECT * FROM registerowner WHERE id = $1", [userId], (error, result) => {
    if (error) {
      return res.status(500).json({ error: "Failed to fetch user profile" });
    }
    res.json(result.rows[0]); // Return user data
  });
});

// Route to update profile data
app.put("/api/profile", (req, res) => {
  const { id, name, mobile, email } = req.body; // Get user data including ID from the form

  const query = `
    UPDATE registerowner 
    SET name = $1, mobile = $2, email = $3 
    WHERE id = $4
  `;
  const values = [name, mobile, email, id];

  pool.query(query, values, (error, result) => {
    if (error) {
      return res.status(500).json({ error: "Failed to update profile" });
    }
    res.json({ message: "Profile updated successfully" });
  });
});


app.get('/api/bookings/:hallId', async (req, res) => {
  const { hallId } = req.params;
  try {
    const result = await pool.query('SELECT * FROM seat_bookings WHERE hall_id = $1', [hallId]);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Database error:', error.message);
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
});





const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));