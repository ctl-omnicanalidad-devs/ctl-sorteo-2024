const mysql = require("mysql");

// Create a pool with the same database connection details
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  connectionLimit: 10, // Define the maximum number of connections in the pool
});

// Helper function to execute queries using the pool
const executeQuery = (query, params = []) => {
  return new Promise((resolve, reject) => {
    pool.query(query, params, (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
};

module.exports = executeQuery;
