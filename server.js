require("dotenv").config();
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const path = require("path"); // path comes with node therefore no need extra npm i
const pool = require("./db"); // pg db connection

const app = express(); // app is now express server

const { PORT } = process.env; // same as PORT = process.env.PORT;

// ----------------------------------------------------------------------------
//                                Middleware
// ----------------------------------------------------------------------------
app.use(cors());
// to serve up static files at the root, path comes with node need to require path up above
app.use(express.static(path.resolve(__dirname + "/react-ui/build")));

// req.body parsing middleware so I can get data from client side
app.use(express.json()); // this allows me get access req.body -- only way for me to access to client side, I must communicate thru req.body in json.
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded (converts str => json)

// order matters: session middleware before Passport OAuth
// cookie expires after 10 min
// secrete is key that allows browser know that I am the server
const sess = {
  secret: "keyboard mouse",
  cookie: { maxAge: 600000 },
  id: null,
};
app.use(session(sess));

// ----------------------------------------------------------------------------
//                                Routes
// ----------------------------------------------------------------------------

// create a todo
app.post("/product", async (req, res) => {
  try {
    console.log(req.body); // {name: 'I need to clean'}
    const { name } = req.body; // obj destructor from req.body.name

    // query db, $1 is a place holder [name] this comes from the client side
    const newProduct = await pool.query(
      "INSERT INTO product (name) VALUES($1)",
      [name]
    );

    res.json(newProduct); // if you see output then it has gone right
  } catch (err) {
    console.error(err.message);
  }
});

// get all products

// get a product

// update a product

// delete a product

app.get("/heartbeat", (req, res) => {
  res.json({
    is: "working",
  });
});

// PORT needs
app.listen(PORT, () => {
  console.log(`The server is listening at port ${PORT}`);
});
