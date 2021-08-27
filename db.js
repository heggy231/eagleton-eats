// connect db eagleton using pg lib
const Pool = require('pg').Pool; // from pg Promise lib instantiate pool db

const pool = new Pool({
  user: "",
  password: "",
  host: "localhost",
  port: 5432,
  database: "eagleton",
});

// export db connection to the rest of the app
module.exports = pool;