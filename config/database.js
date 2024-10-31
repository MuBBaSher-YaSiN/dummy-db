// config/database.js

require('dotenv').config(); // Load environment variables

const { Sequelize } = require('sequelize');

// Initialize Sequelize using individual environment variables
const sequelize = new Sequelize(
  process.env.DB_NAME,          // Database name
  process.env.DB_USERNAME,      // Database username
  process.env.DB_PASSWORD,      // Database password
  {
    host: process.env.DB_HOST,  // Database host
    port: process.env.DB_PORT,  // Database port
    dialect: 'postgres',           // Set dialect to MySQL
    logging: false,             // Disable logging for cleaner output
    pool: {
      max: 5,                   // Maximum number of connection in pool
      min: 0,                   // Minimum number of connection in pool
      acquire: 30000,           // Maximum time in ms to acquire a connection (30 seconds)
      idle: 10000               // Maximum time in ms for a connection to be idle before being released (10 seconds)
    },
    dialectOptions: {
      // connectTimeout: 60000     // Connection timeout in ms (60 seconds)
    }
  }
);

// Test database connection
async function connectDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

module.exports = { sequelize, connectDatabase };
