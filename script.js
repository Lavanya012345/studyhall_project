// // const express = require('express');
// // const { Pool } = require('pg');
// // require('dotenv').config();

// // const app = express();
// // const port = process.env.PORT || 3000;

// // const pool = new Pool({
// //   user: process.env.DB_USER,
// //   host: process.env.DB_HOST,
// //   database: process.env.DB_NAME,
// //   password: process.env.DB_PASSWORD,
// //   port: process.env.DB_PORT,
// // });

// // pool.connect((err, client, release) => {
// //   if (err) {
// //     return console.error('Error acquiring client', err.stack);
// //   }
// //   client.query('SELECT NOW()', (err, result) => {
// //     release();
// //     if (err) {
// //       return console.error('Error executing query', err.stack);
// //     }
// //     console.log('Connected to PostgreSQL:', result.rows);
// //   });
// // });

// // app.listen(port, () => {
// //   console.log(`Server running on port ${port}`);
// // });


// const express = require('express');
// const { Pool } = require('pg');
// const app = express();
// const port = 5000;

// // PostgreSQL connection setup
// const pool = new Pool({
//   user: 'postgres',
//   host: 'Interface1',
//   database: 'Sample',
//   password: 'Lava@25',
//   port: 5432,
// });

// pool.connect((err) => {
//   if (err) {
//     console.error('Connection error', err.stack);
//   } else {
//     console.log('Connected to PostgreSQL');
//   }
// });

// app.get('/', (req, res) => {
//   res.send('Hello from the backend');
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });




const express = require('express');
const { Pool } = require('pg'); // Import the Pool class from pg
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(bodyParser.json());

// Create a PostgreSQL connection pool
const pool = new Pool({
  host: 'Interface1',    // Your PostgreSQL host
  user: 'postgres', // Your PostgreSQL username
  password: 'Lava@123', // Your PostgreSQL password
  database: 'Student', // Your PostgreSQL database name
  port: 5432            // Default PostgreSQL port
});

// Endpoint to handle user registration
app.post('/register', async (req, res) => {
  const { userId, password } = req.body;
  const sql = 'INSERT INTO users (user_id, password) VALUES ($1, $2) RETURNING *';
  try {
    const result = await pool.query(sql, [userId, password]);
    res.send('User registered successfully.');
  } catch (err) {
    console.error('Failed to register user:', err);
    res.status(500).send('Failed to register user.');
  }
});

// Endpoint to handle user login
app.post('/login', async (req, res) => {
  const { userId, password } = req.body;
  const sql = 'SELECT * FROM users WHERE user_id = $1 AND password = $2';
  try {
    const result = await pool.query(sql, [userId, password]);
    if (result.rows.length > 0) {
      res.send('Login successful.');
    } else {
      res.status(401).send('Invalid credentials.');
    }
  } catch (err) {
    console.error('Error checking credentials:', err);
    res.status(500).send('Error checking credentials.');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
