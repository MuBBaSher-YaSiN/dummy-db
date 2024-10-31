// server.js

require('dotenv').config(); // Load environment variables
const express = require('express');
const { connectDatabase } = require('./config/database');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Test route to ensure the server is working
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Connect to the database and start the server
connectDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
