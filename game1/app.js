// app.js

const express = require('express');
const mysql = require('mysql');

const app = express();
const PORT = process.env.PORT || 3000;

// Database connection parameters
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'csc400'
};

// Created a MySQL connection pool
const pool = mysql.createPool(dbConfig);

// Route to handle form submission
app.post('/saveHighScore', (req, res) => {
  // Extract username and score from the request body
  const { username, score } = req.body;

  // Ensure username and score are present
  if (!username || !score) {
    return res.status(400).json({ error: 'Username and score are required.' });
  }

  // Insert the username and score into the database
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting database connection:', err);
      return res.status(500).json({ error: 'Internal server error.' });
    }

    const sql = 'INSERT INTO high_scores (username, score) VALUES (?, ?)';
    connection.query(sql, [username, score], (err, result) => {
      connection.release(); // Release the connection back to the pool

      if (err) {
        console.error('Error executing SQL query:', err);
        return res.status(500).json({ error: 'Internal server error.' });
      }

      res.status(200).json({ message: 'High score saved successfully.' });
    });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
