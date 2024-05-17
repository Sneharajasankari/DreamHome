const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();
const port = 3001; // Change the port number to 3002
app.use(cors());
app.use(bodyParser.json());

dotenv.config();

const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err.message);
  } else {
    console.log('Connected to MySQL database');
  }
});

app.post('/submit', (req, res) => {
  const { firstName, lastName, email, fromDate, toDate } = req.body;

  console.log('Received data:', req.body);

  const sql = `INSERT INTO bookhome (first_name, last_name, email, from_date, to_date)
               VALUES (?, ?, ?, ?, ?)`;

  db.query(
    sql,
    [firstName, lastName, email, fromDate, toDate],
    (err, results) => {
      if (err) {
        console.error('Error inserting into database:', err);
        res.status(500).json({ message: 'Internal Server Error', error: err.message });
      } else {
        console.log('Booking added successfully!');
        res.json({ message: 'Booking added successfully!' });
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
