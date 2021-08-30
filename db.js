// connect db eagleton using pg lib
const Pool = require("pg").Pool; // from pg Promise lib instantiate pool db

const pool = new Pool({
  user: process.env.DB_USER_NAME,
  password: process.env.DB_USER_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  // ssl: {
  //   rejectUnauthorized: false,
  // },
});

// export db connection to the rest of the app
module.exports = pool;
