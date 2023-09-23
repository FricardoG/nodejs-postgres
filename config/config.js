require('dotenv').config(); // Load configuration from environment variables using 'dotenv' package.

// Configuration object to store various settings.
const config = {
  // Set the environment to the value of NODE_ENV environment variable, default to 'dev'.
  env: process.env.NODE_ENV || 'dev',
  isProd: process.env.NODE_ENV == 'production',
  port: process.env.PORT || 3000,
  dbUser : process.env.DB_USER,
  dbPassword : process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT,
  dbURL: process.env.DATABASE_URL,
}

module.exports = { config }